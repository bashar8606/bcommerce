import Image from "../Image/image";

export default function CategoryCard({ data }) {
    return (
        <div>
            <div className='aspect-1/1 relative bg-slate-50 overflow-hidden rounded-full'>
                <Image src={"/images/34.png"} fill className="object-cover" alt="logo" />
            </div>
            <div className='pt-2'>
                <p className='text-sm text-center line-clamp-2 font-semibold'>Jalabiyas</p>
            </div>
        </div>
    )
}