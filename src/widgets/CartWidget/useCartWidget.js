import useSWR, { mutate } from 'swr';
import { useRecoilState } from 'recoil';
import { cartState } from '@/recoil/atoms';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { loginIsOpen, cartCountState } from "@/recoil/atoms";
import { addCartItem, removeCartItem, updateCartItemQty } from '@/lib/getHome';
import { useSession } from 'next-auth/react';
import { ADD_CART } from '@/constants/apiRoutes';
import axios from 'axios';

export const useCartWidget = () => {
  const session = useSession();
  const authToken = session?.data?.accessToken
  const { toast } = useToast()
  // const { data, error } = useSWR('/api/cart', fetcher);
  const [cart, setCart] = useRecoilState(cartState);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [openLogin, setOpenLogin] =  useRecoilState(loginIsOpen);
  const [cartCount, setCartCount] = useRecoilState(cartCountState);

  const addItem = async (item) => {
    setIsLoading(true)
    try {
      if(session?.status === "unauthenticated"){
        setOpenLogin(true)
      } else {
        const res = await addCartItem(item, 1, authToken);

        // const res = await axios.post(
        //  `${process.env.NEXT_PUBLIC_BASE_URL}${ADD_CART}`,  
        //   {
        //     product_id: item,  
        //     quantity: 1,
        //     token: true,
        //   },
        //   {
        //     headers: {
        //       Authorization: `Bearer ${authToken}`,  
        //       'Content-Type': 'application/json',
        //     },
        //   }
        // );
        if(res.success){
          setCartCount(cartCount + 1)
          setIsOpen(true);
        }
        toast({
          title: "Scheduled: Catch up",
          variant: "destructive",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  };

  const removeItem = async (id) => {
    try {
      if(session?.status === "unauthenticated"){
        setOpenLogin(true)
      } else {
        const res = await removeCartItem(id, authToken);
        if(res.success){
          setCartCount(cartCount - 1)
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
          toast({ 
            title: "Cart item updated",
            variant: "destructive",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
          return true
        } else{
          toast({ 
            title: "Cart item not updated",
            variant: "destructive",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
          return fasle
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

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
    isOpen, 
    setIsOpen,
    updateItem,
    isLoading
  };
};
