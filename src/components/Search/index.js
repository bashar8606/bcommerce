"use client";
import { BiSearch } from "react-icons/bi";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";

export default function Search() {
  const t = useTranslations('Index')
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder={t("searchPlaceHolder")}
        className="pl-4 pr-10 bg-stone-50  border border-gray-200 placeholder:text-neutral-400"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400">
        <BiSearch/>
        {/* <SearchIcon className="h-5 w-5 text-muted-foreground" /> */}
      </div>
    </div>
  );
}
