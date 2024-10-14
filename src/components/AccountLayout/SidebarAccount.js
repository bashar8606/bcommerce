
import { Link } from "@/i18n/routing";
import { userDetail } from "@/recoil/atoms";
import React from "react";
import { useRecoilState } from "recoil";


export default function SidebarAccount({data, path}) {
  const [userDetails, setUserDetails] = useRecoilState(userDetail);
  return (
    <div>
      <div className="p-6 bg-white rounded border border-stone-200 ">
          <div className="">
            <div className="pb-4 border-b">
              <div className=" text-black text-base font-semibold mb-2">
                Hello {userDetails?.first_name}!
              </div>
              <div className=" text-stone-500 text-sm font-medium ">
              {userDetails?.email}
              </div>
            </div>
            <div className="mb-6">
                {data?.map((item, i)=>{
                    return(
                        <Link key={i} href={`${item?.url}`}  className={`${item?.url?.startsWith(path) ? 
    'bg-black text-white border-transparent' : 
    'text-black border-gray-200'}  px-2 py-4  border-b rounded font-medium  gap-1.5 flex`}>{item?.title}</Link>
                    )
                })}
            </div>
            <p className=" text-stone-500 text-sm mb-3"> Legal</p>
            

              <Link href="" className={`text-zinc-800 text-sm font-medium block py-1`}>Terms of use</Link>
              <Link href="" className={`text-zinc-800 text-sm font-medium block py-1`}>Privacy policy</Link>
          </div>
          
        </div>
    </div>
  );
}
