"use client"
import CategoryCard from "@/components/CategoryCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CategoriesSlider({ data }) {
    const categoryArray = data?.components["top_categories-7"]

    return (
        <section className="py-10">
            <div className="container">
                <h2 className="text-xl font-semibold mb-4">All Categories</h2>
                <Carousel>
                    <CarouselContent>
                        {categoryArray?.map((item, i) => {
                            return (
                                <CarouselItem key={i} className="flex-col-auto w-1/2 lg:w-[12.5%]">
                                    <CategoryCard data={item} />
                                </CarouselItem>
                            )
                        })}

                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}
