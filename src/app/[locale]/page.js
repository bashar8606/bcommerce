import Image from "next/image";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import nextFetch from "@/utils/nextFetch";
import { getGenres, getUpcomingMovies } from "@/lib/getMovies";
import HomeBanner from "@/widgets/HomeBanner";
import HomeGenres from "@/widgets/HomeGenres";
import ProductSlider from "@/widgets/ProductSlider";


export default async function Home({params}) {
  const locale = params.locale
  const genres = await getGenres(locale)
  const upcoming_movies = await getUpcomingMovies(locale)
  return (
    <main className="bg-secondary">
      <HomeBanner data={upcoming_movies?.results} />
      <HomeGenres data={genres} />
      <ProductSlider data={upcoming_movies?.results} />
    </main>
  );
}