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
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

export default function AccountWidget() {
  const [date, setDate] = useState();
  const pathname = usePathname();
  return (
    <div>
      <div className="">
        <div className="pb-4 border-b">
          <div className=" text-black  text-xl font-semibold mb-2">
            Hello David!
          </div>
          <div className=" text-stone-500 text-sm font-medium ">
            johndoe@gmail.com
          </div>
        </div>
        <div className="mb-6">
          {data?.map((item, i) => {
            return (
              <>
                <Link
                  key={i}
                  href={`${item?.url}`}
                  className={`${
                    item?.url?.startsWith(pathname)
                      ? "bg-black text-white border-transparent"
                      : "text-black border-gray-200"
                  }  px-2 py-4  border-b rounded font-medium  gap-1.5 flex`}
                >
                  {item?.title}
                </Link>
              </>
            );
          })}
        </div>
        <p className=" text-stone-500 text-sm mb-3"> Legal</p>

        <Link
          href=""
          className={`text-zinc-800 text-sm font-medium block py-1`}
        >
          Terms of use
        </Link>
        <Link
          href=""
          className={`text-zinc-800 text-sm font-medium block py-1`}
        >
          Privacy policy
        </Link>
    </div>
  </div>
  );
}



const data = [
  {
    url: "/profile",
    title: "Profile",
    title_sm: "Profile",
    isActive: true,
    icon: {
      url: "/assets/images/icons/icon-dl-profile.svg",
      alt: "profile icon",
    },
  },
  {
    url: "/orders",
    title: "Orders",
    title_sm: "Orders",
    icon: {
      url: "/assets/images/icons/icon-dl-orders.svg",
      alt: "shop icon",
    },
  },
  {
    url: "/manage-addresses",
    title: "Address",
    title_sm: "Addresses",
    icon: {
      url: "/assets/images/icons/icon-dl-address.svg",
      alt: "address list icon",
    },
  },
  {
    url: "/change-password",
    title: "Change Password",
    title_sm: "Password",
    icon: {
      url: "/assets/images/icons/icon-dl-password.svg",
      alt: "change password list icon",
    },
  },
  {
    url: "/change-password",
    title: "Logout",
    title_sm: "Password",
    icon: {
      url: "/assets/images/icons/icon-dl-password.svg",
      alt: "change password list icon",
    },
  },
];
