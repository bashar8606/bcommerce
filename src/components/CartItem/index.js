import { BsHeart } from "react-icons/bs";
import Counter from "../Counter";
import Image from "../Image/image";
import { MdClose } from "react-icons/md";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useCartWidget } from "@/widgets/CartWidget/useCartWidget";

export default function CartItem({ data }) {
  const { width } = useGetDeviceType();
  const { removeItem, updateItem } = useCartWidget();


  return (
    <>
      <div className=" lg:mb-4 px-4 py-3 lg:p-4 lg:rounded border-b-8 lg:border border-gray-200 lg:border-neutral-200">
        <div className="flex space-x-3 ">
        <div className="flex-col-auto w-auto">
          <div className="aspect-[490/625] w-[84px] md:w-[90px] relative">
            <Image
              src={data?.product_image}
              sizes="100vw"
              fill
              className="object-cover"
              alt="logo"
            />
          </div>
        </div>
        <div className=" flex-1 w-full h-full relative">
          <button className="absolute top-0 right-0">
            <MdClose />
          </button>
          <div className="">
            <div>
              <p className="text-neutral-400 text-xs font-medium mb-2 lg:mb-2">
                SKU-12342D
                <span className="px-1 py-1 bg-red-50 ml-[10px]  rounded inline-block text-red-500 text-xs font-bold">
                  10% Off
                </span>
              </p>
              <h3 className=" text-stone-950 text-sm font-normal  leading-tight mb-[10px] lg:mb-3">
                {data?.product_name}
              </h3>
              <p className=" mb-2 lg:mb-2">
                <span className="text-stone-950 text-sm">Size:</span>
                <span className="text-stone-950 text-sm font-semibold">
                  {" "}
                  XL
                </span>
              </p>
            </div>
            <div>
              <div className="flex items-end justify-between">
                <div className="flex items-center">
                  {width >= 992 && <Counter data={data} />}
                  <div className="lg:ml-3 text-zinc-800 text-sm lg:text-base font-semibold ">
                    73.35 SAR
                    <span className="ml-1 text-gray-400 text-sm font-semibold line-through">
                      90.35 SAR
                    </span>
                  </div>
                </div>
                {width >= 992 && (
                  <div>
                    <button className="text-black text-xs font-semibold inline-flex items-center ">
                      <span className="text-lg me-2">
                        <BsHeart />
                      </span>
                      Move to Wishlist
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
        {width < 992 && <div className="w-full flex mt-5"><Counter data={data} />
        
          <button className="text-black w-full text-xs font-semibold inline-flex items-center justify-center">
                      <span className="text-lg me-2">
                        <BsHeart />
                      </span>
                      Move to Wishlist
                    </button>
        </div>}
      </div>
    </>
  );
}


// discount
// : 
// "120"
// formatted_discount
// : 
// "120"
// formatted_price
// : 
// "239"
// formatted_sub_total
// : 
// "238"
// id
// : 
// 3002
// minimum_order_quantity
// : 
// 1
// price
// : 
// "239"
// product_id
// : 
// 236
// product_image
// : 
// "https://test.ikkxa.com/public/images/20240416162755image_72x72_media_54.jpg"
// product_name
// : 
// "Crystal embroidered Jalabiya IK1212 SkyBlue"
// quantity
// : 
// 2
// seller_id
// : 
// 1
// shop_image
// : 
// ""
// shop_name
// : 
// ""
// stock
// : 
// 6
// sub_total
// : 
// "238"
// variant
// : 
// "M"