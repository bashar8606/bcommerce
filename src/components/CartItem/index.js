import Counter from "../Counter";
import Image from "../Image/image";

export default function CartItem({ data }) {
  return (
    <>
      <div className="flex  space-x-3 mb-4 p-4 rounded border border-neutral-200">
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
                  <span className="px-1 py-1 bg-red-50 rounded inline-block text-red-500 text-xs font-bold">
                    10% Off
                  </span>
                </h3>
                <p>
                  <span className="text-stone-950 text-sm">Size:</span>
                  <span className="text-stone-950 text-sm font-semibold">
                    {" "}
                    XL
                  </span>
                </p>
              </div>
              <div>
                <Counter />
              </div>
            </div>
            <div className="flex-col-auto w-auto">
                fgd
            </div>
          </div>
        </div>
      </div>

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
