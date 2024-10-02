import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "../Link";

export function AddressModal({data}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-outline-secondary btn-sm">Edit</button>
      </DialogTrigger>
      <DialogContent className="h-screen md:h-auto sm:max-w-[640px] p-10 rounded-1">
        <DialogHeader>
          <div className="">
            <h3 className=" text-black text-2xl font-semibold ">
              Add new address
            </h3>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="">
            <Label htmlFor="name">First Name*</Label>
            <Input
              id="name"
              defaultValue={data?.name}
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="name">Last Name*</Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="name">Mobile number*</Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="">
            <Label htmlFor="username">Building Number / Name</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>

          <div className="">
            <Label htmlFor="username">Street name / Area*</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>

          <div className="">
            <Label htmlFor="username">City*</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>

          <div className="">
            <Label htmlFor="username">State</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>



        </div>

        <div className=" ">
          <button className="btn btn-primary btn-lg  ">Add address</button>

        
        </div>
      </DialogContent>
    </Dialog>
  );
}
