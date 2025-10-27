import { prisma } from "@/lib/prisma";

export async function getFeaturedProducts() {
  // ดึงข้อมูลสินค้า 8 รายการล่าสุด (featured หรือมาใหม่)
  const products = await prisma.product.findMany({
    where: {
      published: true,
      inStock: true,
    },
    include: {
      brand: true, // ดึงข้อมูลแบรนด์ด้วย
    },
    orderBy: {
      createdAt: "desc", // เรียงตามวันที่สร้าง (มาใหม่ก่อน)
    },
    take: 8, // ดึงมา 8 รายการ
  });

  // แปลงข้อมูลให้ตรงกับ ProductCard
  return products.map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    brand: product.brand.name,
    price: product.price.toNumber(), // แปลง Decimal เป็น number
    imageUrl: product.imageUrl,
  }));
}
