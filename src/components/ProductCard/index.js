import Link from 'next/link'
import React from 'react'
import Image from '../Image/image'

export default function ProductCard({data}) {
    return (
        <div>
            <div className='aspect-portrait relative bg-slate-50 overflow-hidden rounded-sm'>
                <div className='inline-block absolute top-2 font-semibold start-2 bg-red-600 text-white rounded-sm text-[10px] z-10 px-2 py-1'>BEST SELLING</div>
                <Image src={data?.image_190x230} className="object-cover" fill alt="sdfsdf" />
            </div>
            <div className='py-2'>
                <h3 className='text-xs font-semibold mb-2 '>Matalan</h3>
                <h4 className='text-xs font-normal line-clamp-2 mb-0'>Pink Soft Sole Baby Trainers (Newborn-18mths)</h4>
                <p className=''>
                    <span className='text-sm font-semibold text-red-700'>AED 8.00</span>
                    <span className='text-[10px] font-semibold rounded-sm px-1 py-[2px] ms-2 text-red-600 bg-red-200 inline-block'>AED 8.00</span>
                </p>
                <div className='pt-3'>
                    <Link href={'#'} className='btn'>View now</Link>
                </div>
            </div>
        </div>
    )
}

