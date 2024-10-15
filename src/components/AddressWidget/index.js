"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddressItem from "../AddressItem";
import { ALL_ADDRESSES, ALL_ORDERS } from "@/constants/apiRoutes";
import useSWR from "swr";
import { AddressModal } from "../AddressModal";

export default function AddressWidget() {
  const { data, error } = useSWR(`${ALL_ADDRESSES}`);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  {
  }
  return (
    <div className="p-6 bg-white rounded border border-stone-200 mb-4">
      <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">
        Addresses{" "}
      </h3>
      {data?.data?.addresses?.map((item, i) => {
        return <AddressItem data={item} key={i} />;
      })}
      <AddressModal mode='add'/>
    </div>
  );
}
