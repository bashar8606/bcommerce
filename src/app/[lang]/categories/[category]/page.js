import Products from "@/widgets/Products";

export default async function CategorySingle({ params: { category } }) {
  return (
    <main className="min-h-screen pt-20">
      <Products slug={category} />
    </main>
  );
}
