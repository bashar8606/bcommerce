import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import FilterSideBar from "@/components/FilterSideBar";

export default function Products() {
    return (
        <section className="">
            <div className="container">
                <Breadcrumb className="mb-8">
                    <BreadcrumbList >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex">
                    <div className="flex-col-auto w-[260px] border-e">
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
