"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AppBack from "../AppBack";

export default function ProfileWidget() {
  const [date, setDate] = useState();
  return (
    <>
      <AppBack />

      <div className="md:p-6 md:bg-white md:rounded md:border md:border-stone-200 mb-4">
        <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">
          Account Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 xl:gap-8">
          <div className="">
            <div className="flex justify-between items-end mb-2">
              <Label className="mb-0" htmlFor="email">
                Email address
              </Label>
              {/* <button className=" text-teal-500 text-sm font-semibold underline tracking-wide">
                Edit
              </button> */}
            </div>
            <Input
              type="email"
              id="email"
              value="ahammed.bashar9@gmail.com"
              placeholder="Enter here"
            />
          </div>

          <div className="">
            <div className="flex justify-between items-end mb-2">
              <Label className="mb-0" htmlFor="phone">
                Mobile
              </Label>
              {/* <button className=" text-teal-500 text-sm font-semibold underline tracking-wide">
                Edit
              </button> */}
            </div>
            <Input type="number" id="phone" value="" placeholder="Enter here" />
          </div>
        </div>
      </div>

      <div className="md:p-6 md:bg-white md:rounded md:border md:border-stone-200 md:mb-4">
        <h3 className=" text-black text-lg font-semibold mb-5 leading-relaxed">
          My profile
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-9">
          <div className="">
            <Label htmlFor="currentPassword">First name</Label>
            <Input type="email" id="currentPassword" placeholder="Enter here" />
          </div>

          <div className="">
            <Label htmlFor="NewPassword">Last name</Label>
            <Input type="email" id="NewPassword" placeholder="Enter here" />
          </div>

          <div className="">
            <Label htmlFor="ConfirmPassword">Gender </Label>
            <Input type="email" id="ConfirmPassword" placeholder="Enter here" />
          </div>
          <div className="">
            <Label htmlFor="ConfirmPassword">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <button className="btn btn-primary btn-lg w-48" disabled>
          Update
        </button>
      </div>
    </>
  );
}
