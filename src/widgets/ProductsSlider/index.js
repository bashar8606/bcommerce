
import ProductCard from "@/components/ProductCard";

export default function ProductsSlider({ flashSale, data }) {
    return (
        <section className={`py-10  ${flashSale && "bg-[#fbf4f4]"}`}>
            <div className="container">
                <div className="grid grid-cols-2 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold">Deals of the day</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    {/* {data?.map((item, i) => {
                        return (
                            <div className=""><ProductCard  /></div>
                        )
                    })} */}
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                    <div className=""><ProductCard  /></div>
                </div>
            </div>
        </section>
    );
}
