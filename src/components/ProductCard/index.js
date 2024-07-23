import Link from 'next/link'
import React from 'react'
import Image from '../Image/image'

export default function ProductCard({data}) {
    return (
        <div>
            <div className='aspect-portrait relative bg-slate-50 overflow-hidden rounded-sm'>
                <div className='inline-block absolute top-2 font-semibold start-2 bg-red-600 text-white rounded-sm text-[10px] z-10 px-2 py-1'>BEST SELLING</div>
                <div className='w-[32.22px] h-[32.22px] border-gray-50 flex-col justify-center items-center  inline-flex absolute top-2 font-semibold end-2 bg-white text-white rounded-full z-10 px-2 py-1'></div>
                <span className='text-xs absolute bottom-0 left-0 font-semibold  px-2 py-[2px] text-[#F2432D] bg-[#FCEFEE] inline-block z-10'>48% Off</span>
                <Image src={"/images/34.png"} className="object-cover" fill alt="sdfsdf" />
            </div>
            <div className='py-2'>
                <h4 className='text-sm font-normal line-clamp-2 mb-1'>Pink Soft Sole Baby Trainers (Newborn-18mths)</h4>
                <p className=' text-base font-semibold mb-1 '>140.76 SAR<span className='text-neutral-400 text-xs font-semibold line-through'>AED 8.00</span></p>
                <p className=''>
                    
                </p>
                <div className='pt-3'>
                    <Link href={'#'} className='btn btn-outline-secondary'>Add to cart</Link>
                </div>
            </div>
        </div>
    )
}

