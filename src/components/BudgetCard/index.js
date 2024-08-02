import Link from "next/link";
import Image from "../Image/image";

export default function BudgetCard({ data }) {
    return (
        <Link className="block px-11 py-9 bg-gradient-to-br from-stone-200 to-amber-100 rounded-md border border-amber-200"
        href={{
            pathname: `/en/categories/${data?.slug}`,
            query: { price: '100' },
          }}
        >
                <p className='text-black text-4xl font-black uppercase leading-10 mb-3'>Under
                SAR 299</p>
                <p className="text-orange-400 text-base font-semibold mb-5">2000+ styles</p>
                
                <span className="inline-block px-7 py-3.5 bg-white rounded text-black text-sm font-semibold">Shop Now</span>
        </Link>
    )
}