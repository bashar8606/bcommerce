"use client"
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
import { useProductDetail } from "./useProductDetail";

export default function ProductDetail({ data }) {
  console.log(data, "asdasd");
  const datas = data?.results
  
  const {productDetail, setProductDetail}=useProductDetail({datas})
  return (
    <section className="">
      <div className="container">
        <Breadcrumb className="mb-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <li className="inline-flex items-center gap-1.5">
              <Link
                className="transition-colors hover:text-foreground"
                href="/en/categories/jalabiyas"
              >
                Jalabiyas
              </Link>
            </li>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage> {datas?.product?.product_name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 ">
            <ProductThumbSlider data={datas?.product?.gallery} />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:px-5">
            <h1 className=" text-stone-950 text-xl font-semibold mb-3">
              {datas?.product?.language_product?.name}
            </h1>
            <div className="text-sm">SKU : {productDetail?.sku}</div>
            <div className="py-4 border-b border-gray-200">
              <p className="text-xl font-bold mb-2">
                73.35 SAR
                <span className=" ms-2 px-1.5 py-1 bg-red-50 rounded inline-block text-red-500 text-base font-bold">
                  48% Off
                </span>
              </p>
              <p className="text-neutral-400 text-sm line-through">
              {productDetail?.price} SAR
              </p>
            </div>
            {datas?.product?.related?.length > 0 && (
              <div className="py-3 lg:py-4 border-b border-gray-200">
                <div className="grid grid-cols-12 gap-2">
                  {datas?.product?.related?.map((item, i) => {
                    return (
                      <Link
                        key={i}
                        href={`/en/products/${item?.slug}`}
                        className="block col-span-3 lg:col-span-2"
                      >
                        <div
                          className="aspect-[490/625] w-full relative"
                          key={i}
                        >
                          <Image
                            src={item?.thumbnail?.image_190x230}
                            fill
                            className="object-cover"
                            alt={item?.product_name}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <Counter />
                <div className="text-orange-600 text-sm font-medium leading-tight">
                  Only 2 left
                </div>
              </div>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <p className="text-stone-950 text-base font-semibold mb-3">
                Size: {productDetail?.size}
              </p>
              {datas?.product?.attribute_values && (
                <VariantCheckbox setProductDetail={setProductDetail} stock={datas?.product?.stock} data={datas?.product?.attribute_values} />
              )}
              <p className="text-destructive font-semibold text-sm">Please select a size!</p>
            </div>

            <div className="py-3 lg:py-4 border-b border-gray-200">
              <h3 className=" text-base font-semibold mb-2">
                About this product
              </h3>

              <p className="text-sm ">
              {datas?.product?.language_product?.description}
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
              <AddToCart size={"lg"} data={datas} />
              <BuyNow />
              <div className="mb-3">
                <PaymetnIcons />
              </div>
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
