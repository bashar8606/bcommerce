import Link from "next/link";
import React, { useState } from "react";
import Image from "../Image/image";
import { GoHeart, GoHeartFill } from "react-icons/go";
import AddToCart from "../AddToCart";
import { SlHandbag } from "react-icons/sl";
import SelectVariantDialog from "../SelectVariantDialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import useProductCard from "./useProductCard";
import { useRecoilState } from "recoil";
import { errorMessageProductCard } from "@/recoil/atoms";

export default function ProductCard({ data, isWishlist }) {
  const { selectVariant } = useProductCard();
  const [errorMessages, setErrorMessages] = useRecoilState(
    errorMessageProductCard
  );

  const offerPerc =
    100 - Math.round((data?.discount_percentage / data?.price) * 100);
  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <RadioGroup className="border transition-all  duration-500 translate-y-4 opacity-0  transform group-hover:opacity-100  group-hover:translate-y-0 inline-flex px-1 rounded-md items-center py-1 justify-center space-x-[4px] absolute bottom-[4px] -translate-x-[50%] left-[50%] w-auto  z-50  gap-0 bg-white ">
          {data &&
            data?.stock?.map((option) => (
              <Label
                key={option.stock_variant}
                htmlFor={`${data?.id}${option.stock_variant}`}
                onClick={() => {
                  selectVariant(
                    data?.id,
                    option.stock_variant,
                    option.current_stock,
                    null
                  ),
                    setErrorMessages({});
                }}
                className={`flex mb-0 cursor-pointer text-[14px] justify-center relative overflow-hidden items-center rounded-full min-w-[20px]  border-1 border-muted bg-popover [&:has([data-disabled])]:bg-zinc-100 px-2 py-[2px] hover:bg-accent hover:text-accent-foreground border-zinc-300 [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-white [&:has([data-disabled])]:text-slate-500 `}
              >
                {option?.current_stock === 0 && (
                  <div className="w-16 bottom-0 left-0 h-px origin-bottom-left rotate-[-44.24deg] border border-zinc-300 absolute"></div>
                )}
                {option?.current_stock > 0 && option?.current_stock < 2 && (
                  <div className="w-2 h-2 top-[0px] right-[0px] bg-destructive rounded-full  absolute"></div>
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
           {data?.user_wishlist||isWishlist? <GoHeartFill />:  <GoHeart /> }
          </button>
          <span className="text-xs absolute bottom-0 left-0 font-semibold  px-2 py-[2px] text-[#F2432D] bg-[#FCEFEE] inline-block z-10">
            {data?.special_discount_type} {offerPerc}% Off
          </span>
          {isWishlist ? (
            <Image
              src={data?.product?.image_190x230}
              className="object-cover"
              fill
              alt="sdfsdf"
            />
          ) : (
            <Image
              src={data?.image_190x230}
              className="object-cover"
              fill
              alt="sdfsdf"
            />
          )}
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
        {errorMessages[data.id] && (
          <p style={{ color: "red" }}>{errorMessages[data.id]}</p>
        )}
        <div className="pt-4">
          {/* {data?.has_variant ? (
            <SelectVariantDialog stock={data?.stock} />
          ) : ( */}
          <AddToCart data={data} />
          {/* // )} */}
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
