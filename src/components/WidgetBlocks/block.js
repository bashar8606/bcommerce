import { INNER_BANNER, HOME_QUOTE,CONTENT_WIDGET, HOME_BANNER, HOME_ABOUT, HOME_SERVICES, HOME_FEATURES, HOME_TEXT, HOME_CAREERS, HOME_BLOG,CONTACT_WIDGET, ABOUT_INFO, ABOUT_VISION, SERVICE_CONTENT, SERVICE_INNER_LISTING, SERVICE_RELATED, BLOGS_RELATED, ABOUT_TEAM, HOME_SPEC, HOME_DISCOVER, GENERAL_WIDGET, CERTICATION_WIDGET, ABOUT_ANIM, CARDS_WIDGET, CAREER_CARDS, CAREER_GALLERY, CAREERS_LISTING, CONTACT_SECTION, CONTACT_MAP, REQUEST_DEMO, ROAD_MAP, USP_WIDGET } from "@/constants/resources";
import ContentWidget from "@/widgets/ContentWidget";
import AboutInfo from "@/widgets/AboutInfo";
import DefaultComponent from "@/widgets/DefaultComponent";
import HomeAbout from "@/widgets/HomeAbout";
import HomeAnim from "@/widgets/HomeAnim";
import HomeBanner from "@/widgets/HomeBanner";
import HomeBlogs from "@/widgets/HomeBlogs";
import HomeCareer from "@/widgets/HomeCareer";
import HomeCulture from "@/widgets/HomeCulture";
import HomeQuote from "@/widgets/HomeQuote";
import HomeServices from "@/widgets/HomeServices";
import InnerBanner from "@/widgets/InnerBanner";
import RelatedBlogs from "@/widgets/RelatedBlogs";
import ServiceContent from "@/widgets/ServiceContent";
import ServiceInnerListing from "@/widgets/ServiceInnerListing";
import ServiceRelated from "@/widgets/ServiceRelated";
import AboutTeam from "@/widgets/AboutTeam";
import ContactSection from "@/widgets/ContactSection";
import HomeSpec from "@/widgets/HomeSpec";
import HomeDiscover from "@/widgets/HomeDiscover";
import GeneralWidget from "@/widgets/GeneralWidget";
import CertificationWidget from "@/widgets/CertificationWidget";
import AboutAnim from "@/widgets/AboutAnim";
import CardsWidget from "@/widgets/CardsWidget";
import CareerCards from "@/widgets/CareerCards";
import CareerGallery from "@/widgets/CareerGallery";
import CareerListing from "@/widgets/CareerListing";
import ContactMap from "@/widgets/ContactMap";
import RequestDemo from "@/widgets/RequestDemo";
import TimelineWidget from "@/widgets/TimelineWidget";
import UspWidget from "@/widgets/UspWidget";

const setComponent = (widget) => {
  const components = {
    [INNER_BANNER]: InnerBanner,
    [HOME_QUOTE]: HomeQuote,
    [HOME_BANNER]: HomeBanner,
    [HOME_ABOUT]: HomeAbout,
    [HOME_DISCOVER]: HomeDiscover,
    [GENERAL_WIDGET]: GeneralWidget,
    [CERTICATION_WIDGET]:CertificationWidget,
    [HOME_SERVICES]: HomeServices,
    [HOME_FEATURES]: HomeCulture,
    [HOME_TEXT]: HomeAnim,
    [ABOUT_ANIM]: AboutAnim,
    [HOME_SPEC]: HomeSpec,
    [HOME_CAREERS]: HomeCareer,
    [HOME_BLOG]: HomeBlogs,
    [ABOUT_INFO]: AboutInfo,
    [SERVICE_CONTENT]: ServiceContent,
    [SERVICE_INNER_LISTING]: ServiceInnerListing,
    [SERVICE_RELATED]: ServiceRelated,
    [BLOGS_RELATED]: RelatedBlogs,
    [CONTENT_WIDGET]: ContentWidget,
    [CARDS_WIDGET]: CardsWidget,
    [CONTACT_SECTION]: ContactSection,
    [CONTACT_MAP]: ContactMap,
    [CAREER_CARDS]: CareerCards,
    [CAREER_GALLERY]: CareerGallery,
    [CAREERS_LISTING]: CareerListing,
    [ABOUT_TEAM]: AboutTeam,
    [REQUEST_DEMO]: RequestDemo,
    [ROAD_MAP]: TimelineWidget,
    [USP_WIDGET]: UspWidget,
    [CONTACT_WIDGET]: ContactSection,
    default: DefaultComponent,
  };
  return components[widget.__component] || components["default"];
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
