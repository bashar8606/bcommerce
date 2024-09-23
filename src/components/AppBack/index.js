import { Link } from "@/i18n/routing";
import Image from "next/image";
import { MdArrowBack } from "react-icons/md";

export default function AppBack() {
  return (
    <div className=" w-full fixed top-0 left-0 bg-white py-[14px] shadow z-[1111]">
      <div className="container items-center gap-3.5 flex">
        <Link href={'/account'} className="text-2xl">
          <MdArrowBack />
        </Link>
        <div className="text-black text-xl font-semibold leading-relaxed  ">
          My profile
        </div>
      </div>
    </div>
  );
}
