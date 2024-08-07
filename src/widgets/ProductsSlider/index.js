"use client"
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";

export default function ProductsSlider({ flashSale, data }) {
    const customSettings = {
        spaceBetween: 15,
        slidesPerView: 1.7,
        pagination: false,
        // modules: [Navigation],
        breakpoints: {
            640: {
                spaceBetween: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 5,
            },
        },
        navigation: {
            prevEl: `.swiper-button-prev`,
            nextEl: `.swiper-button-next`,
        },
    };
    return (
        <section className={`py-6 lg:py-10  ${flashSale && "bg-[#fbf4f4]"}`}>
            <div className="container">
                <div className="grid grid-cols-2 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold">Deals of the day</h2>
                    </div>
                </div>

                <Slider className={""} customSettings={customSettings}>
                    <SwiperSlide > <ProductCard /> </SwiperSlide>
                    <SwiperSlide > <ProductCard /> </SwiperSlide>
                    <SwiperSlide > <ProductCard /> </SwiperSlide>
                    <SwiperSlide > <ProductCard /> </SwiperSlide>
                    <SwiperSlide > <ProductCard /> </SwiperSlide>
                    <SwiperSlide > <ProductCard /> </SwiperSlide>
                    <SwiperSlide > <ProductCard /> </SwiperSlide>
                </Slider>
            </div>
        </section>
    );
}
