import useSWR from 'swr';
import { useState } from 'react';
import { GET_CART } from '@/constants/apiRoutes';

const fetcher = url => fetch(url).then(res => res.json());

export const useCartFetcher = () => {
  const [cartLength, setCartLength] = useState(0);  // Local state for cart length
  
  const { data, error } = useSWR(`${GET_CART}?token=true`
    , {
        onSuccess: (data) => {
            if (data) {
                console.log("============><============",data);
                setCartLength(data.length); // Set the cart length based on fetched data
      }
    }
  }
);

  return { cart: data, cartLength, isLoading: !error && !data, isError: error };
};
