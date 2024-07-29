import Products from "@/widgets/Products";

export default function CategorySingle({ params: { slug } }) {
  return (
    <main className="min-h-screen pt-20">
      <Products slug={slug} />
    </main>
  );
}
