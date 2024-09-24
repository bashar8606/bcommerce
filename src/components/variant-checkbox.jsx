"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function VariantCheckbox({ data, stock, setProductDetail }) {
  const handleChange =(e)=>{
    console.log(e,"changed");
    const stockItem = stock.find(item => item.name === e);
  
    // if (stockItem) {
    //   return stockItem.sku;
    // } else {
    //   return `No SKU found for name: ${name}`;
    // }

    setProductDetail({
      sku:stockItem.sku,
      size:e
    })
  }
  return (
    <>
     <RadioGroup className="flex items-center space-x-2" onValueChange={(e)=>handleChange(e)}>
        {stock?.map((option) => (
          <Label
            key={option.id}
            htmlFor={option.id}
            className={`flex cursor-pointer relative overflow-hidden items-center rounded-lg  border-2 border-muted bg-popover [&:has([data-disabled])]:bg-zinc-100 p-4 hover:bg-accent hover:text-accent-foreground border-zinc-300 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-white [&:has([data-disabled])]:text-slate-500 `}
          >
            {option?.current_stock===0&&<div className="w-16 bottom-0 left-0 h-px origin-bottom-left rotate-[-44.24deg] border border-zinc-300 absolute"></div>}
            {(option?.current_stock>0&&option?.current_stock<2)&&<div className="w-2 h-2 top-[4px] right-[4px] bg-destructive rounded-full  absolute"></div>}
            <RadioGroupItem
              value={option.name}
              id={option.id}
              disabled={option?.current_stock===0}
              className="sr-only "
            />
            <div className="flex-1 ">{option.name}</div>
          </Label>
        ))}
      </RadioGroup>
      {/* <RadioGroup className="flex items-center space-x-2">
        {data?.map((option) => (
          <Label
            key={option.value}
            htmlFor={option.value}
            className="flex cursor-pointer items-center rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground border-zinc-300 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-white"
          >
            <RadioGroupItem
              value={option.value}
              id={option.value}
              className="sr-only"
            />
            <div className="flex-1 ">{option.value}</div>
          </Label>
        ))}
      </RadioGroup> */}
    </>
  );
}

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
