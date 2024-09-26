"use client";
import { ALL_ORDERS } from "@/constants/apiRoutes";
import OrderItem from "../OrderItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useSWRFetcher from "@/hooks/swrFetcher";

export default function OrdersWidget({}) {
  const { data, error } = useSWRFetcher(`${ALL_ORDERS}`, true);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data, "data1");
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
