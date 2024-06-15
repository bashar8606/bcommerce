import MovieCard from "@/components/MovieCard";
import getImagePath from "@/lib/getImagePath";
import { getSearchMovies, getSingleMovie, getUpcomingMovies } from "@/lib/getMovies";
import AiSuggestion from "@/widgets/AiSuggestion";
import MovieSingle from "@/widgets/MovieSingle";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";



export default async function ProductPage({ params: { product } }) {
    const termToUse = decodeURI(product)
    // const termToUse = "star wars"
    const movie = await getSingleMovie(product[1])
    if (!movie) return notFound();
    return (
        <main className="bg-secondary">
            <MovieSingle data={movie}/>
        </main>
    );
}
