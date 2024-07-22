import { Input } from "../ui/input";

export default function OrderSummary() {
  return (
    <div className="p-6 bg-stone-50 rounded border border-gray-200 ">
      <h4 className=" text-black text-lg font-semibold mb-3">Order Summary</h4>
      <div className="flex items-center space-x-2 pb-5">
          <div className="grid flex-1 gap-2">
            <Input
              id="link"
              defaultValue="ONE"
              placeholder="Enter voucher"
            />
          </div>
          <button type="submit"  className="btn btn-primary">
          Apply
          </button>
        </div>


      <div className="py-5 border-t border-b">

      
      <div className="flex justify-between mb-2">
        <p className="text-black text-sm">Subtotal (2items)</p>
        <p className="text-black text-sm "> 95.35 SAR</p>
      </div>

      <div className="flex justify-between mb-2">
        <p className="text-black text-sm">VAT (Inclusive)</p>
        <p className="text-black text-sm ">  0.00 SAR</p>
      </div>

      <div className="flex justify-between ">
        <p className="text-black text-sm">Shipping charge</p>
        <p className="text-black text-sm "> Free</p>
      </div>
      </div>
      <div className="flex justify-between py-4 ">
        <p className="text-black text-base font-semibold">Total</p>
        <p className="text-black text-base font-semibold"> 95.35 SAR</p>
      </div>
     
      <button className="w-full btn btn-grad btn-lg mb-3 ">Add to Bag</button>
      <div className="px-3 py-2 bg-green-100 rounded-sm border ">
  <div className=" text-emerald-500 text-xs font-semibold ">Get free shipping for purchases over 500 SAR!</div>
</div>
    </div>
  );
}
