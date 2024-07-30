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


export default function Products({ slug }) {
  const { categories, isLoading, isError } = useCategories({ slug });
  const { products } = useProducts({ slug });
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
            <FilterSideBar catId={products?.page?.id} data={categories} />
          </div>
          <div className="flex-grow">
            <CategoryInnerSlider/>
            <div className="grid grid-cols-2 mb-4 border-b px-4 py-3">
              <div>
                <h2 className="text-xl font-semibold">Deals of the day</h2>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
