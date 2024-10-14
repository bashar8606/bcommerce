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
import Link from "next/link";
import { useSWRConfig } from "swr";

export function ProfileDropdown() {
  const { mutate }=useSWRConfig()
  const handleLogout = async () => {
    await signOut();
    mutate(() => true, null, { revalidate: false });
  };
  return (
    <DropdownMenu>
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
          href="/en/profile"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          My Profile
        </Link>
        <Link
          href="/"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          Orders
        </Link>
        <Link
          href="/"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          Addresses
        </Link>
        <Link
          href="/"
          className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
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
