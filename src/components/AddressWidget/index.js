"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddressItem from "../AddressItem";
import { ALL_ADDRESSES, ALL_ORDERS } from "@/constants/apiRoutes";
import useSWRFetcher from "@/hooks/swrFetcher";

export default function AddressWidget() {
  const { data, error } = useSWRFetcher(`${ALL_ORDERS}`);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  {console.log(data,"addresssss");}
  return (
      <div className="p-6 bg-white rounded border border-stone-200 mb-4">
        <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">Addresses </h3>

       <AddressItem/>
       <AddressItem/>
      </div>
  );
}
