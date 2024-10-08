"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import FilterSideBar from "@/components/FilterSideBar";
import useCategories from "./useCategories";
import useProducts from "./useProducts";
import CategoryInnerSlider from "./CategoryInnerSlider";
import LoadMoreTrigger from "@/components/LoadmoreTrigger";
import { BsSliders } from "react-icons/bs";
import { BsSortDown } from "react-icons/bs";
import MobileFilter from "./MobileFiter";
import useGetDeviceType from "@/hooks/useGetDeviceType";

export default function Products({ slug }) {
  const { categories, isLoading, isError } = useCategories({ slug });
  const {width} = useGetDeviceType()
  const { products, filters, handleFilterChange,handleAttributeChange, handlePriceChange, loadMore } =
    useProducts({ slug });

  return (
    <section className="">
      <div className="container">
        <Breadcrumb className="mb-2 lg:mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex">
          {width>=992&&
          <div className="flex-col-auto lg:w-[260px] border-e hidden lg:block">
            {isLoading ? <div>Loading...</div> : ""}
            <FilterSideBar
              catId={products?.page?.id}
              filters={filters}
              data={categories}
              handleAttributeChange={handleAttributeChange}
              handlePriceChange={handlePriceChange}
            />
          </div>
          }
          <div className="flex-col-auto w-full lg:w-[calc(100%-260px)]">
            <CategoryInnerSlider data={products?.results?.page?.categories} />
            <div className="flex justify-between mb-4 border-b lg:px-4 py-3">
              <div className="">
                <h2 className="text-sm lg:text-xl font-semibold">
                  {slug} {products?.products?.total}
                </h2>
              </div>
              <div className="fixed bg-white bottom-0 left-0 w-full z-50 border-b py-1">
              {width<992&&
                <div className="grid lg:hidden grid-cols-2">
                  <div>
                    <MobileFilter  data={categories} />
                  </div>
                  <div>
                    <div>
                      <button className="w-full text-center text-sm font-medium py-2 inline-flex items-center justify-center">
                        <span className="inline-block mr-3  text-base">
                          <BsSortDown />
                        </span>
                        Sort by{" "}
                      </button>
                    </div>
                  </div>
                </div>
}
              </div>
              <div className="hidden lg:block">
                <select
                  name="sort"
                  value={filters.sort}
                  onChange={handleFilterChange}
                  className="p-2 border border-gray-300 rounded"
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="top_selling">Top selling</option>
                  <option value="low_to_high">Price: Low to High</option>
                  <option value="high_to_low">Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 lg:gap-4 lg:px-4">
              {products?.results?.products?.data?.map((product, index) => {
                return (
                  <div className="" key={index}>
                    <ProductCard data={product} />
                  </div>
                );
              })}
              {products?.products?.data?.length > 10 && (
                <LoadMoreTrigger onLoadMore={loadMore} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
