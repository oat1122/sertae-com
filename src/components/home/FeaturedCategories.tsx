import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { getFeaturedCategories } from "./hook/useFeaturedCategories";

export default async function FeaturedCategories() {
  const formattedCategories = await getFeaturedCategories();

  return (
    <section className="bg-brand-light py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold text-brand-primary">
          เลือกซื้อตามหมวดหมู่
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {formattedCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative h-48 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={category.imageUrl}
                alt={`หมวดหมู่ ${category.name}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
