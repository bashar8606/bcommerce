import Link from "next/link";
import React from "react";
import Image from "../Image/image";
import { useCartWidget } from "@/widgets/CartWidget/useCartWidget";
import { GoHeart, GoHeartFill } from "react-icons/go";
import AddToCart from "../AddToCart";
import { SlHandbag } from "react-icons/sl";
import SelectVariantDialog from "../SelectVariantDialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ProductCard({ data }) {
  const { addItem } = useCartWidget();

  const offerPerc =
    100 - Math.round((data?.discount_percentage / data?.price) * 100);
  return (
    <div>
      <div className="relative overflow-hidden">
        <RadioGroup className="flex items-center space-x-2 absolute bottom-0 left-0 w-full z-10">
          {data?.stock?.map((option) => (
            <Label
              key={option.stock_variant}
              htmlFor={`${data?.id}${option.stock_variant}`}
              className={`flex cursor-pointer relative overflow-hidden items-center rounded-lg  border-2 border-muted bg-popover [&:has([data-disabled])]:bg-zinc-100 p-4 hover:bg-accent hover:text-accent-foreground border-zinc-300 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-white [&:has([data-disabled])]:text-slate-500 `}
            >
              {option?.current_stock === 0 && (
                <div className="w-16 bottom-0 left-0 h-px origin-bottom-left rotate-[-44.24deg] border border-zinc-300 absolute"></div>
              )}
              {option?.current_stock > 0 && option?.current_stock < 2 && (
                <div className="w-2 h-2 top-[4px] right-[4px] bg-destructive rounded-full  absolute"></div>
              )}
              <RadioGroupItem
                value={option.stock_variant}
                id={`${data?.id}${option.stock_variant}`}
                disabled={option?.current_stock === 0}
                className="sr-only "
              />
              <div className="flex-1 ">{option.stock_variant}</div>
            </Label>
          ))}
        </RadioGroup>

        <Link
          href={`/en/products/${data?.slug}`}
          className="aspect-portrait block relative bg-slate-50 overflow-hidden rounded-sm"
        >
          {/* <div className='inline-block absolute top-2 font-semibold start-2 bg-red-600 text-white rounded-sm text-[10px] z-10 px-2 py-1'>BEST SELLING</div> */}
          <button className="w-[32.22px] h-[32.22px] border-gray-50 flex-col justify-center items-center  inline-flex absolute top-2 font-semibold end-2 bg-white text-[#C87739] rounded-full z-10 px-2 py-1">
            <GoHeartFill />
            {/* <GoHeart /> */}
          </button>
          <span className="text-xs absolute bottom-0 left-0 font-semibold  px-2 py-[2px] text-[#F2432D] bg-[#FCEFEE] inline-block z-10">
            {data?.special_discount_type} {offerPerc}% Off
          </span>
          <Image
            src={data?.image_190x230}
            className="object-cover"
            fill
            alt="sdfsdf"
          />
        </Link>
      </div>
      <div className="py-2">
        <h4 className="text-sm font-normal line-clamp-2 mb-2">
          {data?.product_name}
        </h4>
        <p className=" text-base font-semibold mb-2 ">
          <span className="text-neutral-800 font-normal text-xs">SAR</span>{" "}
          {data?.discount_percentage}
          <span className="text-neutral-400 text-xs font-semibold line-through ml-1">
            {data?.price}
          </span>
          <span className="text-xs  px-2 py-[2px] text-[#38ae04]  inline-block z-10">
            {offerPerc}% Off
          </span>
        </p>
        <p className=" text-[10px] font-semibold flex items-center ">
          <span className="text-xs text-[#F2432D] me-1">
            <SlHandbag />
          </span>
          Only {data?.current_stock} left in stock
        </p>
        <div className="pt-4">
          {data?.has_variant ? (
            <SelectVariantDialog stock={data?.stock} />
          ) : (
            <AddToCart data={data} />
          )}
        </div>
      </div>
    </div>
  );
}

// "id": 2571,
// "slug": "mandarin-collar-hand-embroidered-jalabiya-cj1044-beige",
// "category_id": 15,
// "product_name": "Mandarin Collar Hand Embroidered Jalabiya CJ1044",
// "special_discount_type": "flat",
// "special_discount_check": 220,
// "discount_percentage": 229,
// "image_190x230": "https://www.ikkxa.com/public/images/20240729102942image_320x320_media_171.jpg",
// "price": 449,
// "rating": 0,
// "reviews_count": 0,
// "current_stock": 10,
// "reward": 0,
// "minimum_order_quantity": 1,
// "todays_deal": 0,
// "has_variant": 1,
// "user_wishlist": false,
// "is_catalog": false,
// "is_classified": false
