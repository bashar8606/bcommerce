"use client";

import OrderItem from "../OrderItem";

export default function OrdersWidget({}) {
  return (
    <div className="p-6 bg-white rounded border border-stone-200 mb-4">
      <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">Orders</h3>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
      <OrderItem/>
       </div>
  );
}
