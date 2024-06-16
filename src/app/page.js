import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-32">
      <section className="py-6">
        <div className="container">
        <h2 className="text-xl font-semibold mb-4">Deals of the day</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-8 gap-4">
            <div><CategoryCard /></div>
            <div><CategoryCard /></div>
            <div><CategoryCard /></div>
            <div><CategoryCard /></div>
            <div><CategoryCard /></div>
            <div><CategoryCard /></div>
            <div><CategoryCard /></div>
            <div><CategoryCard /></div>
          </div>
        </div>
      </section>
      <section className="py-7">
        <div className="container">
          <div className="grid grid-cols-2 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Deals of the day</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="">
              <ProductCard />
            </div>
            <div className="">
              <ProductCard />
            </div>
            <div className="">
              <ProductCard />
            </div>
            <div className=" ">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

