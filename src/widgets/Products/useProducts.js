import useSWR from 'swr';
import axios from 'axios';
import { FILTER, FILTER_PRODUCTS } from '@/constants/apiRoutes';
import qs from 'qs'

const fetcher = url => axios.get(url).then(res => res.data);

const useProducts = ({slug}) => {
  const query = qs.stringify({
    slug: slug,
    sort: 'newest',
    paginate: 24,
    page: 1,
    // price: {"min":0,"max":0},
    route: "product.by.category",
    // filters: selectedTag ? {
    //     tags: {
    //         slug: {
    //             $eq: selectedTag,
    //         },
    //     },
    // } : undefined,
}, {
    encodeValuesOnly: true,
});


  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}${FILTER_PRODUCTS}?${query}`, fetcher);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProducts;