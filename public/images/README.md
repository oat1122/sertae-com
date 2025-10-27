# คำแนะนำการเพิ่มรูปภาพสำหรับ SEO

โฟลเดอร์นี้สำหรับเก็บรูปภาพที่ใช้ในเว็บไซต์ เพื่อให้ได้ผลลัพธ์ SEO ที่ดีที่สุด

## 📁 โครงสร้างที่แนะนำ

```
public/images/
├── og-image.jpg          # รูปสำหรับ Open Graph (1200x630px)
├── hero/                 # รูป Hero Section
│   └── hero-main.jpg
├── categories/           # รูปหมวดหมู่สินค้า
│   ├── streetwear.jpg
│   ├── sportswear.jpg
│   └── luxury.jpg
├── products/             # รูปสินค้า
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── ...
└── brands/               # โลโก้แบรนด์
    ├── nike.png
    ├── adidas.png
    └── ...
```

## 🖼️ ข้อกำหนดรูปภาพสำคัญ

### 1. Open Graph Image (`og-image.jpg`)

- **ขนาด**: 1200 x 630 pixels (อัตราส่วน 1.91:1)
- **ไฟล์**: JPG หรือ PNG
- **ขนาดไฟล์**: ไม่เกิน 300KB
- **จุดประสงค์**: แสดงเมื่อแชร์ลิงก์ใน Facebook, LINE, Twitter, Discord

**ตัวอย่างเนื้อหาที่ควรมีในรูป:**

- โลโก้ "เสื้อแท้.com"
- Tagline: "รับประกันของแท้ 100%"
- รูปสินค้าเด่น 2-3 ชิ้น
- สีพื้นหลังที่สวยงาม ตัดกับข้อความชัดเจน

### 2. Hero Section Image

- **ขนาด**: 1920 x 1080 pixels (16:9) หรือ 1920 x 800 pixels
- **ไฟล์**: JPG (คุณภาพสูง 80-90%)
- **จุดประสงค์**: รูปพื้นหลัง Hero Section บนหน้าแรก

### 3. Category Images (Streetwear, Sportswear, Luxury)

- **ขนาด**: 800 x 600 pixels (4:3)
- **ไฟล์**: JPG
- **จุดประสงค์**: รูปแสดงหมวดหมู่สินค้า

### 4. Product Images

- **ขนาด**: 800 x 800 pixels (1:1)
- **ไฟล์**: JPG หรือ WebP
- **พื้นหลัง**: ขาวสะอาด หรือโปร่งใส (PNG)
- **จุดประสงค์**: รูปสินค้าแต่ละชิ้น

## ✅ Checklist ก่อน Deploy

- [ ] เพิ่ม `og-image.jpg` ขนาด 1200x630px
- [ ] เปลี่ยนรูป Hero จาก placeholder
- [ ] เพิ่มรูปหมวดหมู่ Streetwear, Sportswear, Luxury
- [ ] เพิ่มรูปสินค้าจริงอย่างน้อย 6 ชิ้น
- [ ] ตรวจสอบ Alt Text ทุกรูป
- [ ] ตรวจสอบขนาดไฟล์ไม่ใหญ่เกินไป (ใช้ TinyPNG.com หรือ Squoosh.app)

## 🔧 เครื่องมือแนะนำ

- **Optimize Images**: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- **Create OG Images**: [Canva](https://www.canva.com/), Figma
- **Remove Background**: [Remove.bg](https://www.remove.bg/)
- **Check OG Tags**: [OpenGraph.xyz](https://www.opengraph.xyz/)

## 📝 หมายเหตุ

รูปภาพ Placeholder จาก `via.placeholder.com` ควรถูกแทนที่ด้วยรูปจริงก่อน Production เพราะ:

1. Google ให้ความสำคัญกับรูปภาพต้นฉบับ (Original Content)
2. ผู้ใช้ไว้วางใจมากขึ้นเมื่อเห็นรูปสินค้าจริง
3. อัตราการแปลง (Conversion Rate) จะสูงขึ้นอย่างมาก
