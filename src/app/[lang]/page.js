import WidgetBlocks from "@/components/WidgetBlocks";
import { getCategories, getHomeProducts } from "@/lib/getHome";
import BannerSlider from "@/widgets/BannerSlider";
import BudgetWidget from "@/widgets/BudgetWidget";
import CategoriesSlider from "@/widgets/CategoriesSlider";
import OfferBanner from "@/widgets/OfferBanner";
import OfferCategoriesSlider from "@/widgets/OfferCategoriesSlider";
import ProductsSlider from "@/widgets/ProductsSlider";

export default async function Home() {
  // const categories  =  await getCategories()
  const products = await getHomeProducts()
  return (
    <main className="min-h-screen pt-[58px] lg:pt-[70px]">
      {/* <OfferCategoriesSlider/>
      <BannerSlider/>
      <CategoriesSlider data={""}/> */}
      {/* <ProductsSlider data={products?.components["flash_products-4"]} flashSale={true} /> */}
      {/* <OfferBanner/>
      <ProductsSlider />
      <BudgetWidget/> */}
      <WidgetBlocks widgets={products?.results?.components}/>
      <OfferBanner/>
      <BudgetWidget/>

    </main>
  );
}

