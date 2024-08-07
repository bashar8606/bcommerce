"use client";
import Image from "@/components/Image/image";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";

export default function ProductThumbSlider({ data }) {
  const customSettings = {
    slidesPerView: 1,
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };
  const customSettings2 = {
    spaceBetween: 15,
    slidesPerView: 5,
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };
  return (
    <div className="">
      <div className="mb-4 relative">
        <Slider className={""} customSettings={customSettings}>
          {data?.large?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="aspect-[490/625] w-full relative">
                  <Image
                    src={item}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                    fill
                    className="object-cover"
                    priority
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
            )
          })}

        </Slider>
      </div>
      <Slider className={""} customSettings={customSettings2}>
        {data?.large?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="aspect-[490/625] w-full relative">
                <Image
                  src={item}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 15vw"
                  fill
                  className="object-cover"
                  alt="logo"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Slider>
    </div>
  );
}
