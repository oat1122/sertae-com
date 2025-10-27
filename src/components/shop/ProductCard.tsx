import Image from "next/image";
import Link from "next/link";

// TODO: [Copilot] สร้าง Type นี้จาก Prisma Schema ของคุณ (model Post หรือ Product)
type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  compareAtPrice?: number; // ราคาเปรียบเทียบ (ก่อนลดราคา)
  imageUrl: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="relative h-64 w-full bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.brand}</p>
        <h3 className="mt-1 font-semibold text-brand-text group-hover:text-brand-primary">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <p className="font-semibold text-brand-primary">
            ฿{product.price.toLocaleString("th-TH")}
          </p>
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <p className="text-sm text-gray-400 line-through">
              ฿{product.compareAtPrice.toLocaleString("th-TH")}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
