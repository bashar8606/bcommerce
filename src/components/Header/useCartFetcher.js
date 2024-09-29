import useSWR from 'swr';
import { useState } from 'react';
import { GET_CART } from '@/constants/apiRoutes';

export const useCartFetcher = () => {
    const [cartLength, setCartLength] = useState(0);  // Local state for cart length
    
    const { data, error } = useSWR(`${GET_CART}?token=true`, { 
        onSuccess: (data) => {
        if (data) {
            setCartLength(data.data.carts.length); // Set the cart length based on fetched data
        }}
    });

    return { cart: data?.data?.carts, cartLength, isLoading: !error && !data, isError: error };
};
