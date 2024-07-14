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
import ProductThumbSlider from "../ProductThumbSlider";

export default function ProductDetail() {
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
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-4 ">
            <ProductThumbSlider />
          </div>
          <div class="col-span-5 ">
            <h1 className=" text-stone-950 text-xl font-semibold ">
              Lace elegance pintex abaya Lace elegance pintex abaya Printed XL
            </h1>
            <div className="text-sm">Model Number : IE3021</div>
            <div>
              <p>
                73.35 SAR<span>48% Off</span>
              </p>
              <p>140.76 SAR</p>
            </div>
          </div>
          <div class="col-span-3 ">
            <button className="w-full btn ">erf</button>
          </div>
        </div>
      </div>
    </section>
  );
}
