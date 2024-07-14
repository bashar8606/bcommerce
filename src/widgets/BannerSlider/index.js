"use client"
import Image from "@/components/Image/image";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";


export default function BannerSlider({}) {
  const customSettings = {
   
    slidesPerView: 1,
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };
  return (
    <section className={`overflow-hidden bg-slate-50`}>
      <Slider className={""} customSettings={customSettings}>
        <SwiperSlide>
        <div className="aspect-[1728/500] w-full relative">
              <Image
                src={"/images/b1.png"}
                fill
                className="object-fit-cover"
                alt="logo"
              />
            </div>
        </SwiperSlide>
      </Slider>
    </section>
  );
}
