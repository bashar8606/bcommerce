import { Input } from "../ui/input";

export default function OrderSummary({data}) {
  return (
    <div className="p-6 bg-stone-50 md:rounded border border-gray-200 ">
      <h4 className=" text-black text-lg font-semibold mb-3">Order Summary</h4>
      <div className="flex items-center space-x-2 pb-5">
        <div className="grid flex-1 gap-2">
          <Input id="link" defaultValue="ONE" placeholder="Enter voucher" />
        </div>
        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </div>

      {/* position: fixed;
    z-index: 1;
    background: #fff;
    top: 0;
    z-index: 11111111;
    left: 0;
    padding: 18px 16px;
    border-bottom: 1px solid #eee; */}

      <div className="py-5 border-t border-b">
        <div className="flex justify-between mb-2">
          <p className="text-black text-sm">Subtotal (2items)</p>
          <p className="text-black text-sm "> {data?.formatted_sub_total} SAR</p>
        </div>

        <div className="flex justify-between mb-2">
          <p className="text-black text-sm">Discount</p>
          <p className="text-sm text-[#00b553]"> -{data?.discount} SAR</p>
        </div>

        <div className="flex justify-between mb-2">
          <p className="text-black text-sm">VAT (Inclusive)</p>
          <p className="text-black text-sm "> 0.00 SAR</p>
        </div>

        <div className="flex justify-between ">
          <p className="text-black text-sm">Shipping charge</p>
          <p className="text-black text-sm ">{data?.formatted_shipping_cost} SAR</p>
        </div>
      </div>
      <div className="flex justify-between py-4 ">
        <p className="text-black text-base font-semibold">Total</p>
        <p className="text-black text-base font-semibold"> {data?.formatted_total} SAR</p>
      </div>
      <div className="fixed lg:static bottom-0 left-0 w-full z-10 bg-white py-3 lg:py-0 px-4 lg:px-0 lg:shadow-none shadow-sm">
        <button className="w-full btn btn-grad btn-lg lg:mb-3 ">
          Proceed to Checkout
        </button>
      </div>
      <div className="px-3 py-2 bg-green-100 rounded-sm border ">
        <div className=" text-emerald-500 text-xs font-semibold ">
          Get free shipping for purchases over 500 SAR!
        </div>
      </div>
    </div>
  );
}
