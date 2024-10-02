import { BsHeart } from "react-icons/bs";
import Counter from "../Counter";
import Image from "../Image/image";
import { MdClose } from "react-icons/md";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useCartWidget } from "@/widgets/CartWidget/useCartWidget";
import { useWishlistWidget } from "@/widgets/WishlistWidget/useWishlistWidget";

export default function CartItem({ data, isSidebar }) {
  const { width } = useGetDeviceType();
  const { removeItem, updateItem } = useCartWidget();
  const { handleWishlist } = useWishlistWidget({});

  const moveToWishlist = async (itemId, id) => {
    try {
      await handleWishlist(itemId);
      console.log(`Item ${itemId} successfully moved to wishlist.`);
      await removeItem(data?.id);
    } catch (error) {
      console.error("Error while moving item to wishlist:", error);
    }
  };
  return (
    <div
      className={` lg:mb-4 px-4 py-3 lg:p-4 lg:rounded border-b-8 lg:border border-gray-200 lg:border-neutral-200`}
    >
      <div className="flex space-x-3 ">
        <div className="flex-col-auto w-auto">
          <div className={`aspect-[490/625]  relative ${isSidebar?"w-[84px]":"w-[84px] md:w-[90px]"}`}>
            <Image
              src={data?.product_image}
              sizes="100vw"
              fill
              className="object-cover"
              alt={data?.product_name}
            />
          </div>
        </div>
        <div className=" flex-1 w-full h-full relative">
          <button
            className="absolute top-0 right-0"
            onClick={() => removeItem(data?.id)}
          >
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
                  {data?.variant}
                </span>
              </p>
            </div>
            <div>
              <div className="flex items-end justify-between">
                <div className="flex items-center">
                  {width >= 992 && <Counter data={data} />}
                  <div className="lg:ml-3 text-zinc-800 text-sm lg:text-base font-semibold ">
                    {data?.formatted_sub_total / data?.quantity} SAR
                    <span className="ml-1 text-gray-400 text-sm font-semibold line-through">
                      {data?.formatted_price} SAR
                    </span>
                  </div>
                </div>
                {width >= 992 && (
                  <div>
                    <button
                      className="text-black text-xs font-semibold inline-flex items-center "
                      onClick={() => moveToWishlist(data?.product_id, data?.id)}
                    >
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
      {width < 992 && (
        <div className="w-full flex mt-5">
          <Counter data={data} />

          <button className="text-black w-full text-xs font-semibold inline-flex items-center justify-center">
            <span className="text-lg me-2">
              <BsHeart />
            </span>
            Move to Wishlist
          </button>
        </div>
      )}
    </div>
  );
}
