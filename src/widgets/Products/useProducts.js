import useSWR from "swr";
import axios from "axios";
import { FILTER, FILTER_PRODUCTS } from "@/constants/apiRoutes";
import qs from "qs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const useProducts = ({ slug }) => {
  const [paginate, setPaginate] = useState(24);
  const searchParams = useSearchParams();

  const pages = searchParams.get("paginate");

  useEffect(() => {
    if (pages !== null) {
      setPaginate(pages);
    }
  }, [pages]);

  const query = qs.stringify(
    {
      slug: slug,
      sort: "newest",
      paginate: paginate,
      page: 1,
      price: `{"min":${`0`},"max":${`0`}}`,
      route: "product.by.category",
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}${FILTER_PRODUCTS}?${query}`,
    fetcher
  );

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProducts;
