import { prisma } from "@/lib/prisma";

export async function getFeaturedProductsNews() {
  // ดึงข้อมูลสินค้า 3 รายการล่าสุด
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
    take: 3, // ดึงมา 3 รายการ
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
