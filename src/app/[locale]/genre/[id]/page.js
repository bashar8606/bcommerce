import MovieCard from "@/components/MovieCard";
import getImagePath from "@/lib/getImagePath";
import { getDiscoverMovies, getSearchMovies, getSingleMovie, getUpcomingMovies } from "@/lib/getMovies";
import AiSuggestion from "@/widgets/AiSuggestion";
import MovieSingle from "@/widgets/MovieSingle";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";



export default async function ProductPage({ params: { id } }) {
    // const termToUse = decodeURI(product)
    // const termToUse = "star wars"
    const movies = await getDiscoverMovies(9648) 
    if (!movies) return notFound();
    return (
        <main className="bg-secondary">
             {movies?.results.map((item, i) => {
                        return (
                            <>
                            <MovieCard key={i} item={item} />
                            </>
                        )
                    })}
        </main>
    );
}
