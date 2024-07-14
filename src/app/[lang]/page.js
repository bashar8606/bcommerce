import { getCategories, getHomeProducts } from "@/lib/getHome";
import BannerSlider from "@/widgets/BannerSlider";
import CategoriesSlider from "@/widgets/CategoriesSlider";
import ProductsSlider from "@/widgets/ProductsSlider";

export default async function Home() {
  const categories  =  await getCategories()
  const products = await getHomeProducts()
  console.log(categories,"categories");
  return (
    <main className="min-h-screen pt-[70px]">
      <BannerSlider/>
      <CategoriesSlider data={categories}/>
      <ProductsSlider data={products?.components["flash_products-4"]} flashSale={true} />
      <ProductsSlider />
      <ProductsSlider />
      <ProductsSlider />
    </main>
  );
}

