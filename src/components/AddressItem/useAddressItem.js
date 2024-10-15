import { DELETE_ADDRESS } from "@/constants/apiRoutes";
import { axiosDeleteWithToken } from "@/lib/getHome";
import { useState } from "react";

export function useAddressItem(){
    const removeHandler = (id) => {
        const res = axiosDeleteWithToken(`${DELETE_ADDRESS}/${id}`)
        console.log(res,'Remove item', id);
    }

    return {
        removeHandler
    }
}