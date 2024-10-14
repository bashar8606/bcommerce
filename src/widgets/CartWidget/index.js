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
import { useCartFetcher } from "@/components/Header/useCartFetcher";
import NoCart from "./NoCart";


const CartWidget = () => {
  // const { cart, isLoading, isError, addItem, removeItem } = useCartWidget();
  const { width } = useGetDeviceType();
  const { cart, calculations, isLoading} = useCartFetcher()

  // if (cart?.length===0) return <NoCart/>;
  
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
            {cart?.map((item, i) => {
              return <CartItem data={item} key={i} />;
            })}

            {/* {cart.items.map((item) => (
              <CartItem key={item.id} />
            ))} */}
          </div>
          <div className="flex-col-auto w-full lg:w-[28%] lg:px-4">
            <OrderSummary data={calculations} />
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
