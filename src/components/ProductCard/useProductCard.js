import { useRecoilState } from "recoil";
import { selectedVariantState } from "@/recoil/atoms";


export default function useProductCard (){
    const [selectedVariant, setSelectedVariant] = useRecoilState(selectedVariantState);

    const selectVariant = (productID, variant, stock, variantId = null) => {
      setSelectedVariant((prevSelectedVariant) => {
        // Check if the product already exists in the state
        const existingProductIndex = prevSelectedVariant.findIndex(
          (item) => item.productID === productID
        );
    
        if (existingProductIndex !== -1) {
          // The product exists, check if the variant already exists
          const existingProduct = prevSelectedVariant[existingProductIndex];
          
          if (existingProduct.variant === variant) {
            // If the variant already exists, do nothing
            return prevSelectedVariant;
          } else {
            // If the variant is different, update the existing product's variant
            const updatedProduct = {
              productID,
              variant,
              stock,
              variantId,
            };
    
            // Replace the old product entry with the updated product entry
            const updatedProductList = [
              ...prevSelectedVariant.slice(0, existingProductIndex),
              updatedProduct,
              ...prevSelectedVariant.slice(existingProductIndex + 1),
            ];
    
            return updatedProductList;
          }
        } else {
          // The product doesn't exist, add it as a new entry
          return [
            ...prevSelectedVariant,
            {
              productID,
              variant,
              stock,
              variantId,
            },
          ];
        }
      });
    };


    return {
        selectVariant
    }
}