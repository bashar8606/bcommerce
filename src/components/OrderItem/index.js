import Image from "../Image/image";
import Link from "../Link";

export default function OrderItem({ data }) {

  const renderStatus = (status) => {
    switch (status) {
      case 'pending':
        return <span className="status pending text-[#f3ac30]">Pending</span>;
        case 'on_the_way':
        return <span className="status pending">On the way</span>;
      case 'shipped':
        return <span className="status shipped">Shipped</span>;
      case 'delivered':
        return <span className="status delivered text-[#38ae04]">Delivered</span>;
      case 'canceled':
        return <span className="status cancelled">Cancelled</span>;
      default:
        return <span className="status unknown">Unknown Status</span>;
    }
  };



  return (
    <Link
      href="/en/orders/sdf"
      className="block w-full mb-4 p-4 rounded border border-neutral-200"
    >
      <div className="justify-between items-center flex w-full flex-1 mb-4">
        <span className="px-2 py-1 bg-zinc-100 rounded-sm text-black text-xs font-medium inline-block">
          ORDER ID: #{data?.order_id}
        </span>

        <div className="items-center  flex">
          <span className="inline-block w-1.5 h-1.5 bg-amber-500 rounded-full me-2" />
          <div className=" text-zinc-600 text-xs font-medium leading-relaxed">
            Estimated Delivery : Sep 27, 2023{renderStatus(data?.order?.delivery_status)}
          </div>
        </div>
      </div>
      <div className="flex  space-x-3 ">
        <div className="flex-col-auto w-auto">
          <Link href={`/products/${data?.product?.slug}`} className="block aspect-[490/625] w-[90px]  relative">
            <Image
              src={data?.product?.image_190x230}
              fill
              className="object-cover"
              alt={data?.product?.product_name}
            />
          </Link>
        </div>
        <div className=" flex-1 w-full h-full">
          <div className="flex space-x-3">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className=" text-stone-950 text-sm font-normal  leading-tight mb-2">
                {data?.product?.product_name}
                </h3>
                <p className=" mb-2">
                  <span className="text-stone-950 text-sm">Size:</span>
                  <span className="text-stone-950 text-sm font-semibold">
                    {" "}
                    {data?.variation}
                  </span>
                </p>
                <p className=" mb-2">
                  <span className="text-stone-950 text-sm">Qty: </span>
                  <span className="text-stone-950 text-sm font-semibold">
                    {data?.quantity}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
