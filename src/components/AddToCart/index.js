"use client";
import { useCartWidget } from "@/widgets/CartWidget/useCartWidget";

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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useRecoilState } from "recoil";
import { cartState } from "@/recoil/atoms";
import { useRouter } from "@/i18n/routing";

export default function AddToCart({ data, size }) {
  const { addItem, isOpen, setIsOpen, isLoading } = useCartWidget();
  const [cartStateItem, setCartStateItem] = useRecoilState(cartState);

  const router = useRouter();

  const isIncluded = cartStateItem.some((item) => item.product_id === data?.id);
  const { width } = useGetDeviceType();

  // const [isOpen, setIsOpen] = useState(false);

  const productItem = {};
  return (
    <>
    
      {size === "lg" ? (
        <button
          className="w-full btn btn-grad btn-lg  mb-3 "
          // onClick={() => addItem(data)}
          onClick={() => {
            !isIncluded ? addItem(data?.id) : router.push("/cart");
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : isIncluded ? "Go to Cart" : "Add to Bag"}
        </button>
      ) : (
        <button
          // onClick={() => addItem(data)}x
          className="btn btn-outline-secondary"
          onClick={() => {
            !isIncluded ? addItem(data?.id) : router.push("/cart");
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : isIncluded ? "Go to Cart" : "Add to Bag"}
        </button>
      )}
      {width >= 992 ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent className="px-0">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="text-stone-950 text-lg font-semibold text-left">
                  <div className="items-center gap-2.5 flex">
                    <div className="w-[26px] h-[26px] bg-emerald-500 rounded-full justify-center items-center gap-2.5 flex" />
                    <div className=" text-emerald-500 text-sm font-semibold ">
                      New item added to cart
                    </div>
                  </div>
                </DrawerTitle>
              </DrawerHeader>
              <div className="  px-3 grid grid-cols-2 gap-2 ">
                <button className="btn btn-grad w-full">Checkout</button>
                <button
                  className="btn btn-outline-secondary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Continue shopping
                </button>
              </div>
              {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="pb-4">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle className="text-stone-950 text-lg font-semibold text-left">
                  <div className="items-center gap-2.5 flex">
                    <div className="w-[26px] h-[26px] bg-emerald-500 rounded-full justify-center items-center gap-2.5 flex" />
                    <div className=" text-emerald-500 text-sm font-semibold ">
                      New item added to cart
                    </div>
                  </div>
                </DrawerTitle>
              </DrawerHeader>
              <div className="  px-3 grid grid-cols-2 gap-2 ">
                <button className="btn btn-grad w-full">Checkout</button>
                <button
                  className="btn btn-outline-secondary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Continue shopping
                </button>
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
      )}
    </>
  );
}
