"use client";
import ProductCard from "@/components/ProductCard";
import { GET_CART, WISHLIST } from "@/constants/apiRoutes";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useSWR, { useSWRConfig } from "swr";
import { useLocale } from "next-intl";

export default function WishlistWidget({}) {
  const { width } = useGetDeviceType();
  const locale = useLocale();

  const { data, error } = useSWR(`${WISHLIST}lang=${locale}`);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section className="pt-2 pb-10">
      <div className="container">
        {width >= 992 && (
          <Breadcrumb className="mb-7">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Wishlist</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <h2 className="text-stone-950 text-2xl font-medium mb-4">
          My Wishlist{" "}
          <span className="text-neutral-400 text-sm font-medium">
            {data?.results?.wishlist?.total} items
          </span>
        </h2>
        <div className="grid grid-cols-5 gap-4 py-4">
          {data?.results?.wishlist?.data?.map((item, i) => {
            return (
              <div key={i}>
                <ProductCard data={item} isWishlist={true}/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
