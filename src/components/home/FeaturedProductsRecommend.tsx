import Container from "@/components/ui/Container";
import ProductCard from "@/components/shop/ProductCard";
import { getFeaturedProductsRecommend } from "./hook/useFeaturedProductsRecommend";

export default async function FeaturedProductsRecommend() {
  const formattedProducts = await getFeaturedProductsRecommend();

  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold text-brand-primary">
          สินค้าแนะนำ
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
