import useSWR from 'swr';
import { useRecoilState } from 'recoil';
import { cartState } from '@/recoil/atoms';
import { useEffect, useState } from 'react';
import { useLogin } from '../LoginWidget/useLogin';
import { useToast } from '@/hooks/use-toast';
import { loginIsOpen } from "@/recoil/atoms";
// const fetcher = (url) => fetch(url).then((res) => res.json());

export const useCartWidget = () => {
  const { session } = useLogin({})
  const { toast } = useToast()
  // const { data, error } = useSWR('/api/cart', fetcher);
  const [cart, setCart] = useRecoilState(cartState);
  const [isOpen, setIsOpen] = useState(false);
  const [openLogin, setOpenLogin] =  useRecoilState(loginIsOpen);
  // const isAuthenticated = false

  const submitCartData = async (itemData) => {
    const formData = new FormData();
    const authToken = ""

    for (const [key, value] of Object.entries(itemData)) {
      formData.append(key, value);
    }
    
    try {
      const response = await fetch('https://test.ikkxa.com/web-api/cart-store', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        console.error(`Cart api: ${response.status}`);
        return
      }

      const data = await response.json();
      console.log('Success:', data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  const addItem = async (item) => {
    const newItem = { ...item, quantity: 1, token: true };
 
    
    if(session?.status === "unauthenticated"){
      // const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setOpenLogin(true)
      // const itemExists = existingCartItems.some(cartItem => cartItem.product_id === newItem.product_id);

      // if(!itemExists){
      //   existingCartItems.push(newItem);
      //   localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
      //   setIsOpen(true)
      //   setCart(existingCartItems)
      // }
      
    } else {
      const res = await submitCartData(newItem);
      setIsOpen(true)
      toast({
        title: "Scheduled: Catch up",
        variant: "destructive",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
      console.log("API response:", res);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = {
      ...cart,
      items: cart.items.filter((item) => item.id !== itemId),
      total: cart.items.reduce((total, item) => item.id !== itemId ? total + item.price : total, 0),
    };
    setCart(updatedCart);
    if (data.isAuthenticated) {
      fetch('/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      });
    } else {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
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
    isOpen, setIsOpen
  };
};
