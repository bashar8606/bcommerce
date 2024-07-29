import { getSingleProduct } from "@/lib/getHome";
import ProductDetail from "@/widgets/ProductDetail";
import { notFound } from "next/navigation";


export async function generateMetadata({ params: { product } }) {
  const data = await getSingleProduct(product)
  const openGraphImage = data?.product?.product_meta_image
    ? [{ url: data?.product?.product_meta_image, alt: data?.product?.product_meta_title }]
    : [];
  return {
    title: data?.product?.product_meta_title,
    description: data?.product?.meta_short_description,
    keywords: data?.product?.product_meta_keywords,
    openGraph: {
      images: openGraphImage,
      title: data?.product?.product_meta_title,
      description: data?.product?.meta_short_description,
      // url: header_url,
    },
    twitter: {
      card: data?.product?.product_meta_title,
      title: data?.product?.product_meta_title,
      description: data?.product?.meta_short_description,
      images: {
        url: data?.product?.product_meta_image,
        alt: data?.product?.product_meta_title,
      },
    },
  };
}

export default async function ProductDetailPage({ params: { product } }) {
  const data = await getSingleProduct(product)
  if (!data) return notFound();
  return (
    <main className="min-h-screen pt-20">
      <ProductDetail data={data} />
    </main>
  );
}
