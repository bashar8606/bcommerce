"use client";
import ProductCard from "@/components/ProductCard";
import { WISHLIST } from "@/constants/apiRoutes";
import useSWRFetcher from "@/hooks/swrFetcher";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function WishlistWidget({}) {
  const { width } = useGetDeviceType();
  const { data, error } = useSWRFetcher(`${WISHLIST}`, true);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data, "data1");

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
                <ProductCard data={item} isWishlist={true} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
