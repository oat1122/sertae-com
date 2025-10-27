import { prisma } from "@/lib/prisma";

export async function getFeaturedCategories() {
  // ดึงข้อมูล Category 3 รายการจากฐานข้อมูล
  const categories = await prisma.productCategory.findMany({
    orderBy: {
      name: "asc", // เรียงตามชื่อ
    },
    take: 3, // ดึงมา 3 รายการ
  });

  // แปลงข้อมูลให้ตรงกับ format เดิม
  return categories.map((category) => ({
    name: category.name,
    href: `/category/${category.slug}`,
    imageUrl:
      category.imageUrl ||
      `https://via.placeholder.com/400x300.png?text=${encodeURIComponent(
        category.name
      )}`,
  }));
}
