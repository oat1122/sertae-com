# 👕 เสื้อแท้.com - E-Commerce Platform

เว็บไซต์ขายเสื้อแบรนด์เนมแท้ ที่ออกแบบมาเพื่อ SEO และ Performance สูงสุด

## 🌟 Features

- ✅ **Next.js 16** - App Router + Server Components
- ✅ **Prisma ORM** - MySQL Database with type-safety
- ✅ **NextAuth.js** - Authentication (Google, Facebook)
- ✅ **Tailwind CSS 4** - Modern utility-first CSS
- ✅ **SEO Optimized** - Metadata, Open Graph, Structured Data
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **TypeScript** - Full type safety

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone <repository-url>
cd sertae-com
npm install
```

### 2. Setup Environment

```bash
copy .env.example .env
```

แก้ไข `DATABASE_URL` ในไฟล์ `.env`:

```env
DATABASE_URL="mysql://root:password@localhost:3306/sertae_com"
```

### 3. Setup Database

```bash
# สร้าง database (ถ้ายังไม่มี)
mysql -u root -p -e "CREATE DATABASE sertae_com;"

# รัน migrations
npm run prisma:migrate

# เพิ่มข้อมูลตัวอย่าง
npm run prisma:seed
```

📚 **คำแนะนำละเอียด**: อ่านที่ [SETUP_DATABASE.md](./SETUP_DATABASE.md)

### 4. Run Development Server

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

---

## 📁 Project Structure

```
sertae-com/
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── seed.ts                # Seed data script
│   └── migrations/            # Migration files
├── public/
│   ├── og-image.svg           # Open Graph image (TODO: เปลี่ยนเป็น .jpg)
│   └── images/                # Product & category images
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── metadata.ts        # SEO metadata
│   ├── components/
│   │   ├── home/              # Homepage components
│   │   ├── layout/            # Layout components
│   │   ├── shop/              # Shop components
│   │   └── ui/                # Reusable UI components
│   └── lib/
│       └── icons.tsx          # SVG icon components
├── SEO_IMPROVEMENTS.md        # SEO checklist & guide
├── SETUP_DATABASE.md          # Database setup guide
└── README.md                  # This file
```

---

## 🗄️ Database Schema

### Models

- **User** - ผู้ใช้งาน (NextAuth.js)
- **Post** - บทความ Blog (สำหรับ SEO)
- **ProductCategory** - หมวดหมู่สินค้า (Streetwear, Sportswear, Luxury)
- **Brand** - แบรนด์ (Nike, Adidas, Supreme, etc.)
- **Product** - สินค้า (รายละเอียด, ราคา, SEO fields)

### ดู Schema ทั้งหมด

```bash
npm run prisma:studio
```

เปิด http://localhost:5555

---

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npm run prisma:migrate   # Run database migrations
npm run prisma:seed      # Seed database with sample data
npm run prisma:studio    # Open Prisma Studio
```

---

## ✅ SEO Checklist

ดูคำแนะนำครบถ้วนที่ [SEO_IMPROVEMENTS.md](./SEO_IMPROVEMENTS.md)

### ก่อน Deploy (สำคัญมาก!)

- [ ] เปลี่ยน `og-image.svg` → `og-image.jpg` (1200x630px)
- [ ] แทนรูป Placeholder ทั้งหมดด้วยรูปจริง
- [ ] เชื่อมต่อ Frontend กับ Database
- [ ] รัน Lighthouse (Score > 90)
- [ ] ทดสอบ Open Graph ที่ [OpenGraph.xyz](https://www.opengraph.xyz/)

---

## 🖼️ Images Guide

ดูคำแนะนำที่ [public/images/README.md](./public/images/README.md)

### ขนาดรูปที่แนะนำ

- **OG Image**: 1200 x 630px
- **Hero**: 1920 x 1080px
- **Products**: 800 x 800px
- **Categories**: 800 x 600px

### เครื่องมือ Optimize

- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [Remove.bg](https://www.remove.bg/)

---

## 🔐 Environment Variables

สร้างไฟล์ `.env` จาก `.env.example`:

```env
# Database
DATABASE_URL="mysql://root:password@localhost:3306/sertae_com"

# NextAuth (ถ้าใช้)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth Providers
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

---

## 🚢 Deployment

### Vercel (แนะนำ)

1. Push code ไป GitHub
2. Import project ใน [Vercel](https://vercel.com)
3. เพิ่ม Environment Variables
4. Deploy!

### ตั้งค่า Database สำหรับ Production

- ใช้ [PlanetScale](https://planetscale.com/) (แนะนำ)
- หรือ MySQL บน VPS

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NextAuth.js](https://next-auth.js.org/)

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**สร้างด้วย**: GitHub Copilot  
**วันที่**: 27 ตุลาคม 2025

---

## 🆘 Support

หากพบปัญหา กรุณาเปิด Issue ใน GitHub Repository
