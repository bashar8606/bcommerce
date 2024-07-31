"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useHeader } from "./useHeader";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "../Image/image";
import { BsBag } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import Search from "../Search";
import { LangSwitcher } from "./LangSwitcher";
import { BottomMenu } from "./BottomMenu";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  const { main, isScrollingDown } = useHeader();

  const session = useSession();
  console.log(session, "sessionsession");
  return (
    <>
    <header
      className="fixed top-0 left-0 z-50 w-full   dark:bg-gray-950 dark:text-gray-50"
      ref={main}
    >
      <div className="shadow-sm bg-white z-50  relative py-3 md:py-2">
        <div className="container mx-auto flex justify-between items-center  px-4 md:px-6">
          <Link href="/" className="flex items-center" prefetch={false}>
            <div className="aspect-[126/52] w-[84px] md:w-[126px] relative me-5">
              <Image
                src={"/images/logo.png"}
                fill
                className="object-fit-cover"
                alt="logo"
              />
            </div>
          </Link>
          <div className="md:hidden flex items-center">
          <LangSwitcher/>
          <button className="text-2xl px-3">
          <BiSearch/>
          </button>
          </div>
          <nav className="hidden space-x-2 md:flex">
            {links?.map((link, i) => {
              return (
                <Link
                  href="#"
                  key={i}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  {link?.title}
                </Link>
              );
            })}
           
          </nav>

          <nav className="hidden space-x-5 md:flex ms-auto align-middle items-center">
          <Search/>
          <LangSwitcher/>
        
            <Link href={`/`} className="rounded-md px-1 py-2 text-lg text-center ">
              <span className="flex justify-center mb-2"> <BsHeart /> </span>
              <span className="block text-xs leading-none font-semibold">Wishlist</span>
            </Link>
            <Link href={`/`}  className="rounded-md px-1 py-2 text-lg text-center relative">
            <span className="absolute -top-[2px] -right-[2px] text-white text-xs font-medium  px-1 bg-stone-900 rounded-2xl border border-white flex-col justify-center items-center gap-2 inline-flex">3</span>
              <span className="flex justify-center mb-2">  <BsBag /></span>
              <span className="block text-xs leading-none  font-semibold">Bag</span>
            </Link>
            <Link href="/en/login" className="btn btn-grad btn-lg" >
              Login
            </Link>
          </nav>
        
        </div>
      </div>
     
    </header>
    <BottomMenu/>
    </>
  );
}



const links = [
  {
    title: "Jalabiyas",
  },
  {
    title: "Abayas",
  },
  {
    title: "Kids",
  },
  {
    title: "New born",
  },
  {
    title: "Lingerie",
  },
];
