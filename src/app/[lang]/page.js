import { getCategories, getHomeProducts } from "@/lib/getHome";
import BannerSlider from "@/widgets/BannerSlider";
import BudgetWidget from "@/widgets/BudgetWidget";
import CategoriesSlider from "@/widgets/CategoriesSlider";
import OfferBanner from "@/widgets/OfferBanner";
import ProductsSlider from "@/widgets/ProductsSlider";

export default async function Home() {
  // const categories  =  await getCategories()
  const products = await getHomeProducts()
  // console.log(categories,"categories");
  return (
    <main className="min-h-screen pt-[58px] lg:pt-[70px]">
      <BannerSlider/>
      {/* <CategoriesSlider data={categories}/> */}
      <ProductsSlider data={products?.components["flash_products-4"]} flashSale={true} />
      <OfferBanner/>
      <ProductsSlider />
      <BudgetWidget/>
    </main>
  );
}

