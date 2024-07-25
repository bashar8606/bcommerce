"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddressItem from "../AddressItem";

export default function AddressWidget() {
  return (
      <div className="p-6 bg-white rounded border border-stone-200 mb-4">
        <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">Addresses </h3>

       <AddressItem/>
       <AddressItem/>
      </div>
  );
}
