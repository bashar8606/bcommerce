import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import fetcher, { fetcherWithToken } from '@/utils/fetcher';

const useSWRFetcher = (url, token) => {

    const session = useSession();
    const authToken = session?.data?.accessToken
    if(token){
        const { data, error } = useSWR(
            authToken ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : null,
            (url) => fetcherWithToken(url, { token: authToken })
        );
        return { data, error };
    } else {
        const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}${GET_CART}?token=true`, fetcher);
        return { data, error };
    }

};

export default useSWRFetcher;
