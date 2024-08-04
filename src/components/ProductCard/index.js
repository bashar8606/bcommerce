import Link from 'next/link'
import React from 'react'
import Image from '../Image/image'
import { useCartWidget } from '@/widgets/CartWidget/useCartWidget'

export default function ProductCard({data}) {
    const {addItem} =useCartWidget()

    const offerPerc = Math.round((data?.discount_percentage/data?.price)*100)
    return (
        <div>
            <Link href={`/en/products/${data?.slug}`} className='aspect-portrait block relative bg-slate-50 overflow-hidden rounded-sm'>
                <div className='inline-block absolute top-2 font-semibold start-2 bg-red-600 text-white rounded-sm text-[10px] z-10 px-2 py-1'>BEST SELLING</div>
                <div className='w-[32.22px] h-[32.22px] border-gray-50 flex-col justify-center items-center  inline-flex absolute top-2 font-semibold end-2 bg-white text-white rounded-full z-10 px-2 py-1'></div>
                <span className='text-xs absolute bottom-0 left-0 font-semibold  px-2 py-[2px] text-[#F2432D] bg-[#FCEFEE] inline-block z-10'>{data?.special_discount_type} {offerPerc}% Off</span>
                <Image src={data?.image_190x230} className="object-cover" fill alt="sdfsdf" />
            </Link>
            <div className='py-2'>
                <h4 className='text-sm font-normal line-clamp-2 mb-2'>{data?.product_name}</h4>
                <p className=' text-base font-semibold mb-1 '>{data?.discount_percentage} SAR<span className='text-neutral-400 text-xs font-semibold line-through ml-1'>SAR {data?.price}</span></p>
                <div className='pt-4'>
                    <button onClick={()=>addItem(data)} className='btn btn-outline-secondary'>Add to Bag</button>
                </div>
            </div>
        </div>
    )
}


// "id": 2571,
// "slug": "mandarin-collar-hand-embroidered-jalabiya-cj1044-beige",
// "category_id": 15,
// "product_name": "Mandarin Collar Hand Embroidered Jalabiya CJ1044",
// "special_discount_type": "flat",
// "special_discount_check": 220,
// "discount_percentage": 229,
// "image_190x230": "https://www.ikkxa.com/public/images/20240729102942image_320x320_media_171.jpg",
// "price": 449,
// "rating": 0,
// "reviews_count": 0,
// "current_stock": 10,
// "reward": 0,
// "minimum_order_quantity": 1,
// "todays_deal": 0,
// "has_variant": 1,
// "user_wishlist": false,
// "is_catalog": false,
// "is_classified": false

