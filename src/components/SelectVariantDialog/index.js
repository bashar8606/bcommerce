"use client";
import { useCartWidget } from "@/widgets/CartWidget/useCartWidget";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";



import { useState } from "react";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useRecoilState } from "recoil";
import { cartState } from "@/recoil/atoms";
import { useRouter } from "@/i18n/routing";

export default function SelectVariantDialog({ stock }) {
  const { addItem, isOpen, setIsOpen, isLoading } = useCartWidget();
  const [cartStateItem, setCartStateItem] = useRecoilState(cartState);

  const router = useRouter();

  const { width } = useGetDeviceType();

  // const [isOpen, setIsOpen] = useState(false);

  const productItem = {};
  return (
    <>
      <Dialog>
        <DialogTrigger  className="btn btn-outline-secondary">Add to Bag</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <RadioGroup className="flex items-center space-x-2" >
        {stock?.map((option) => (
          <Label
            key={option.stock_variant}
            htmlFor={option.stock_variant}
            className={`flex cursor-pointer relative overflow-hidden items-center rounded-lg  border-2 border-muted bg-popover [&:has([data-disabled])]:bg-zinc-100 p-4 hover:bg-accent hover:text-accent-foreground border-zinc-300 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-white [&:has([data-disabled])]:text-slate-500 `}
          >
            {option?.current_stock===0&&<div className="w-16 bottom-0 left-0 h-px origin-bottom-left rotate-[-44.24deg] border border-zinc-300 absolute"></div>}
            {(option?.current_stock>0&&option?.current_stock<2)&&<div className="w-2 h-2 top-[4px] right-[4px] bg-destructive rounded-full  absolute"></div>}
            <RadioGroupItem
              value={option.stock_variant}
              id={option.stock_variant}
              disabled={option?.current_stock===0}
              className="sr-only "
            />
            <div className="flex-1 ">{option.stock_variant}</div>
          </Label>
        ))}
      </RadioGroup>


        </DialogContent>
      </Dialog>

    </>
  );
}