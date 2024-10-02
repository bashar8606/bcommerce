import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import OrderSummary from "../OrderSummary";

export default function BuyNow() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-full btn btn-outline-light btn-lg mb-3">
            Buy Now
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl">
          <div className=" justify-center items-center gap-1.5 inline-flex">
            <div className="p-2 justify-center items-center gap-2 flex">
              <div className="text-center text-black text-sm font-medium ">
                Shipping Address
              </div>
            </div>
            <div className="w-20 h-px border border-stone-300"></div>
            <div className="p-2 opacity-50 justify-center items-center gap-2 flex">
              <div className="text-center text-black text-sm font-medium ">
                Payment
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-7 ">
              <p className=" text-stone-950 text-base font-semibold ">
                Shipping address{" "}
              </p>
              <div></div>
            </div>
            <div className="col-span-12 lg:col-span-5 ">
              <OrderSummary/>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
