import React from 'react'

export default function ProductCard() {
    return (
        <div>
            <div className='aspect-portrait relative bg-slate-50 overflow-hidden rounded-sm'></div>
            <div className='py-2'>
                <h3 className='text-xs font-semibold mb-2 '>Matalan</h3>
                <h4 className='text-xs font-normal line-clamp-2 mb-0'>Pink Soft Sole Baby Trainers (Newborn-18mths)</h4>
                <p className=''>
                    <span className='text-sm font-semibold text-red-700'>AED 8.00</span>
                </p>
            </div>
        </div>
    )
}

