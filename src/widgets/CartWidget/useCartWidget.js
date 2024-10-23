import useSWR, { mutate, useSWRConfig } from 'swr';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { loginIsOpen, cartCountState, cartState, selectedVariantState, errorMessageProductCard } from "@/recoil/atoms";
import { addCartItem, addToWishlist, removeCartItem, updateCartItemQty } from '@/lib/getHome';
import { useSession } from 'next-auth/react';
import { ADD_CART, ADD_WISHLIST, GET_CART } from '@/constants/apiRoutes';
import axios from 'axios';
import { apiFetcher } from '@/utils/fetcher';
import { fetcherWithToken } from "@/utils/fetcher";
import { useLocale } from 'next-intl';
import useGetDeviceType from '@/hooks/useGetDeviceType';


export const useCartWidget = () => {
  const session = useSession();
  const authToken = session?.data?.accessToken
  const { toast } = useToast()
  // const { data, error } = useSWR('/api/cart', fetcher);
  const [cart, setCart] = useRecoilState(cartState);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessages, setErrorMessages] = useRecoilState(errorMessageProductCard);
  const [selectedVariant, setSelectedVariant] = useRecoilState(selectedVariantState);

  const [variantOpen, setIsVariantOpen] = useState(false)


  const [openLogin, setOpenLogin] =  useRecoilState(loginIsOpen);
  const [cartCount, setCartCount] = useRecoilState(cartCountState);
  const { mutate } = useSWRConfig();

  const { width } = useGetDeviceType();

  const locale = useLocale();

  const getPostOptions = (method, token = null) => {
    const options = {
        method: method, //['POST' or 'PUT' or 'GET' or 'DELETE' ]
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Only add the Authorization header if the token is provided
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    return options;
  };

  const getVariantByProductID = (productID) => {
    const product = selectedVariant.find(item => item.productID === productID);
    return product ? product.variant : null;
}

  const findProductInSelectedVariant = (productId) => {
    return selectedVariant?.find(item => item.productID === productId);
  };


  const findProductInCart = (productId, variant) => {
    // Ensure cart is defined and is an array
    if (!Array.isArray(cart)) {
      console.error('cartState is not an array:', cart); // Debugging line
      return null; // or false
    }
  
    // Find the product in the cart
    const product = cart.find(item => item.product_id === productId && item.variant === variant);
    
    // Return the found product or null if not found
    return product || null; // or return false;
  };
  
  const isStockAvailable = (cartProduct, selectedProduct) => {
    return cartProduct.quantity < selectedProduct.stock;
  };

  const addCartItem = async (id, quantity, token, variant, variants_ids=null) => {
    const formData = {
        'product_id': id,
        'quantity': quantity,
        'token': true,
        'variants_name':variant,
        'variants_ids':variants_ids
    }
    const url = `${ADD_CART}`;
    const postOptions = getPostOptions("POST",token); // Token is needed
    const data = await apiFetcher(url, formData, postOptions);
    await mutate(`${GET_CART}lang=${locale}&token=true`); 
    return data;
  }
  

  const addItem = async (item, variant=null, variant_id=null) => {
    setIsLoading(true)
    try {
      if(session?.status === "unauthenticated"){
        setOpenLogin(true)
      } else {
        const res = await addCartItem(item, 1, authToken, variant, variant_id);
        if(res.success){
          mutate(`${GET_CART}lang=${locale}&token=true`);
          setCartCount(cartCount + 1)
          setIsOpen(true);
          if(width < 992){
            setSelectedVariant([])
            setIsVariantOpen(false)
          }
          setErrorMessages({})
        } else {
          handleOutOfStock()
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };


  const handleOutOfStock = () => {
    // Clear selected variants and error messages for small screens
    if (width < 992) {
      setSelectedVariant([]);
      setErrorMessages({});
      setIsVariantOpen(false)
    }
  
    toast({
      variant: "destructive",
      description: "Product is out of stock",
    });
  };

  const removeItem = async (id) => {
    try {
      if(session?.status === "unauthenticated"){
        setOpenLogin(true)
      } else {
        const res = await removeCartItem(id, authToken);
        if(res.success){
          setCartCount(cartCount - 1)
          mutate(`${GET_CART}lang=${locale}&token=true`);
        }
        toast({ 
          title: "Cart item not removed",
          variant: "destructive",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateItem = async (id, quantity) => {
    try {
      if(session?.status === "unauthenticated"){
        setOpenLogin(true)
      } else {
        const res = await updateCartItemQty(id, quantity, authToken);
        if(res.success){
          mutate(`${GET_CART}lang=${locale}&token=true`)
          toast({ 
            title: "Cart item updated",
            variant: "destructive",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
          return res
        } else{
          toast({ 
            title: "Cart item not updated",
            variant: "destructive",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
          return res
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addToBag = (productId) => {
    // Check if the selected variant state has this productId
    const selectedProduct = findProductInSelectedVariant(productId);
    if (!selectedProduct) {
      // Set an error message if no variant is selected
      setErrorMessages({
        [productId]: "Please select a variant for this product."
      });
      return;
    }
  
    const { variant, variantId } = selectedProduct; // Assuming single variant selection
    // Check if the product with this variant exists in the cart
    const cartProduct = findProductInCart(productId, variant);
  
    if (cartProduct) {
      if (isStockAvailable(cartProduct, selectedProduct)) {
        addItem(productId, variant, variantId);
        // Clear the error message if adding succeeds
        setErrorMessages((prevErrors) => ({
          ...prevErrors,
          [productId]: ""
        }));
      } else {
        // Set an error message for out-of-stock scenario
        setErrorMessages({
          [productId]: "Out of stock for this variant."
        });
      }
    } else {
      // Add product to cart if it doesn't exist
      addItem(productId, variant, variantId);
      // Clear any previous error message
      setErrorMessages({
        [productId]: ""
      });
    }
  };

  // const handleWishlist = async (id) => {
  //   try {
  //     if(authToken){
  //       console.log(authToken,"authTokenauthTokenauthToken");
  //       const res = await addToWishlist(id, authToken);
      
  //       console.log(res,"added to wish");
  //       toast({ 
  //         title: "Cart item not removed",
  //         variant: "destructive",
  //         description: "Friday, February 10, 2023 at 5:57 PM",
  //       })
  //     } 
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  // useEffect(() => {
  //   // Sync cart from localStorage for guest users
  //   if (!isAuthenticated) {
  //     const savedCart = localStorage.getItem('cart');
  //     if (savedCart) {
  //       setCart(JSON.parse(savedCart));
  //     }
  //   }
  // }, [isAuthenticated, setCart]);

  return {
    cart: cart,
    // isLoading: !error && !data,
    // isError: error,
    addItem,
    removeItem,
    variantOpen, setIsVariantOpen,
    isOpen, 
    setIsOpen,
    updateItem,
    isLoading,
    addToBag,
    findProductInSelectedVariant,
    errorMessages,
    getVariantByProductID 
  };
};
