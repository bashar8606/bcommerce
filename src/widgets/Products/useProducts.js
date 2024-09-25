import useSWR from "swr";
import axios from "axios";
import { FILTER, FILTER_PRODUCTS } from "@/constants/apiRoutes";
import qs from "qs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback, useDebounce } from 'use-debounce';


const fetcher = (url) => axios.get(url).then((res) => res.data);

const useProducts = ({ slug }) => {
  const [paginate, setPaginate] = useState(24);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    sort: 'newest',
    minPrice: 0,
    maxPrice: 899,
  });


  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [debouncedMinPrice] = useDebounce(filters.minPrice, 300);
  const [debouncedMaxPrice] = useDebounce(filters.maxPrice, 300);

  const handleFilterChange = (e) => {
    console.log(e,"eee");
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  
const handlePriceChange = useDebouncedCallback((value) => {
  if (value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: value[0],
      maxPrice: value[1],
      page: 1, 
    }));
  }
}, 300);

  const searchParams = useSearchParams();

  const pages = searchParams.get("paginate");
  const priceMax = searchParams.get("priceMax");

  useEffect(() => {
    if (pages !== null) {
      setPaginate(pages);
    }
    if (priceMax !== null) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        // minPrice: value[0],
        maxPrice: priceMax,
        // page: 1, 
      }));
    }
  }, [pages]);
  // ?route=product.by.category&sort=newest&paginate=10&slug=abayas&page=1
  const query = qs.stringify(
    {
      slug: slug,
      sort: filters?.sort,
      paginate: paginate,
      page: 1,
      price: `{"min":${debouncedMinPrice},"max":${debouncedMaxPrice}}`,
      route: "product.by.category",
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}${FILTER_PRODUCTS}?${query}`,fetcher);
  console.log(data,"datadatadatadatadatadatadata");

  return {
    products: data,
    handleFilterChange,
    handlePriceChange,
    filters,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProducts;
