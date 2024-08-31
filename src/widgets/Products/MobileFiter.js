"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BsSliders } from "react-icons/bs";

export default function MobileFilter({ slug }) {
  return (
    <Sheet>
      <SheetTrigger className="w-full text-center text-sm font-medium py-2 inline-flex items-center justify-center border-e border-[#e4e4e4]">
        <span className="inline-block mr-3 text-base ">
          <BsSliders />
        </span>
        Filter{" "}
      </SheetTrigger>
      <SheetContent side={"left"} className="px-0 h-full pt-0">
        <div className="flex flex-col h-full">
          <div className="px-2.5 py-10 relative overflow-hidden bg-gradient-to-br from-stone-200 to-amber-100 rounded-md justify-end items-start gap-[23px] inline-flex">
            <img
              className="w-[93px] left-6 absolute rounded-md shadow"
              src="https://via.placeholder.com/93x241"
            />
            <div className="relative w-[50%] ml-auto">
              <div className=" text-neutral-950 text-lg font-bold uppercase leading-[18px] mb-2">
                GRAB YOUR
                <br />
                ITEM NOW
              </div>
              <div className=" text-orange-400 text-xs font-medium uppercase leading-3">
                SIGN UP/LOGIN
              </div>
            </div>
          </div>

          <div className="py-4 px-3  rounded-md justify-start items-center gap-2.5 flex">
            <div className="w-9 h-9 bg-zinc-100 rounded-[110px] justify-center items-center gap-2.5 flex" />
            <div className="relative">
              <div className=" text-neutral-950 text-base font-normal  capitalize leading-none tracking-tight mb-1">
                Hi Username
              </div>
              <div className=" text-orange-400 text-xs font-medium capitalize leading-3">
                View Profile
              </div>
            </div>
          </div>

          <div className="px-3 "></div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
