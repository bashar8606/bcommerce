
"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function VariantCheckbox() {
  const [selectedSize, setSelectedSize] = useState("m")
  return (
    (

      <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
        <div className="flex items-center space-x-4">
          {variants?.map((variant, i)=>{
            return(
              <Label
            htmlFor={variant?.name}
            className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${variant?.isAvailable === false ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
            <RadioGroupItem value={variant?.name} id={variant?.name} className="peer sr-only" />
            <span>{variant?.name}</span>
          </Label>
            )
          })}
          <Label
            htmlFor="s"
            className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${selectedSize === "s" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
            <RadioGroupItem value="s" id="s" className="peer sr-only" />
            <span>S</span>
          </Label>
          <Label
            htmlFor="m"
            className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${selectedSize === "m" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
            <RadioGroupItem value="m" id="m" className="peer sr-only" />
            <span>M</span>
          </Label>
          <Label
            htmlFor="l"
            className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${selectedSize === "l" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
            <RadioGroupItem value="l" id="l" className="peer sr-only" />
            <span>L</span>
          </Label>
        </div>
      </RadioGroup>)
  );
}


const variants = [
  {
    name: "S",
    isAvailable: false
  },
  {
    name: "M",
    isChecked: true
  },
  {
    name: "L",
  }
]