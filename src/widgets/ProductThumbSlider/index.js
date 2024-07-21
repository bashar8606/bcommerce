"use client";
import Image from "@/components/Image/image";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";

export default function ProductThumbSlider() {
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
          <SwiperSlide>
            <div className="aspect-[490/625] w-full relative">
              <Image
                src={"/images/b1.png"}
                fill
                className="object-cover"
                alt="logo"
              />
            </div>
          </SwiperSlide>
        </Slider>
      </div>
      <Slider className={""} customSettings={customSettings2}>
        <SwiperSlide>
          <div className="aspect-[490/625] w-full relative">
            <Image
              src={"/images/b1.png"}
              fill
              className="object-cover"
              alt="logo"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="aspect-[490/625] w-full relative">
            <Image
              src={"/images/b1.png"}
              fill
              className="object-cover"
              alt="logo"
            />
          </div>
        </SwiperSlide>
      </Slider>
    </div>
  );
}
