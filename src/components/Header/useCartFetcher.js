    import useSWR from 'swr';
    import { useState } from 'react';
    import { GET_CART } from '@/constants/apiRoutes';
    import { useLocale } from 'next-intl';

    export const useCartFetcher = () => {
        const [cartLength, setCartLength] = useState(0);  // Local state for cart length
        const locale = useLocale();
        
        const { data, error } = useSWR(`${GET_CART}lang=${locale}&token=true`, { 
            onSuccess: (data) => {
            if (data) {
                const totalQuantity = data?.data?.carts?.reduce((acc, item) => acc + item.quantity, 0);
                setCartLength(totalQuantity); // Set the cart length based on fetched data
            }}
        });

        return { 
            cart: data?.data?.carts, 
            cartLength, 
            calculations: data?.data?.calculations, 
            isLoading: !error && !data, 
            isError: error };
    };
