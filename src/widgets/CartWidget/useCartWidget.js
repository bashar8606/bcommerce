import useSWR, { mutate } from 'swr';
import { useRecoilState } from 'recoil';
import { cartState } from '@/recoil/atoms';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { loginIsOpen, cartCountState } from "@/recoil/atoms";
import { addCartItem } from '@/lib/getHome';
import { useSession } from 'next-auth/react';
import { CART_LIST } from '@/constants/apiRoutes';
import { fetcherWithToken } from '@/utils/fetcher';

export const useCartWidget = () => {
  const session = useSession();
  const authToken = session?.data?.accessToken
  const { toast } = useToast()
  // const { data, error } = useSWR('/api/cart', fetcher);
  const [cart, setCart] = useRecoilState(cartState);
  const [isOpen, setIsOpen] = useState(false);
  const [openLogin, setOpenLogin] =  useRecoilState(loginIsOpen);
  const [cartCount, setCartCount] = useRecoilState(cartCountState);

  // const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}${CART_LIST}?token=true`, url => fetcherWithToken(url, { token: authToken }));

  const addItem = async (item) => {
    try {
      if(session?.status === "unauthenticated"){
        setOpenLogin(true)
      } else {
        const res = await addCartItem(item, 1, authToken);
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
    }
  };

  // const removeItem = (itemId) => {
  //   const updatedCart = {
  //     ...cart,
  //     items: cart.items.filter((item) => item.id !== itemId),
  //     total: cart.items.reduce((total, item) => item.id !== itemId ? total + item.price : total, 0),
  //   };
  //   setCart(updatedCart);
  //   if (data.isAuthenticated) {
  //     fetch('/api/cart', {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ itemId }),
  //     });
  //   } else {
  //     localStorage.setItem('cart', JSON.stringify(updatedCart));
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
    // removeItem,
    isOpen, setIsOpen,
    // data
  };
};
