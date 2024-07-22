import Link from 'next/link'
import React from 'react'
import Image from '../Image/image'

export default function ProductCard({data}) {
    return (
        <div>
            <div className='aspect-portrait relative bg-slate-50 overflow-hidden rounded-sm'>
                <div className='inline-block absolute top-2 font-semibold start-2 bg-red-600 text-white rounded-sm text-[10px] z-10 px-2 py-1'>BEST SELLING</div>
                <div className='w-[32.22px] h-[32.22px] border-gray-50 flex-col justify-center items-center  inline-flex absolute top-2 font-semibold end-2 bg-white text-white rounded-full z-10 px-2 py-1'></div>
                <Image src={"/images/34.png"} className="object-cover" fill alt="sdfsdf" />
            </div>
            <div className='py-2'>
                <h3 className='text-xs font-semibold mb-2 '>Matalan</h3>
                <h4 className='text-xs font-normal line-clamp-2 mb-1'>Pink Soft Sole Baby Trainers (Newborn-18mths)</h4>
                <p className='text-neutral-400 text-xs font-bold mb-1 line-through'>140.76 SAR</p>
                <p className=''>
                    <span className='text-base font-bold'>AED 8.00</span>
                    <span className='text-[10px] font-semibold rounded-sm px-1 py-[2px] ms-2 text-[#F2432D] bg-[#FCEFEE] inline-block'>48% Off</span>
                </p>
                <div className='pt-3'>
                    <Link href={'#'} className='btn btn-outline-secondary'>Add to cart</Link>
                </div>
            </div>
        </div>
    )
}

