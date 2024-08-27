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
import { useState } from "react";

export default function AddToCart({ data, size }) {
  const { addItem } = useCartWidget();

  const [isOpen, setIsOpen] = useState(false);

  const productItem = {};
  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          {size === "lg" ? (
            <button
              className="w-full btn btn-grad btn-lg mb-3 "
              // onClick={() => addItem(data)}
              onClick={() => setIsOpen(true)}
            >
              Add to Bag
            </button>
          ) : (
            <button
              // onClick={() => addItem(data)}
              className="btn btn-outline-secondary"
              onClick={() => setIsOpen(true)}
            >
              Add to Bag
            </button>
          )}
        </DrawerTrigger>
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
              <button className="btn btn-outline-secondary w-full">
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
    </>
  );
}
