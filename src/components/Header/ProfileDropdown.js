import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "../Image/image";

import { LiaUserSolid } from "react-icons/lia";
import { signOut } from "next-auth/react";
// import Link from "next/link";
import { useSWRConfig } from "swr";
import { Link } from "@/i18n/routing";
import { useState } from "react";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate }=useSWRConfig()
  const handleLogout = async () => {
    await signOut();
    mutate(() => true, null, { revalidate: false });
  };
  return (
    <DropdownMenu
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          formik.resetForm(); 
        }
      }}
    >
      <DropdownMenuTrigger asChild className="">
        <button className="rounded-md px-1 py-2 text-lg text-center relative">
          <span className="flex text-2xl justify-center mb-1">
            <LiaUserSolid />
          </span>
          <span className="block text-xs leading-none  font-semibold">
            Profile
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <Link
          href="/profile"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          onClick={()=> setIsOpen(false)}
        >
          My Profile
        </Link>
        <Link
          href="/orders"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          onClick={()=> setIsOpen(false)}
        >
          Orders
        </Link>
        <Link
          href="/manage-addresses"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          onClick={()=> setIsOpen(false)}
        >
          Addresses
        </Link>
        <Link
          href="/"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          onClick={()=> setIsOpen(false)}
        >
          Passwords
        </Link>
        <button
          className="relative w-full flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          onClick={handleLogout}
        >
          Logout
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
