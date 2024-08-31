import Counter from "../Counter";
import Image from "../Image/image";
import Link from "../Link";

export default function OrderItem({ data }) {
  return (
    <>
      <button  className="block w-full mb-4 p-4 rounded border border-neutral-200">
        <div className="justify-between items-center flex w-full flex-1 mb-4">
          <span className="px-2 py-1 bg-zinc-100 rounded-sm text-black text-xs font-medium inline-block">
            ORDER ID: #785489876
          </span>

          <div className="items-center  flex">
            <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full me-2" />
            <div className=" text-zinc-600 text-xs font-medium leading-relaxed">
              Estimated Delivery : Sep 27, 2023
            </div>
          </div>
        </div>
        <div className="flex  space-x-3 ">
          <div className="flex-col-auto w-auto">
            <div className="aspect-[490/625] w-[90px]  relative">
              <Image
                src={"/images/34.png"}
                fill
                className="object-cover"
                alt="logo"
              />
            </div>
          </div>
          <div className=" flex-1 w-full h-full">
            <div className="flex space-x-3">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className=" text-stone-950 text-sm font-normal  leading-tight">
                    Floral Folds with RED color Modest Dress
                  </h3>
                  <p>
                    <span className="text-stone-950 text-sm">Size:</span>
                    <span className="text-stone-950 text-sm font-semibold">
                      {" "}
                      XL
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      {/* <div className="p-4 rounded border border-neutral-200">
        <div className="grid grid-cols-12 gap-4">
          <div className="grid-flow-col auto-cols-auto">
            <div className="aspect-[490/625] w-[90px]  relative">
              <Image
                src={"/images/b1.png"}
                fill
                className="object-cover"
                alt="logo"
              />
            </div>
          </div>
          <div className="grid-flow-col ">
            sdfsdf
            <Counter />
          </div>
          <div className="col-span-3">
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      </div> */}
    </>
  );
}
