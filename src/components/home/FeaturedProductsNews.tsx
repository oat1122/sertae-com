import Container from "@/components/ui/Container";
import ProductCard from "@/components/shop/ProductCard";
import { getFeaturedProductsNews } from "./hook/useFeaturedProductsNews";

export default async function FeaturedProductsNews() {
  const formattedProducts = await getFeaturedProductsNews();

  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold text-brand-primary">
          สินค้ามาใหม่
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {formattedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
