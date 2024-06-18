import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function BannerSlider({ }) {
    return (
        <section className={`overflow-hidden bg-slate-50`}>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className='aspect-[7/2] relative bg-slate-50 overflow-hidden '>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='aspect-[7/2] relative bg-slate-50 overflow-hidden '>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}
