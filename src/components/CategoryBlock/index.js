import Link from "next/link";
import Image from "../Image/image";

export default function CategoryBlock({ data }) {
    return (
        <Link className="block" href={`/en/categories/${data?.slug}`}>
            <div className='aspect-1/1 relative bg-slate-50 overflow-hidden rounded-full'>
                <Image src={data?.popular_image} fill className="object-cover" alt="logo" />
            </div>
            <div className='pt-2'>
                <p className='text-xs md:text-sm text-center line-clamp-2 font-semibold'>{data?.title}</p>
            </div>
        </Link>
    )
}