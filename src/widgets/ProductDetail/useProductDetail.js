import { useState } from "react";


export const useProductDetail = ({ data }) => {
    const [productDetail, setProductDetail] = useState({
        id: null,
        name: "",
        price: "",
        size:"",
        sku: data?.product?.product_stock?.sku
    });

    return {
        productDetail,
        setProductDetail
    };
};
