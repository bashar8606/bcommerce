import Image from "../Image/image";

export default function CategoryCard({ data }) {
    return (
        <div>
            <div className='aspect-1/1 relative bg-slate-50 overflow-hidden rounded-full'>
                <Image src={data?.popular_image} className="object-cover" fill alt="sdfsdf" />
            </div>
            <div className='pt-2'>
                <p className='text-sm text-center line-clamp-2 font-semibold'>{data?.title}</p>
            </div>
        </div>
    )
}