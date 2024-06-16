import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Products from "@/widgets/Products";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-32">
      <Products/>
    </main>
  );
}

