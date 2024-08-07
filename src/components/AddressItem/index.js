"use client";

export default function AddressItem() {
  return (
    <div className="p-6 rounded border border-gray-200 flex space-x-3 mb-4">
      <div className="flex-col-auto w-auto">
        <div className="w-5 h-5 rounded-full border border-black"></div>
      </div>

      <div className="flex-1 w-full">
        <h3 className="text-black text-base font-semibold mb-3">
          Joseph Samual
          <span className="ms-2 px-1 py-0.5 bg-neutral-200 rounded inline-block text-stone-500 text-xs font-medium ">
            Work
          </span>
        </h3>

        <p className=" text-neutral-500 text-sm font-normal leading-tight mb-4">
          mo1 building , dubai, UAE,{" "}
        </p>
        <p className="text-neutral-500 text-sm font-normal  leading-tight mb-4">
          Mobile:
          <span className="text-black text-sm font-medium leading-tight">
            +971 9123 456 7890
          </span>
        </p>

        <div className="flex justify-between items-center">
          <div>
            <button className="btn btn-outline-secondary btn-sm me-3">
              Remove
            </button>
            <button className="btn btn-outline-secondary btn-sm">Edit</button>
          </div>
          <div className="text-black text-sm font-normal">Default address</div>
        </div>
      </div>
    </div>
  );
}
