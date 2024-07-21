import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import FilterSideBar from "@/components/FilterSideBar";
import ProductThumbSlider from "../ProductThumbSlider";
import Counter from "@/components/Counter";
import PaymetnIcons from "@/components/PaymentIcons";
import BuyNow from "@/components/BuyNow";
import AddToCart from "@/components/AddToCart";
import { VariantCheckbox } from "@/components/variant-checkbox";

export default function ProductDetail() {
  return (
    <section className="">
      <div className="container">
        <Breadcrumb className="mb-5">
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
          <div class="col-span-12 lg:col-span-4 ">
            <ProductThumbSlider />
          </div>
          <div class="col-span-12 lg:col-span-5 lg:px-5">
            <h1 className=" text-stone-950 text-xl font-semibold mb-3">
              Lace elegance pintex abaya Lace elegance pintex abaya Printed XL
            </h1>
            <div className="text-sm">Model Number : IE3021</div>
            <div className="py-4 border-b border-gray-200">
              <p className="text-xl font-bold mb-2">
                73.35 SAR
                <span className=" ms-2 px-1.5 py-1 bg-red-50 rounded inline-block text-red-500 text-base font-bold">
                  48% Off
                </span>
              </p>
              <p className="text-neutral-400 text-sm line-through">
                140.76 SAR
              </p>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <div class="grid grid-cols-12 gap-4">
                <div className="col-span-3 lg:col-span-2">
                  <div className="aspect-[490/625] w-full relative">
                    <Image
                      src={"/images/b1.png"}
                      fill
                      className="object-cover"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <Counter />
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <VariantCheckbox/>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <h3 className=" text-base font-semibold mb-2">
                About this product
              </h3>

              <p className="text-sm ">
                Elegant Hand Work Jalabiya. Rich And Comfortable Polyester And
                Spun Blended Fabric. Contrast Abstract Print All Over.Designed
                With A Touch Of Velvet To Give A Classy Look.
              </p>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <h3 className=" text-base font-semibold mb-2">Material & Care</h3>

              <p className="text-sm ">
                75% Cotton, 20% Polyester, 100% Cotton, Machine wash
              </p>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <h3 className=" text-base font-semibold mb-3">Specifications</h3>

              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>

                <div class="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>

                <div class="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>

                <div class="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>

                <div class="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-3 ">
            <AddToCart />
            <BuyNow />
            <PaymetnIcons />

            <div className="px-3 py-4 rounded-sm border border-emerald-400 text-black text-xs mb-5">
              {/* <div className="w-11 h-4 justify-center items-center inline-flex" /> */}
              Pay 4 interest-free payments of AED 812.25.Learn more
            </div>

            <div className="px-3 py-4 rounded-sm border border-red-400  text-black text-xs mb-5">
              {/* <div className="w-11 h-4 justify-center items-center inline-flex" /> */}
              Pay 4 interest-free payments of AED 812.25.Learn more
            </div>

            <div className="justify-start items-center gap-3 inline-flex">
              <div className="h-9 w-9 border-solid-neutral-200  rounded-full border "></div>

              <div className="grow shrink basis-0 self-stretch text-black text-sm font-medium ">
                Secure Payments
                <br />
                100% secure payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
