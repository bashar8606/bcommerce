import useSWR from 'swr';
import axios from 'axios';
import { FILTER } from '@/constants/apiRoutes';


const fetcher = url => axios.get(url).then(res => res.data);

const useCategories = ({slug}) => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}${FILTER}?${slug}`, fetcher);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCategories;