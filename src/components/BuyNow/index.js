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

export default function BuyNow() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="w-full btn btn-outline-light btn-lg mb-3">
            Buy Now
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          dfgdfg
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
