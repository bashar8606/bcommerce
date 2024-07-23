"use client";
import { usePathname } from "next/navigation";
import SidebarAccount from "./SidebarAccount";

const AccountLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <main className={`min-h-screen pt-20 bg-stone-50`}>
      <div className="container ">
      <div class=" w-full max-w-5xl mx-auto ">
        <div className="flex space-x-5 col-span-12">
          <div className="flex-col-auto w-[280px]">
            <SidebarAccount data={links}/>
          </div>
          <div className="flex-1 flex flex-col w-full">
          {children}
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default AccountLayout;

const links = [
  {
    url: "/profile",
    title: "Profile",
    title_sm: "Profile",
    isActive:true,
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
