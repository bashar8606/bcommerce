"use client";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LiaSnapchat } from "react-icons/lia";
import PaymetnIcons from "../PaymentIcons";
export default function Footer() {
  return (
    <footer>
      <div className="lg:hidden">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="account" className="w-full">
              Categories
            </TabsTrigger>
            <TabsTrigger value="password" className="w-full">
              Policies
            </TabsTrigger>
            <TabsTrigger value="password" className="w-full">
              Useful links
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="container">
              <ul className="grid grid-cols-2 py-3">
                <li className="mb-2">
                  <Link href={"/"} className=" text-black text-sm  ">
                    Abayas
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={"/"} className=" text-black text-sm  ">
                    {" "}
                    Jalabiyas{" "}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={"/"} className=" text-black text-sm  ">
                    {" "}
                    Casual abayas{" "}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={"/"} className=" text-black text-sm   ">
                    Kids
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={"/"} className=" text-black text-sm  ">
                    Newborn
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href={"/"} className=" text-black text-sm  ">
                    Offer
                  </Link>
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
      <div className="">
        <div className="lg:py-9 bg-neutral-100 hidden lg:block">
          <div className="container">
            <div className="grid grid-cols-3">
              <div>
                <div className="justify-start items-center gap-[19px] inline-flex">
                  <div className="w-[63.54px] h-[63.54px] relative">
                    <div className="w-[63.54px] h-[63.54px] left-0 top-0 absolute rounded-full border-2 border-neutral-200" />
                    <div className="w-7 h-[29px] px-[3.50px] py-[3.62px] left-[17.77px] top-[17.27px] absolute flex-col justify-center items-center inline-flex" />
                  </div>
                  <div className="flex-col  gap-[5px]">
                    <div className=" text-black text-sm    text-left">
                      Talk to us
                    </div>
                    <div className=" text-black text-base font-semibold text-left">
                      966 549 577 332
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="justify-start items-center gap-5  inline-flex">
                  <div className="w-[63.54px] h-[63.54px] relative">
                    <div className="w-[63.54px] h-[63.54px] left-0 top-0 absolute rounded-full border-2 border-neutral-200" />
                    <div className="w-[29px] h-[29px] pl-[2.41px] pr-[2.42px] py-[4.83px] left-[17.52px] top-[17.27px] absolute justify-center items-center inline-flex" />
                  </div>
                  <div className="w-[170px] text-black text-sm    text-left">
                    Write to us
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="justify-start items-center gap-5  inline-flex">
                  <div className="w-[63.54px] h-[63.54px] relative">
                    <div className="w-[63.54px] h-[63.54px] left-0 top-0 absolute rounded-full border-2 border-neutral-200" />
                  </div>
                  <div className="relative">
                    <div className=" text-black text-sm    text-left">
                      B2B Helpcenter
                    </div>
                    <div className="text-black text-base font-semibold text-left ">
                      966 549 577 332
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-8 bg-white">
          <div className="container">
            <div className=" grid-cols-5 hidden lg:grid">
              <div>
                <h3 className=" text-black text-sm font-semibold  mb-2">
                  Categories
                </h3>
                <ul className="">
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Abayas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      {" "}
                      Jalabiyas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      {" "}
                      Casual abayas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm   ">
                      Kids
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Newborn
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Offer
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className=" text-black text-sm font-semibold mb-2 ">
                  Categories
                </h3>
                <ul className="">
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Abayas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      {" "}
                      Jalabiyas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm ">
                      {" "}
                      Casual abayas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Kids
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm ">
                      Newborn
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Offer
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className=" text-black text-sm font-semibold mb-2 ">
                  Categories
                </h3>
                <ul className="">
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm ">
                      Abayas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm ">
                      {" "}
                      Jalabiyas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm ">
                      {" "}
                      Casual abayas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Kids
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm ">
                      Newborn
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Offer
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className=" text-black text-sm font-semibold mb-2 ">
                  Categories
                </h3>
                <ul className="">
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Abayas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      {" "}
                      Jalabiyas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      {" "}
                      Casual abayas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Kids
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Newborn
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Offer
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className=" text-black text-sm font-semibold mb-2 ">
                  Categories
                </h3>
                <ul className="">
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm ">
                      Abayas
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm ">
                      {" "}
                      Jalabiyas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      {" "}
                      Casual abayas{" "}
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Kids
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Newborn
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className=" text-black text-sm  ">
                      Offer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-16 space-y-3">
              <PaymetnIcons />
              <div className="justify-start items-start gap-[13px] inline-flex ">
                <button className="w-10 h-10 p-2 bg-stone-50 rounded-full justify-center items-center text-lg inline-flex">
                  <FaFacebookF />
                </button>
                <button className="w-10 h-10 p-2 bg-stone-50 rounded-full justify-center items-center text-lg inline-flex">
                  <RiTwitterXLine />
                </button>
                <button className="w-10 h-10 p-2 bg-stone-50 rounded-full justify-center items-center text-lg inline-flex">
                  <FaLinkedinIn />
                </button>
                <button className="w-10 h-10 p-2 bg-stone-50 rounded-full justify-center items-center text-lg inline-flex">
                  <FaInstagram />
                </button>
                <button className="w-10 h-10 p-2 bg-stone-50 rounded-full justify-center items-center text-lg inline-flex">
                  <LiaSnapchat />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1  border-t border-zinc-100 py-3 lg:py-4">
            <div>
              <p className=" text-black text-xs md:text-sm  ">
                Copyright © 2023 IKXA all rights reserved.
              </p>
            </div>
            <div className=" lg:text-right">
              <p className="text-black  text-xs md:text-sm   ">
                Designed by <span className="text-blue-700  ">BCOMMERCE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
