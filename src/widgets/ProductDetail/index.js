import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductThumbSlider from "../ProductThumbSlider";
import Counter from "@/components/Counter";
import PaymetnIcons from "@/components/PaymentIcons";
import BuyNow from "@/components/BuyNow";
import AddToCart from "@/components/AddToCart";
import { VariantCheckbox } from "@/components/variant-checkbox";
import { IoCardOutline } from "react-icons/io5";
import EmiComponent from "@/components/EmiComponent";
import Link from "next/link";
import Image from "@/components/Image";


export default function ProductDetail({ data }) {
  console.log(data, "asdasd");
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
                Jalabiyas
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage> {data?.product?.product_name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 ">
            <ProductThumbSlider />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:px-5">
            <h1 className=" text-stone-950 text-xl font-semibold mb-3">
              {data?.product?.language_product?.name}
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
              <div className="grid grid-cols-12 gap-4">
                {data?.product?.related?.map((item, i) => {
                  return (
                    <Link key={i} href={`/en/products/${item?.slug}`} className="block col-span-3 lg:col-span-2">
                      <div className="aspect-[490/625] w-full relative" key={i}>
                        <Image src={item?.thumbnail?.original_image} fill className="object-cover" alt="logo" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <Counter />
                <div className="text-orange-600 text-sm font-medium leading-tight">Only 2 left</div>
              </div>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <p className="text-stone-950 text-base font-semibold mb-3">Size: XL</p>
              {data?.product?.attribute_values &&
                <VariantCheckbox data={data?.product?.attribute_values} />}
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

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>

                <div className="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>

                <div className="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>

                <div className="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>

                <div className="col-span-6 ">
                  <p className=" text-stone-500 text-sm mb-1">Colour</p>
                  <div className=" text-black text-sm font-medium ">Green</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 ">
            <div className="sticky top-24">

              <AddToCart />
              <BuyNow />
              <PaymetnIcons />

              <EmiComponent type="tabby" />
              <EmiComponent type="tamara" />

              <div className="justify-start items-center gap-3 inline-flex">
                <div className="h-9 w-9 border-solid-neutral-200  rounded-full border flex items-center justify-center">
                  <IoCardOutline />
                </div>

                <div className="grow shrink basis-0 self-stretch text-black text-sm font-medium ">
                  Secure Payments
                  <br />
                  100% secure payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
