"use client";
import Link from "next/link";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
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
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LoginModal } from "../LoginModal";
import {useTranslations} from 'next-intl'
import { ProfileDropdown } from "./ProfileDropdown";
import { useRecoilState } from "recoil";
import { loginIsOpen } from "@/recoil/atoms";

export default function Header() {
  const { main, isScrollingDown } = useHeader();
  const t = useTranslations('Index')

  const session = useSession();
  console.log(session, "sessionsession");

  const isLogined = session?.status === "authenticated";

  const [isOpen, setIsOpen] =  useRecoilState(loginIsOpen);
  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full   dark:bg-gray-950 dark:text-gray-50"
        ref={main}
      >
        <div className="shadow-sm bg-white z-50  relative py-3 md:py-2">
          <div className="container mx-auto flex justify-between items-center  px-4 md:px-6">
            <div className="flex">
              <Sheet>
                <SheetTrigger className="lg:hidden">
                  <span className="text-2xl">
                    <RxHamburgerMenu />
                  </span>
                </SheetTrigger>
                <SheetContent side={"left"} className="px-0 h-full pt-0">
                  <div className="flex flex-col h-full">
                    {isLogined?      <div className="py-4 px-3  rounded-md justify-start items-center gap-2.5 flex">
                      <div className="w-9 h-9 bg-zinc-100 rounded-[110px] justify-center items-center gap-2.5 flex" />
                      <div className="relative">
                        <div className=" text-neutral-950 text-base font-normal  capitalize leading-none tracking-tight mb-1">
                          {t('HiUsername')}
                        </div>
                        <div className=" text-orange-400 text-xs font-medium capitalize leading-3">
                          {t('ViewProfile')}
                        </div>
                      </div>
                    </div>:
                    <div className="px-2.5 py-10 relative overflow-hidden bg-gradient-to-br from-stone-200 to-amber-100 rounded-md justify-end items-start gap-[23px] inline-flex">
                      <img
                        className="w-[93px] left-6 absolute rounded-md shadow"
                        src="https://via.placeholder.com/93x241"
                      />
                      <div className="relative w-[50%] ml-auto">
                        <div className=" text-neutral-950 text-lg font-bold uppercase leading-[18px] mb-2">
                          {t('GRABYOUR_ITEM NOW')}
                          {/* <br />
                          {t('ITEMNOW')} */}
                        </div>
                        <div onClick={() => setIsOpen(true)} className=" text-orange-400 text-xs font-medium uppercase leading-3">
                          {t('SIGNUP')}/{t('LOGIN')}
                        </div>
                      </div>
                    </div>
                  }
              

                    <div className="px-3 ">
                      <ul className="border-b border-zinc-100 pb-2">
                        <li>
                          <Link
                            href="/"
                            className="flex justify-between py-2 text-zinc-800 text-sm font-semibold "
                          >
                            {/* Jalabiyas */}
                            {t('Jalabiyas')}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="flex justify-between py-2 text-zinc-800 text-sm font-semibold "
                          >
                            {t('Abayas')}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="flex justify-between py-2 text-zinc-800 text-sm font-semibold "
                          >
                            {t('Kids')}
                          </Link>
                        </li>
                      </ul>
                      <ul className="border-b border-zinc-100 pb-2">
                        <li>
                          <Link
                            href="/"
                            className="flex justify-between py-2 text-zinc-800 text-sm font-semibold "
                          >
                            {t('ContactUs')}
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/"
                            className="flex justify-between py-2 text-zinc-800 text-sm font-semibold "
                          >
                            {t('Stores')}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="flex justify-between py-2 text-zinc-800 text-sm font-semibold "
                          >
                            {t('Orders')}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="flex justify-between py-2 text-zinc-800 text-sm font-semibold "
                          >
                            {t('Address')}
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-auto px-3">
                      <div className="flex-col justify-start items-start gap-2.5 flex">
                        <div className="self-stretch px-[7px] py-[3px] bg-gradient-to-r from-orange-300 to-red-300 rounded-[9px] border-b border-zinc-100 justify-start items-center gap-2.5 inline-flex">
                          <div className="px-[7px] py-1 bg-white/90 rounded-[5px] justify-center items-start gap-[5px] flex">
                            <div className="aspect-1/1 w-[30px]"></div>
                            {/* <Image
                                className="w-[30px] h-[30px]"
                                src="https://via.placeholder.com/30x30"
                              /> */}
                          </div>
                          <div className="grow shrink basis-0 py-2 flex-col justify-center items-start gap-[3px] inline-flex">
                            <div className="text-zinc-800 text-xs font-semibold ">
                              {t('DownloadIKKXAAppNow')}{" "}
                            </div>
                            <div className="text-black/40 text-[10px] font-normal ">
                              {t('GetExclusiveDeals')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
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
            </div>
            <div className="md:hidden flex items-center">
              <LangSwitcher />
              <button className="text-xl px-3">
                <BiSearch />
              </button>

              <Link
                href={`/`}
                className="rounded-md px-1 py-2 text-base text-center "
              >
                <span className="flex justify-center ">
                  {" "}
                  <BsHeart />{" "}
                </span>
              </Link>
              <Link
                href={`/en/cart`}
                className="rounded-md px-1 py-2 text-base text-center relative"
              >
                <span className="absolute -top-[2px] -right-[2px] text-white text-xs font-medium  px-1 bg-stone-900 rounded-2xl border border-white flex-col justify-center items-center gap-2 inline-flex">
                  3
                </span>
                <span className="flex justify-center ">
                  {" "}
                  <BsBag />
                </span>
              </Link>
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
                    {t(`${link?.title}`)}
                  </Link>
                );
              })}
            </nav>

            <nav className="hidden space-x-5 md:flex ms-auto align-middle items-center">
              <Search />
              <LangSwitcher />

              <Link
                href={`/wishlist`}
                className="rounded-md px-1 py-2 text-lg text-center "
              >
                <span className="flex justify-center mb-2">
                  {" "}
                  <BsHeart />{" "}
                </span>
                <span className="block text-xs leading-none font-semibold">
                  {t('Wishlist')}
                </span>
              </Link>
              <Link
                href={`/en/cart`}
                className="rounded-md px-1 py-2 text-lg text-center relative"
              >
                <span className="absolute -top-[2px] -right-[2px] text-white text-xs font-medium  px-1 bg-stone-900 rounded-2xl border border-white flex-col justify-center items-center gap-2 inline-flex">
                  3
                </span>
                <span className="flex justify-center mb-2">
                  {" "}
                  <BsBag />
                </span>
                <span className="block text-xs leading-none  font-semibold">
                  {/* Bag */}
                  {t('Bag')}
                </span>
              </Link>
              {isLogined ? <ProfileDropdown/>  : <LoginModal />}
              {/* <button onClick={signOut}>Logout</button> */}
            </nav>
          </div>
        </div>
      </header>
      {/* <BottomMenu/> */}
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
    title: "NewBorn",
  },
  {
    title: "Lingerie",
  },
];
