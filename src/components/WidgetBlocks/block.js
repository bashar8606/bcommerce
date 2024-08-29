"use client"
import { OFFER_CATEGORIES_SLIDER, BANNER_SLIDER,CATEGORIES_SLIDER, PRODUCTS_SLIDER, OFFER_SLIDER, BUDGET_SLIDER } from "@/constants/resources";
import BannerSlider from "@/widgets/BannerSlider";
import BudgetWidget from "@/widgets/BudgetWidget";
import CategoriesSlider from "@/widgets/CategoriesSlider";
import OfferBanner from "@/widgets/OfferBanner";
import OfferCategoriesSlider from "@/widgets/OfferCategoriesSlider";
import ProductsSlider from "@/widgets/ProductsSlider";
import DefaultComponent from "./DefaultComponent";


const setComponent = (widget) => {
  const components = {
    [OFFER_CATEGORIES_SLIDER]: OfferCategoriesSlider,
    [BANNER_SLIDER]: BannerSlider,
    [CATEGORIES_SLIDER]: CategoriesSlider,
    [PRODUCTS_SLIDER]: ProductsSlider,
    [OFFER_SLIDER]: OfferBanner,
    [BUDGET_SLIDER]: BudgetWidget,
    default: DefaultComponent,
  };
  return components[widget.component_name] || components["default"];
};
const Block = ({
  widget,
  slug,
}) => {
  const Widget = setComponent(widget);
  return (
    <Widget
      data={widget}
      {...widget}
      slug={slug}
    />
  );
};

export default Block;
