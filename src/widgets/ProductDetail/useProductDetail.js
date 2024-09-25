import { useState } from "react";


export const useProductDetail = ({ datas }) => {
    const [productDetail, setProductDetail] = useState({
        id: null,
        name: "",
        price: "",
        size:"",
        sku: datas?.product?.product_stock?.sku
    });

    return {
        productDetail,
        setProductDetail
    };
};
