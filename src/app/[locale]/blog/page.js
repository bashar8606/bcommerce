import { getBlogs } from "@/lib/getBlogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";



export default async function BlogPage({ }) {
    const data = await getBlogs()
    if (!data) return notFound();
    console.log(data);
    return (
        <main className="bg-secondary">
            <div className="container">
                <div className="row g-3">
                    {data?.data?.map((item, i)=>{
                        return(
                            <Link href={`blog/${item?.id}`} className="d-block col-lg-4" key={item?.documentId}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5>{item?.title}</h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    );
}
