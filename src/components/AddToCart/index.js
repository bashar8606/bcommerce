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
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useCartFetcher } from "../Header/useCartFetcher";
import CartItem from "../CartItem";

export default function AddToCart({ data, size }) {
  const { addItem, isOpen, setIsOpen, isLoading, addToBag } = useCartWidget();
  const { cart } = useCartFetcher();
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
            data?.has_variant ? addToBag(data?.id) : addItem(data?.id, null);
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Add to Bag"}
        </button>
      ) : (
        <button
          // onClick={() => addItem(data)}x
          className="btn btn-outline-secondary"
          onClick={() => {
            data?.has_variant ? addToBag(data?.id) : addItem(data?.id, null);
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Add to Bag"}
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
              <div className="px-3">
                {cart &&
                  cart?.map((item, i) => {
                    return <CartItem isSidebar={true} data={item} key={i} />;
                  })}
              </div>
              <div className="  px-3 grid grid-cols-2 gap-2 ">
                <button className="btn btn-grad w-full">Checkout</button>
                <button
                  className="btn btn-outline-secondary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Continue shoppings
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

              {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}
            </div>
            <div className="max-h-[60vh] overflow-y-auto pb-11">
            {cart &&
              cart?.map((item, i) => {
                return <CartItem isSidebar={true} data={item} key={i} />;
              })}
              </div>

            <div className="bg-white py-2  px-3 grid grid-cols-2 gap-2 absolute bottom-0 left-0 w-full">
              <button className="btn btn-grad w-full">Checkout</button>
              <button
                className="btn btn-outline-secondary w-full"
                onClick={() => setIsOpen(false)}
              >
                Continue shopping
              </button>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
