import { getSearchProducts } from "@/lib/getHome";
import Products from "@/widgets/Products";
import { notFound } from "next/navigation";
import { Suspense } from "react";



export default async function SearchPage({ params: { term } }) {
    if (!term) return notFound();
    const termToUse = decodeURI(term)

    const data = await getSearchProducts(termToUse)

    return (
        <main className="bg-secondary">
            <div className={`container`}>
                <h1>Welcome to Search :{termToUse}</h1>
                <main className="min-h-screen pt-32">
                    <Products data />
                </main>
            </div>
        </main>
    );
}
