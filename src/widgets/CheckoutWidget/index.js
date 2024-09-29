"use client";
import CartItem from "@/components/CartItem";
import PaymetnIcons from "@/components/PaymentIcons";
import OrderSummary from "@/components/OrderSummary";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import axios from "axios";
import { GET_CART } from "@/constants/apiRoutes";
import { swrFetcher } from "@/utils/fetcher";
import useSWRFetcher from "@/hooks/swrFetcher";
import AddressItem from "@/components/AddressItem";

const CheckoutWidget = () => {
  const { width } = useGetDeviceType();

  // const session = useSession();
  // const token = session?.data?.accessToken

  // const fetcher = async (url) => {
  //   const response = await axios.get(url, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });

  //   return response.data;
  // };

  // const { data, error } = useSWR(
  //   token ? `${process.env.NEXT_PUBLIC_BASE_URL}${GET_CART}?token=true` : null, fetcher);

  const { data, error } = useSWRFetcher(`${GET_CART}`, true);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <section className="">
      <div className="container">
        {width >= 992 && (
          <>
            <div className=" justify-center items-center gap-1.5 flex mb-5">
              <div className="p-2 justify-center items-center gap-2 flex">
                <div className="text-center text-black text-sm font-medium ">
                  Cart
                </div>
              </div>
              <div className="w-20 h-px border border-stone-300"></div>
              <div className="p-2  justify-center items-center gap-2 flex">
                <div className="text-center text-black text-sm font-medium ">
                  Address
                </div>
              </div>
              <div className="w-20 h-px border border-stone-300"></div>
              <div className="p-2 opacity-50 justify-center items-center gap-2 flex">
                <div className="text-center text-black text-sm font-medium ">
                  Payment
                </div>
              </div>
            </div>
          </>
        )}

        <h2 className="text-black text-xl font-semibold mb-4">
          Delivery address
        </h2>
      </div>
      <div className="container px-0 lg:px-3">
        <div className="flex flex-wrap lg:-mx-4">
          <div className="flex-col-auto w-full lg:w-[72%] lg:px-4">
            <div className="grid grid-cols-2 gap-4">
            <AddressItem/>
            <AddressItem/>
            </div>
          </div>
          <div className="flex-col-auto w-full lg:w-[28%] lg:px-4">
            <OrderSummary data={data?.data?.calculations} />
            {/* <p>Total: ${cart.total}</p>
            <button onClick={() => addItem({ id: 'new-item', name: 'New Item', price: 10 })}>
              Add Item
            </button> */}
            <PaymetnIcons />
          </div>
        </div>
      </div>
      <div className="container">
      <h2 className="text-black text-xl font-semibold mb-4">
          Delivery address
        </h2>
      </div>
      <div className="container px-0 lg:px-3">
        <div className="flex flex-wrap lg:-mx-4">
          <div className="flex-col-auto w-full lg:w-[72%] lg:px-4">
            <div className="grid grid-cols-2 gap-4">
            <AddressItem/>
            <AddressItem/>
            </div>
          </div>
          <div className="flex-col-auto w-full lg:w-[28%] lg:px-4">
            <OrderSummary data={data?.data?.calculations} />
            {/* <p>Total: ${cart.total}</p>
            <button onClick={() => addItem({ id: 'new-item', name: 'New Item', price: 10 })}>
              Add Item
            </button> */}
            <PaymetnIcons />
          </div>
        </div>
      </div>


    </section>
  );
};

export default CheckoutWidget;
