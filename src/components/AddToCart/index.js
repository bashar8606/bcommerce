
"use client"
import { useCartWidget } from "@/widgets/CartWidget/useCartWidget";

export default function AddToCart({data}) {
  const {addItem} =useCartWidget()

  const productItem = {
    
  }
  return (
    <button className="w-full btn btn-grad btn-lg mb-3 " onClick={()=>addItem(data)}>Add to Bag</button>
  );
}
