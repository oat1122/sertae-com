import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 เริ่มต้น Seeding...");

  // ลบข้อมูลเก่า (ถ้ามี)
  await prisma.product.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.productCategory.deleteMany();

  // 1. สร้างหมวดหมู่สินค้า
  console.log("📁 สร้างหมวดหมู่สินค้า...");
  const streetwear = await prisma.productCategory.create({
    data: {
      name: "Streetwear",
      slug: "streetwear",
      description: "เสื้อสไตล์สตรีทแฟชั่น สำหรับคนชอบสไตล์เท่ๆ",
      imageUrl: "/images/categories/streetwear.jpg", // TODO: เปลี่ยนเป็นรูปจริง
    },
  });

  const sportswear = await prisma.productCategory.create({
    data: {
      name: "Sportswear",
      slug: "sportswear",
      description:
        "เสื้อกีฬาแบรนด์เนมแท้ สำหรับการออกกำลังกายและกิจกรรมกลางแจ้ง",
      imageUrl: "/images/categories/sportswear.jpg", // TODO: เปลี่ยนเป็นรูปจริง
    },
  });

  const luxury = await prisma.productCategory.create({
    data: {
      name: "Luxury",
      slug: "luxury",
      description:
        "เสื้อแบรนด์หรู ดีไซน์เนอร์ระดับโลก สำหรับผู้ที่ชื่นชอบความหรูหรา",
      imageUrl: "/images/categories/luxury.jpg", // TODO: เปลี่ยนเป็นรูปจริง
    },
  });

  // 2. สร้างแบรนด์
  console.log("🏷️  สร้างแบรนด์...");
  const nike = await prisma.brand.create({
    data: {
      name: "Nike",
      slug: "nike",
      description: "แบรนด์กีฬาชั้นนำระดับโลก",
      logoUrl: "/images/brands/nike.png",
    },
  });

  const adidas = await prisma.brand.create({
    data: {
      name: "Adidas",
      slug: "adidas",
      description: "แบรนด์กีฬาและไลฟ์สไตล์จากเยอรมนี",
      logoUrl: "/images/brands/adidas.png",
    },
  });

  const supreme = await prisma.brand.create({
    data: {
      name: "Supreme",
      slug: "supreme",
      description: "แบรนด์สตรีทแวร์ไอคอนิคจากนิวยอร์ก",
      logoUrl: "/images/brands/supreme.png",
    },
  });

  const stussy = await prisma.brand.create({
    data: {
      name: "Stüssy",
      slug: "stussy",
      description: "แบรนด์สตรีทแวร์รากฐานจากแคลิฟอร์เนีย",
      logoUrl: "/images/brands/stussy.png",
    },
  });

  const gucci = await prisma.brand.create({
    data: {
      name: "Gucci",
      slug: "gucci",
      description: "แบรนด์หรูระดับโลกจากอิตาลี",
      logoUrl: "/images/brands/gucci.png",
    },
  });

  // 3. สร้างสินค้า
  console.log("👕 สร้างสินค้า...");

  // Nike Products
  await prisma.product.create({
    data: {
      name: "Nike Sportswear Essential T-Shirt",
      slug: "nike-sportswear-essential-tshirt",
      description: "เสื้อยืดคอตตอนคุณภาพสูง สวมใส่สบาย เหมาะกับทุกกิจกรรม",
      price: 990,
      compareAtPrice: 1290,
      sku: "NK-ESS-001",
      imageUrl: "/images/products/nike-essential-tee.jpg", // TODO: เปลี่ยนเป็นรูปจริง
      stock: 50,
      inStock: true,
      featured: true,
      published: true,
      categoryId: sportswear.id,
      brandId: nike.id,
      metaTitle: "Nike Sportswear Essential T-Shirt | เสื้อแท้.com",
      metaDescription:
        "เสื้อยืด Nike Sportswear Essential แท้ 100% ราคา 990 บาท พร้อมส่ง",
    },
  });

  await prisma.product.create({
    data: {
      name: "Nike Dri-FIT Training Top",
      slug: "nike-dri-fit-training-top",
      description:
        "เสื้อเทรนนิ่งระบายอากาศได้ดี เทคโนโลยี Dri-FIT ดูดซับเหงื่อ",
      price: 1490,
      sku: "NK-DRY-001",
      imageUrl: "/images/products/nike-dri-fit.jpg",
      stock: 30,
      inStock: true,
      featured: true,
      published: true,
      categoryId: sportswear.id,
      brandId: nike.id,
      metaTitle: "Nike Dri-FIT Training Top | เสื้อออกกำลังกาย",
      metaDescription:
        "เสื้อเทรนนิ่ง Nike Dri-FIT แท้ ระบายอากาศดี ราคา 1,490 บาท",
    },
  });

  // Adidas Products
  await prisma.product.create({
    data: {
      name: "Adidas Originals Trefoil T-Shirt",
      slug: "adidas-originals-trefoil-tshirt",
      description: "เสื้อยืดคลาสสิก Adidas Originals โลโก้ Trefoil สุดไอคอนิค",
      price: 1090,
      sku: "AD-TRF-001",
      imageUrl: "/images/products/adidas-trefoil.jpg",
      stock: 45,
      inStock: true,
      featured: true,
      published: true,
      categoryId: sportswear.id,
      brandId: adidas.id,
      metaTitle: "Adidas Originals Trefoil T-Shirt | เสื้อแท้.com",
      metaDescription:
        "เสื้อยืด Adidas Originals Trefoil แท้ 100% ราคา 1,090 บาท",
    },
  });

  // Supreme Products
  await prisma.product.create({
    data: {
      name: "Supreme Box Logo T-Shirt",
      slug: "supreme-box-logo-tshirt",
      description: "เสื้อยืด Supreme Box Logo สุดคลาสสิค Limited Edition",
      price: 3990,
      compareAtPrice: 4990,
      sku: "SUP-BOX-001",
      imageUrl: "/images/products/supreme-box-logo.jpg",
      stock: 10,
      inStock: true,
      featured: true,
      published: true,
      categoryId: streetwear.id,
      brandId: supreme.id,
      metaTitle: "Supreme Box Logo T-Shirt | Limited Edition",
      metaDescription:
        "Supreme Box Logo T-Shirt แท้ Limited Edition ราคา 3,990 บาท",
    },
  });

  // Stussy Products
  await prisma.product.create({
    data: {
      name: "Stüssy Basic Stüssy T-Shirt",
      slug: "stussy-basic-tshirt",
      description: "เสื้อยืด Stüssy คลาสสิค โลโก้เบสิค สไตล์สตรีท",
      price: 1590,
      sku: "ST-BAS-001",
      imageUrl: "/images/products/stussy-basic.jpg",
      stock: 35,
      inStock: true,
      featured: true,
      published: true,
      categoryId: streetwear.id,
      brandId: stussy.id,
      metaTitle: "Stüssy Basic T-Shirt | Streetwear",
      metaDescription: "Stüssy Basic T-Shirt แท้ สไตล์สตรีท ราคา 1,590 บาท",
    },
  });

  // Gucci Products
  await prisma.product.create({
    data: {
      name: "Gucci Cotton T-Shirt with Gucci Logo",
      slug: "gucci-cotton-tshirt-logo",
      description: "เสื้อยืดคอตตอน Gucci โลโก้คลาสสิค ดีไซน์หรูหรา",
      price: 19900,
      sku: "GU-LOG-001",
      imageUrl: "/images/products/gucci-logo-tee.jpg",
      stock: 8,
      inStock: true,
      featured: true,
      published: true,
      categoryId: luxury.id,
      brandId: gucci.id,
      metaTitle: "Gucci Cotton T-Shirt | Designer T-Shirt",
      metaDescription: "เสื้อยืด Gucci แท้ ดีไซน์เนอร์ระดับโลก ราคา 19,900 บาท",
    },
  });

  console.log("✅ Seeding สำเร็จ!");
  console.log(`
    📊 สรุปข้อมูลที่สร้าง:
    - หมวดหมู่: 3 รายการ
    - แบรนด์: 5 รายการ
    - สินค้า: 6 รายการ
  `);
}

main()
  .catch((e) => {
    console.error("❌ เกิดข้อผิดพลาด:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
