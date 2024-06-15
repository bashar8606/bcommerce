import { getSingleBlog } from "@/lib/getBlogs";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";



export default async function ProductPage({ params: { blog } }) {
    const termToUse = decodeURI(blog)
    // const termToUse = "star wars"
    const blogDetail = await getSingleBlog(blog[0])
    console.log(blogDetail, "bloggg");
    if (!blogDetail) return notFound();
    return (
        <main className="bg-secondary">
        </main>
    );
}
