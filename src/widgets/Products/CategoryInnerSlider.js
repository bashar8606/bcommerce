"use client";
import CategoryCard from "@/components/CategoryCard";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";

export default function CategoryInnerSlider({ data }) {

  const customSettings = {
    spaceBetween: 30,
    slidesPerView: 8,
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };

  return (
    <section className="py-10">
      <div className="container">
        <Slider className={""} customSettings={customSettings}>
          {data?.categories?.length > 0 &&
            data?.categories?.map((item, i) => {
              return (
                <SwiperSlide key={i}><CategoryCard data={item}  /></SwiperSlide>
               );
            })}
        </Slider>
      </div>
    </section>
  );
}
