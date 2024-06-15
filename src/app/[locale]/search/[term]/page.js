import MovieCard from "@/components/MovieCard";
import { getSearchMovies, getUpcomingMovies, getDiscoverMovies } from "@/lib/getMovies";
import AiSuggestion from "@/widgets/AiSuggestion";
import { notFound } from "next/navigation";
import { Suspense } from "react";



export default async function SearchPage({ params: { term } }) {
    if (!term) return notFound();
    const termToUse = decodeURI(term)
    // const termToUse = "star wars"

    const upcoming_movies = await getUpcomingMovies()
    const movies = await getDiscoverMovies(termToUse) 

    return (
        <main className="bg-secondary">
            <div className={`container`}>
                <h1>Welcome to Seatch :{termToUse}</h1>
                    <AiSuggestion term={termToUse} />

                <div className="row row-cols-lg-4">
                    {movies?.results.map((item, i) => {
                        return (
                            <MovieCard key={i} item={item} />
                        )
                    })}
                </div>
                <div className="row row-cols-lg-4">
                    {upcoming_movies?.results.map((item, i) => {
                        return (
                            <MovieCard key={i} item={item} />
                        )
                    })}
                </div>
            </div>
        </main>
    );
}
