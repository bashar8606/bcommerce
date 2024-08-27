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

export function LangSwitcher() {
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
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            d<span>United arab emirates</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            d<span>Saudi arabia</span>
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
                        src="https://via.placeholder.com/22x17"
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
                        src="https://via.placeholder.com/22x17"
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
                        src="https://via.placeholder.com/22x17"
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
