import useSWR from 'swr';
import { useRecoilState } from 'recoil';
import { cartState } from '@/recoil/atoms';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useCartWidget = () => {
  const { data, error } = useSWR('/api/cart', fetcher);
  const [cart, setCart] = useRecoilState(cartState);

  const addItem = (item) => {
    const updatedCart = {
      ...cart,
      items: [...cart.items, item],
      total: cart.total + item.price,
    };
    setCart(updatedCart);
    if (data.isAuthenticated) {
      // https://www.ikkxa.com/user/addToCart
      fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCart),
      });
    } else {
      // Store in local storage for guest users
      localStorage.setItem('cart', JSON.stringify(updatedCart));
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

  return {
    cart: cart,
    isLoading: !error && !data,
    isError: error,
    addItem,
    removeItem,
  };
};
