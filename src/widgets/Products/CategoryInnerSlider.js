"use client";
import Image from "@/components/Image";
import Slider from "@/components/Slider";
import useGetInnerWidth from "@/hooks/useGetInnerWidth";
import { Link } from "@/i18n/routing";
import { SwiperSlide } from "swiper/react";

export default function CategoryInnerSlider({ data }) {
  const {width}= useGetInnerWidth()
  const customSettings = {
    spaceBetween: 10,
    slidesPerView: 4,
    pagination: false,
    breakpoints: {
      640: {
          spaceBetween: 2,
      },
      768: {
          slidesPerView: 7,
      },
      992: {
          slidesPerView: 10,
      },
  },
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };

  return (
    <section className="py-[10px] w-full">
      <div className="lg:px-3">
    
        <Slider className={""} customSettings={customSettings}>
          {data?.map((item, i)=>{
            return(
              <SwiperSlide key={i}>
              <Link className="block" href={`/categories/${item?.slug}`}>
                <div className="aspect-1/1 relative bg-slate-50 overflow-hidden rounded-full">
                  <Image
                    src={item?.banner?.image_320x320}
                    fill
                    className="object-cover"
                    alt="logo"
                  />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-center line-clamp-1">
                  {item?.slug}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            )
          })}
         
     
        </Slider>
        </div>
    </section>
  );
}


const datas =[{},{},{},{},{},{}]