import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "../Image/image";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import {usePathname, useRouter, Link} from '@/i18n/routing';
import { useLocale } from "next-intl";
import { useHeader } from "./useHeader";

export function LangSwitcher() {
  const locale = useLocale();
  const { onSelectChange } = useHeader()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="hidden lg:flex">
          <button className="inline-flex items-center">
            <span className="w-8 h-5 block bg-black me-2 relative text-xs md:text-md ">
              <Image
                src={"/images/saudi.png"}
                className="object-cover"
                fill
                alt="sdfsdf"
              />
            </span>
            العربية
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <div className="self-stretch gap-1 flex mb-3">
            <button 
              className={`text-white text-xs font-medium  w-full px-3.5 py-2 ${locale === 'en' ? 'bg-black' : 'bg-gray-200'} rounded`}
              onClick={() => onSelectChange('en')}
            >
              English
            </button>
            <button 
              className={`text-white text-xs font-medium  w-full px-3.5 py-2 ${locale === 'ar' ? 'bg-black' : 'bg-gray-200'} rounded`}
              onClick={() => onSelectChange('ar')}
            >
              العربية
            </button>
          </div>

          {/* <DropdownMenuItem>
            <button className="w-full relative flex items-center ">
              <div className="border border-neutral-200 flex-col justify-start items-start gap-[8.76px] inline-flex">
                <img
                  className="w-[22.30px] h-[16.87px]"
                  src={"/images/saudi.png"}
                />
              </div>
              <div className=" text-black text-sm font-medium ps-3">Saudi</div>

              <div className="w-4 h-4 rounded-full border border-orange-600 relative ml-auto">
                <div className="w-full h-full top-0 left-0 absolute bg-orange-600 rounded-full scale-75" />
              </div>
            </button>
          </DropdownMenuItem> */}
          <DropdownMenuItem>
        <label className="flex items-center w-full cursor-pointer">
          <input
            type="radio"
            name="language"
            value="sa"
            // checked="sa"
            className="hidden"
          />
          <div className="flex items-center w-full">
            <div className="border border-neutral-200 flex-col justify-start items-start gap-[8.76px] inline-flex">
              <img
                className="w-[22.30px] h-[16.87px]"
                src="/images/saudi.png"
                alt="Saudi Arabia"
              />
            </div>
            <div className="text-black text-sm font-medium ps-3">Saudi</div>
            <div className="w-4 h-4 rounded-full border border-orange-600 relative ml-auto">
              <div className="w-full h-full top-0 left-0 absolute bg-orange-600 rounded-full scale-75" />
            </div>
          </div>
        </label>
      </DropdownMenuItem>

      </DropdownMenuContent>
      </DropdownMenu>

      <Drawer>
        <DrawerTrigger asChild className="lg:hidden">
          <button className="inline-flex items-center">
            <span className="w-8 h-5 block bg-black me-2 relative text-xs md:text-md ">
              <Image
                src={"/images/saudi.png"}
                className="object-cover"
                fill
                alt="sdfsdf"
              />
            </span>
            العربية
          </button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-stone-950 text-lg font-semibold text-left">
                {" "}
                Select Country
              </DrawerTitle>
            </DrawerHeader>
            <div className="  px-3">
              <div className="">
                <div className="self-stretch gap-1 flex mb-3">
                  <button className="text-white text-xs font-medium  w-full px-3.5 py-2 bg-black rounded">
                    English
                  </button>
                  <button className="text-black text-xs font-medium w-full px-3.5 py-[9px] bg-gray-200 rounded">
                    العربية
                  </button>
                </div>
                <div className="pb-6">
                  <button className="w-full relative flex items-center bg-neutral-50 rounded-[5px] border border-gray-200 px-3 py-2 mb-1">
                    <div className="border border-neutral-200 flex-col justify-start items-start gap-[8.76px] inline-flex">
                      <img
                        className="w-[22.30px] h-[16.87px]"
                        src={"/images/saudi.png"}
                      />
                    </div>
                    <div className=" text-black text-sm font-medium ps-3">
                      Saudi
                    </div>

                    <div className="w-4 h-4 rounded-full border border-orange-600 relative ml-auto">
                      <div className="w-full h-full top-0 left-0 absolute bg-orange-600 rounded-full scale-75" />
                    </div>
                  </button>

                  <button className="w-full relative flex items-center bg-neutral-50 rounded-[5px] border border-gray-200 px-3 py-2 mb-1">
                    <div className="border border-neutral-200 flex-col justify-start items-start gap-[8.76px] inline-flex">
                      <img
                        className="w-[22.30px] h-[16.87px]"
                        src={"/images/saudi.png"}
                      />
                    </div>
                    <div className=" text-black text-sm font-medium ps-3">
                      Saudi
                    </div>

                    <div className="w-4 h-4 rounded-full border border-orange-600 relative ml-auto">
                      <div className="w-full h-full top-0 left-0 absolute bg-orange-600 rounded-full scale-75" />
                    </div>
                  </button>

                  <button className="w-full relative flex items-center bg-neutral-50 rounded-[5px] border border-gray-200 px-3 py-2 mb-1">
                    <div className="border border-neutral-200 flex-col justify-start items-start gap-[8.76px] inline-flex">
                      <img
                        className="w-[22.30px] h-[16.87px]"
                        src={"/images/saudi.png"}
                      />
                    </div>
                    <div className=" text-black text-sm font-medium ps-3">
                      Saudi
                    </div>

                    <div className="w-4 h-4 rounded-full border border-orange-600 relative ml-auto">
                      <div className="w-full h-full top-0 left-0 absolute bg-orange-600 rounded-full scale-75" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
