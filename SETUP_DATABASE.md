# 🚀 คำแนะนำการรัน Prisma Migration และ Seed

## ขั้นตอนที่ 1: ตั้งค่า Database

### ถ้ายังไม่มี `.env`

```bash
copy .env.example .env
```

แก้ไข `DATABASE_URL` ในไฟล์ `.env`:

```
DATABASE_URL="mysql://root:password@localhost:3306/sertae_com"
```

**ตัวอย่าง**:

- **ใช้ XAMPP/WAMP**: `mysql://root:@localhost:3306/sertae_com`
- **ใช้ MySQL แยก**: `mysql://username:password@localhost:3306/sertae_com`
- **ใช้ PlanetScale**: ดูจาก Dashboard ของ PlanetScale

---

## ขั้นตอนที่ 2: สร้าง Database (ถ้ายังไม่มี)

### วิธีที่ 1: ใช้ MySQL Command Line

```bash
mysql -u root -p
CREATE DATABASE sertae_com;
exit;
```

### วิธีที่ 2: ใช้ phpMyAdmin

1. เปิด http://localhost/phpmyadmin
2. คลิก "New" เพื่อสร้าง Database
3. ตั้งชื่อ `sertae_com`
4. Collation: `utf8mb4_unicode_ci`

---

## ขั้นตอนที่ 3: ติดตั้ง Dependencies

```bash
npm install
```

หรือถ้ายังไม่มี `tsx`:

```bash
npm install -D tsx
```

---

## ขั้นตอนที่ 4: รัน Migration

```bash
npm run prisma:migrate
```

หรือ

```bash
npx prisma migrate dev --name add_products_schema
```

**คำสั่งนี้จะ:**

1. สร้างตาราง `ProductCategory`, `Brand`, `Product` ในฐานข้อมูล
2. Generate Prisma Client ใหม่
3. อัปเดต Migration History

---

## ขั้นตอนที่ 5: รัน Seed (เพิ่มข้อมูลตัวอย่าง)

```bash
npm run prisma:seed
```

หรือ

```bash
npx tsx prisma/seed.ts
```

**คำสั่งนี้จะสร้าง:**

- ✅ 3 หมวดหมู่สินค้า (Streetwear, Sportswear, Luxury)
- ✅ 5 แบรนด์ (Nike, Adidas, Supreme, Stüssy, Gucci)
- ✅ 6 สินค้า (พร้อม SEO metadata)

---

## ขั้นตอนที่ 6: ตรวจสอบข้อมูล

### วิธีที่ 1: ใช้ Prisma Studio (แนะนำ)

```bash
npm run prisma:studio
```

แล้วเปิด http://localhost:5555 ในเบราว์เซอร์

### วิธีที่ 2: ใช้ MySQL Command Line

```bash
mysql -u root -p sertae_com
SHOW TABLES;
SELECT * FROM ProductCategory;
SELECT * FROM Brand;
SELECT * FROM Product;
```

---

## 🔧 คำสั่งที่มีประโยชน์อื่นๆ

### Generate Prisma Client (ทำทุกครั้งที่แก้ schema.prisma)

```bash
npx prisma generate
```

### Reset Database (ลบข้อมูลทั้งหมด)

```bash
npx prisma migrate reset
```

**⚠️ คำเตือน**: คำสั่งนี้จะลบข้อมูลทั้งหมด!

### ดู Status ของ Migrations

```bash
npx prisma migrate status
```

### Format schema.prisma

```bash
npx prisma format
```

---

## ❌ การแก้ปัญหาที่พบบ่อย

### Error: "Can't reach database server"

**สาเหตุ**: MySQL ไม่ทำงาน  
**วิธีแก้**:

- เปิด XAMPP/WAMP
- หรือ start MySQL service

### Error: "Access denied for user"

**สาเหตุ**: Username/Password ผิด  
**วิธีแก้**: ตรวจสอบ `DATABASE_URL` ในไฟล์ `.env`

### Error: "Unknown database 'sertae_com'"

**สาเหตุ**: ยังไม่สร้างฐานข้อมูล  
**วิธีแก้**: ดูขั้นตอนที่ 2

### Error: "Property 'product' does not exist"

**สาเหตุ**: ยังไม่ได้รัน Migration  
**วิธีแก้**: รันคำสั่ง `npm run prisma:migrate`

---

## 📊 ขั้นตอนถัดไป

หลังจากรัน Migration และ Seed แล้ว:

1. **เชื่อมต่อ Frontend กับ Database**

   - แก้ไข `src/components/home/FeaturedProducts.tsx`
   - แก้ไข `src/components/home/FeaturedCategories.tsx`

2. **เพิ่มรูปภาพจริง**

   - ดูคำแนะนำใน `public/images/README.md`
   - แทนรูป Placeholder ทั้งหมด

3. **ทดสอบ**
   - รัน `npm run dev`
   - เปิด http://localhost:3000
   - ตรวจสอบว่าสินค้าแสดงผลถูกต้อง

---

## 📚 เอกสารเพิ่มเติม

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)
- [Seeding Database](https://www.prisma.io/docs/guides/database/seed-database)

---

**สร้างโดย**: GitHub Copilot  
**วันที่**: 27 ตุลาคม 2025
