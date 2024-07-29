
"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function VariantCheckbox({ data }) {
  const [selectedSize, setSelectedSize] = useState("m")
  return (
    (

      <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
        <div className="flex items-center space-x-4">
          {data?.map((variant, i) => {
            return (
              <Label
                htmlFor={variant?.value}
                key={i}
                className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md cursor-pointer ${variant?.isAvailable === false ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                <RadioGroupItem value={variant?.value} id={variant?.value} className="peer sr-only" />
                <span>{variant?.value}</span>
              </Label>
            )
          })}
        </div>
      </RadioGroup>)
  );
}