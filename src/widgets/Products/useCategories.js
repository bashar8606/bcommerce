import useSWR, { useSWRConfig} from 'swr';
import { FILTER } from '@/constants/apiRoutes';

const useCategories = ({slug}) => {
  const { data, error } = useSWR(`${FILTER}?slug=${slug}`);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCategories;