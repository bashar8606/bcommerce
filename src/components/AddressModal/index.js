import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddressModal } from "./useAddressModal";

export function AddressModal({ data }) {
  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);

  // Fetch countries, states, and cities based on selected country and state
  const { countries, states, cities } = useAddressModal(countryId, stateId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-outline-secondary btn-sm">Edit</button>
      </DialogTrigger>
      <DialogContent className="h-screen md:h-auto sm:max-w-[640px] p-10 rounded-1">
        <DialogHeader>
          <div className="">
            <h3 className=" text-black text-2xl font-semibold ">
              Add new address
            </h3>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div className="">
            <Label htmlFor="name">First Name*</Label>
            <Input id="name" defaultValue={data?.name} className="col-span-3" />
          </div>
          <div className="">
            <Label htmlFor="lastName">Last Name*</Label>
            <Input id="lastName" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="col-span-2">
            <Label htmlFor="mobile">Mobile number*</Label>
            <Input id="mobile" defaultValue={data?.phone_no} className="col-span-3" />
          </div>

          {/* Country Select */}
          <div className="">
            <Label htmlFor="country">Country*</Label>
            <select
              id="country"
              value={countryId || ""}
              onChange={(e) => setCountryId(e.target.value)}
              className="w-full"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          {/* State Select */}
          <div className="">
            <Label htmlFor="state">State*</Label>
            <select
              id="state"
              value={stateId || ""}
              onChange={(e) => setStateId(e.target.value)}
              className="w-full"
              disabled={!countryId}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* City Select */}
          <div className="">
            <Label htmlFor="city">City*</Label>
            <select
              id="city"
              className="w-full"
              disabled={!stateId}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="">
          <button className="btn btn-primary btn-lg">Add address</button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
