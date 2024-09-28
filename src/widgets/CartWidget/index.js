"use client";
import CartItem from "@/components/CartItem";
import { useCartWidget } from "./useCartWidget";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PaymetnIcons from "@/components/PaymentIcons";
import OrderSummary from "@/components/OrderSummary";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import axios from "axios";
import { GET_CART } from '@/constants/apiRoutes';
import { swrFetcher } from '@/utils/fetcher';
import useSWRFetcher from "@/hooks/swrFetcher";


const CartWidget = () => {
  const { cart, isLoading, isError, addItem, removeItem } = useCartWidget();
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

  // const { data, error } = useSWR(token?[`${process.env.NEXT_PUBLIC_BASE_URL}${GET_CART}`, token]:null, // Only fetch if token exists
  //   ([url, token]) =>
  //     fetch(url, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     }).then((res) => res.json()));

const { data, error } = useSWR(`${GET_CART}`); 

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;
  

  return (
    <section className="">
      <div className="container">
        {width >= 992 && (
          <>
            <Breadcrumb className="mb-2">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>My Cart</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className=" justify-center items-center gap-1.5 flex mb-5">
              <div className="p-2 justify-center items-center gap-2 flex">
                <div className="text-center text-black text-sm font-medium ">
                  Shipping Address
                </div>
              </div>
              <div className="w-20 h-px border border-stone-300"></div>
              <div className="p-2 opacity-50 justify-center items-center gap-2 flex">
                <div className="text-center text-black text-sm font-medium ">
                  Payment
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
          Your Cart{" "}
          <span className="text-neutral-500 text-base font-medium ">
            ( 2 item )
          </span>
        </h2>
      </div>
      <div className="container px-0 lg:px-3">
        <div className="flex flex-wrap lg:-mx-4">
          <div className="flex-col-auto w-full lg:w-[72%] lg:px-4">
            {data?.data?.carts?.map((item, i) => {
              return <CartItem data={item} key={i} />;
            })}

            {/* {cart.items.map((item) => (
              <CartItem key={item.id} />
            ))} */}
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

export default CartWidget;
