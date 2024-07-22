"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useHeader } from "./useHeader";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "../Image/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Input } from "../ui/input";
import Search from "../Search";

export default function Header() {
  const { main, isScrollingDown } = useHeader();

  const session = useSession();
  console.log(session, "sessionsession");
  return (
    <header
      className="fixed top-0 left-0 z-50 w-full   dark:bg-gray-950 dark:text-gray-50"
      ref={main}
    >
      <div className="shadow-sm bg-white z-50  relative">
        <div className="container mx-auto flex h-16 items-center  px-4 md:px-6">
          <Link href="#" className="flex items-center" prefetch={false}>
            <div className="aspect-[126/52] w-[126px] relative me-3">
              <Image
                src={"/images/logo.png"}
                fill
                className="object-fit-cover"
                alt="logo"
              />
            </div>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            {links?.map((link, i) => {
              return (
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  prefetch={false}
                >
                  {link?.title}
                </Link>
              );
            })}
             <Search/>
          </nav>

          <nav className="hidden space-x-4 md:flex ms-auto align-middle">
           
            <Link href={`/`} className="rounded-md px-1 py-2 text-2xl">
              {" "}
              <AiOutlineHeart />
            </Link>
            <Link href={`/`}  className="rounded-md px-1 py-2 text-2xl">
              {" "}
              <BiShoppingBag />
            </Link>
            <Link href="/en/login" className="btn btn-primary " >
              Login
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-6 p-6">
                <Link href="#" className="flex items-center" prefetch={false}>
                  <MountainIcon className="h-6 w-6" />
                  <span className="ml-2 text-lg font-semibold">Acme Inc</span>
                </Link>
                <nav className="grid gap-2">
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    prefetch={false}
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    prefetch={false}
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    prefetch={false}
                  >
                    Services
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                    prefetch={false}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* <div className={`shadow-md bg-white transition-transform duration-300 ${isScrollingDown ? '-translate-y-full':'translate-x-0'}`}>
        <div className="container mx-auto flex  items-center justify-center py-1 px-4 md:px-6">
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              prefetch={false}
            >
              Contact
            </Link>
            <button onClick={signIn}>Login</button>
          </nav>
        </div>
      </div> */}
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
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
