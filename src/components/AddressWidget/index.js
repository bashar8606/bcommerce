"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddressWidget() {
  return (
    <>
      <div className="p-6 bg-white rounded border border-stone-200 mb-4">
        <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">Addresses </h3>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-9">
          <div className="">
            <Label htmlFor="NewPassword">New Password</Label>
            <Input type="email" id="NewPassword" placeholder="Enter here" />
          </div>

          <div className="">
            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <Input type="email" id="ConfirmPassword" placeholder="Enter here" />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded border border-stone-200">
        <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">
          My profile
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-9">
          <div className="">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input type="email" id="currentPassword" placeholder="Enter here" />
          </div>

          <div className="">
            <Label htmlFor="NewPassword">New Password</Label>
            <Input type="email" id="NewPassword" placeholder="Enter here" />
          </div>

          <div className="">
            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <Input type="email" id="ConfirmPassword" placeholder="Enter here" />
          </div>
          <div className="">
            <Label htmlFor="ConfirmPassword">Confirm Password</Label>
            <Input type="email" id="ConfirmPassword" placeholder="Enter here" />
          </div>
        </div>

        <button className="btn btn-primary btn-lg w-48" disabled>
          Update
        </button>
      </div>
    </>
  );
}
