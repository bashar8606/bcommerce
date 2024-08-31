"use client";

import OrderItem from "../OrderItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OrdersWidget({}) {
  return (
    <div className="p-6 bg-white rounded border border-stone-200 mb-4">
      <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">
        Orders
      </h3>
      <Tabs defaultValue="Recent">
        <TabsList>
          <TabsTrigger value="Recent">Recent</TabsTrigger>
          <TabsTrigger value="Delivered">Delivered</TabsTrigger>
          <TabsTrigger value="Cancelled">Cancelled</TabsTrigger>
          <TabsTrigger value="Returned">Returned</TabsTrigger>
        </TabsList>
        <TabsContent value="Recent">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </TabsContent>
        <TabsContent value="Delivered">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
