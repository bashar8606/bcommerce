import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </main>
  );
}

