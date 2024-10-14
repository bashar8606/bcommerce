"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "../Image/image";
import useSWR from "swr";
import { TRACK_ORDER } from "@/constants/apiRoutes";

export default function OrderSingleWidget() {
  const [date, setDate] = useState();
  const slug = "IK-6974929309"
  const { data, error } = useSWR(`${TRACK_ORDER}?invoice_no=${slug}`);
  console.log(data,"order-deads");
  return (
    <div className="p-6 bg-white rounded border border-stone-200">
      <div className="justify-between items-center flex mb-6">
        <Link href={"/orders"} className="text-black text-base font-medium ">
          Back to orders
        </Link>
        <button className="text-center text-black text-sm font-medium px-3 py-1.5 rounded-sm border border-black">
          Download Invoice
        </button>
      </div>
      <div className="justify-start items-center gap-3.5 flex mb-6">
        <div className="text-black text-lg font-semibold capitalize leading-relaxed">
          Orders Details{" "}
          <span className="ms-3 px-2 py-1 inline-block text-black text-xs font-medium bg-zinc-100 rounded-sm">
            ORDER ID: #785489876
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-5 mb-12">
        <div>
          <p className="text-black text-sm font-semibold">
            Estimated delivery:{" "}
            <span className="text-black text-sm font-normal">2-7 days</span>{" "}
          </p>
        </div>
        <div className="text-end">
          <p className="text-black text-sm font-semibold">
            Order date:{" "}
            <span className="text-black text-sm font-normal">Mar 23,2023</span>{" "}
          </p>
        </div>
        <div>
          <p className="text-black text-sm font-semibold">
            Payment method:{" "}
            <span className="text-black text-sm font-normal">
              Cash on delivery
            </span>{" "}
          </p>
        </div>
      </div>

      <ul>
        <li className="min-h-[70px] ps-[30px] relative last-of-type:">
          <div className="w-2.5 h-2.5 bg-orange-400 rounded-full absolute left-0 top-[6px]" />
          <div className="w-[2px] h-full origin-top-left  bg-orange-400 absolute left-1 top-[6px]"></div>

          <div className="justify-between flex items-center  ">
            <p className="text-black text-base font-medium">Ordered</p>
            <p className="text-black text-xs font-medium">Mar 23,2023</p>
          </div>
        </li>

        <li className="min-h-[70px] ps-[30px] relative">
          <div className="w-2.5 h-2.5 bg-orange-400 rounded-full absolute left-0 top-[6px]" />
          <div className="w-[2px] h-full origin-top-left  bg-orange-400 absolute left-1 top-[6px]"></div>

          <div className="justify-between flex items-center  ">
            <p className="text-black text-base font-medium">Processed</p>
            <p className="text-black text-xs font-medium">Mar 23,2023</p>
          </div>
        </li>

        <li className="min-h-[70px] ps-[30px] relative">
          <div className="w-2.5 h-2.5 bg-orange-400 rounded-full absolute left-0 top-[6px]" />
          <div className="w-[2px] h-full origin-top-left  bg-orange-400 absolute left-1 top-[6px]"></div>

          <div className="justify-between flex items-center  ">
            <p className="text-black text-base font-medium">Dispatched</p>
            <p className="text-black text-xs font-medium">Mar 23,2023</p>
          </div>
        </li>

        <li className="min-h-[70px] ps-[30px] relative last-of-type:min-h-0">
          <div className="w-2.5 h-2.5 bg-orange-400 rounded-full absolute left-0 top-[6px] " />
          <div className="w-[2px] h-full origin-top-left  bg-orange-400 absolute left-1 top-[6px] li:last-of-type:hidden"></div>

          <div className="justify-between flex items-center  ">
            <p className="text-black text-base font-medium">Delivered </p>
            <p className="text-black text-xs font-medium">Mar 23,2023</p>
          </div>
        </li>
      </ul>

      <div className="w-full h-px bg-neutral-200 my-8"></div>

      <Link href="/en/orders/sdf" className="block w-full mb-8">
        <div className="flex  space-x-3 ">
          <div className="flex-col-auto w-auto">
            <div className="aspect-[490/625] w-[75px]  relative">
              <Image
                src={"/images/34.png"}
                fill
                className="object-cover"
                alt="logo"
              />
            </div>
          </div>
          <div className=" flex-1 w-full h-full">
            <div className="flex space-x-3">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className=" text-stone-950 mb-2 text-sm font-normal  leading-tight">
                    Floral Folds with RED color Modest Dress
                  </h3>
                  <p className=" mb-2 text-stone-950 text-sm">
                    {" "}
                    Size: <span className="font-semibold"> XL </span>{" "}
                  </p>
                  <p className=" mb-2 text-stone-950 text-sm">
                    {" "}
                    Qty : <span className="font-semibold"> 1 </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="">
        <div className=" text-black text-base font-semibold capitalize leading-relaxed mb-[10px]">
          Shipping Address
        </div>
        <div className="">
          <div className="text-neutral-800 text-base font-medium leading-normal mb-1">
            John Doe
          </div>
          <div className=" text-neutral-500 text-sm font-normal leading-normal">
            MO1, Dubai, port saeed, UAE
            <br />
            Phone number : +971 44414242
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-200 my-8"></div>

      <div className="">
        <div className=" text-black text-base font-semibold capitalize leading-relaxed mb-[10px]">
          Order Summary
        </div>
        <ul className=" ">
          <li className="justify-between items-center flex mb-2">
            <div className="text-stone-500 text-sm font-medium ">
              Subtotal
            </div>
            <div className=" text-right text-stone-500 text-sm font-medium ">
              72 SAR{" "}
            </div>
          </li>
          <li className="justify-between items-center flex mb-2">
            <div className="text-stone-500 text-sm font-medium ">
              Discount
            </div>
            <div className="w-56 text-right text-stone-500 text-sm font-medium ">
              - 10 SAR
            </div>
          </li>
          <li className="justify-between items-center flex  mb-2">
            <div className="text-stone-500 text-sm font-medium ">
              Delivery
            </div>
            <div className="w-20 text-right text-green-700 text-sm font-medium ">
              Free
            </div>
          </li>
          <li className="justify-between items-center flex mb-2">
            <div className="text-neutral-900 text-sm font-semibold ">
              Price Details
            </div>
            <div className="w-72 text-right text-stone-500 text-sm font-semibold ">
              62 SAR
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
