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
    attribute_value_id: [],
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
  


  const handleAttributeChange = (attributeId) => {
    console.log(attributeId,"attributeId");
    setFilters((prevFilters) => {
      const updatedAttributes = prevFilters.attribute_value_id.includes(attributeId)
        ? prevFilters.attribute_value_id.filter((id) => id !== attributeId)
        : [...prevFilters.attribute_value_id, attributeId];
      return {
        ...prevFilters,
        attribute_value_id: updatedAttributes,
      };
    });
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
      // price: `{"min":${debouncedMinPrice},"max":${debouncedMaxPrice}}`,
      "attribute_value_id": filters.attribute_value_id,
      route: "product.by.category",
    },
    {
      encodeValuesOnly: true,
      arrayFormat: 'brackets' 
    }
  );
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}${FILTER_PRODUCTS}?${query}`,fetcher);
  console.log(data,"datadatadatadatadatadatadata");

  return {
    products: data,
    handleFilterChange,
    handleAttributeChange,
    handlePriceChange,
    filters,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProducts;
