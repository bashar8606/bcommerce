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


export default function Products({slug}) {
    const { categories, isLoading, isError } = useCategories({slug});
    console.log(categories,"categoriescategories");

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
              <BreadcrumbLink href="/docs/components">
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex">
          <div className="flex-col-auto w-[260px] border-e">
          {isLoading?<div>Loading...</div>:""}
            <FilterSideBar />
          </div>
          <div className="flex-grow">
            <div className="grid grid-cols-2 mb-4 border-b px-4 py-3">
              <div>
                <h2 className="text-xl font-semibold">Deals of the day</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 px-4">
              <div className="">
                <ProductCard />
              </div>
              <div className="">
                <ProductCard />
              </div>
              <div className="">
                <ProductCard />
              </div>
              <div className=" ">
                <ProductCard />
              </div>
              <div className=" ">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import qs from "qs";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import useSWR from "swr";
// import { BLOGS, FILTER } from "@/constants/apiRoutes";
// import ArticleCard from "@/components/ArticleCard";
// import SkeletonWrap from "@/components/SkeletonWrap";
// import { useSearchParams } from "next/navigation";
// import Pagination from "./Pagination";

// import Tags from "./Tags";

// const fetcher = (url) => axios.get(url).then((res) => res.data);

// export default function BlogPaginate({ tags }) {
//     const [page, setPage] = useState(1);
//     const [selectedTag, setSelectedTag] = useState(null);
//     const searchParams = useSearchParams();

//     const tag = searchParams.get("tags")
//     const pages = searchParams.get("page")

//     useEffect(() => {
//         if (tag !== null) {
//             setSelectedTag(tag)
//         }
//         if (pages !== null) {
//             setPage(pages)
//         }
//     }, [tag, pages])

//     const query = qs.stringify({
//         slug: slug,
//     }, {
//         encodeValuesOnly: true,
//     });
//     const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}${FILTER}${query ? `?${query}` : ""}`, fetcher, {
//         dedupingInterval: 60000,
//         revalidateOnFocus: false,
//       });

//     if (error) return <h1>Error</h1>;

//     return (
//         <div >
//             <div className="mb-lg-4 mb-3">
//                 <Tags selectedTag={selectedTag} setPage={setPage} setSelectedTag={setSelectedTag} tags={tags} />
//             </div>
//             {!data ? <SkeletonWrap count={9} cols={3} /> :
//                 <div className="row row-cols-md-2 row-cols-lg-3 g-3 g-xl-4">
//                     {data?.data?.map((item, i) => (
//                         <div className="" key={i}>
//                             <ArticleCard data={item?.attributes} />
//                         </div>
//                     ))}
//                 </div>}
//             {data?.meta?.pagination?.pageCount > 1 ? <Pagination page={page} setPage={setPage} pageCount={data?.meta?.pagination?.pageCount} /> : ""}
//         </div>
//     );
// }
