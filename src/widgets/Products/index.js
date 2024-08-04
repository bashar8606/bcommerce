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


export default function Products({ slug }) {
  const { categories, isLoading, isError } = useCategories({ slug });
  const { products, filters, handleFilterChange, handlePriceChange, loadMore } = useProducts({ slug });
  console.log(products,"categoriescategories");

  return (
    <section className="">
      <div className="container">
        <Breadcrumb className="mb-8">
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
          <div className="flex-col-auto w-[260px] border-e">
            {isLoading ? <div>Loading...</div> : ""}
            <FilterSideBar catId={products?.page?.id} filters={filters} data={categories} handleFilterChange={handleFilterChange} handlePriceChange={handlePriceChange} />
          </div>
          <div className="flex-grow">
            <CategoryInnerSlider/>
            <div className="grid grid-cols-2 mb-4 border-b px-4 py-3">
              <div>
                <h2 className="text-xl font-semibold">{slug} {products?.products?.total}</h2>
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
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4 px-4">
              {products?.products?.data?.map((product, index) => {
                return (
                  <div className="" key={index}>
                    <ProductCard data={product}  />
                  </div>
                )
              })}
              {products?.products?.data?.length>10&&
               <LoadMoreTrigger onLoadMore={loadMore} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
