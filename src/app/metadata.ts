import type { Metadata } from "next";

// TODO: [Copilot] ตรวจสอบและปรับปรุง Keywords และ Title ตามกลยุทธ์ SEO ล่าสุด
export const metadata: Metadata = {
  metadataBase: new URL("https://xn--o3c1bj3b4bj8cd.com/"),
  title: {
    default: "เสื้อแท้.com | เว็บขายเสื้อแบรนด์เนมแท้ รับประกันคุณภาพ",
    template: "%s | เสื้อแท้.com",
  },
  description:
    "ร้านขายเสื้อแท้ เชื่อถือได้ รับประกันของแท้ 100% ไม่แท้ยินดีคืนเงิน สินค้าพร้อมส่ง จัดส่งไวภายใน 24 ชม. รีวิวจากผู้ซื้อจริงมากกว่า 1,000 รีวิว",
  keywords: [
    "เสื้อแท้",
    "เสื้อแท้.com",
    "เว็บขายเสื้อแบรนด์เนมแท้",
    "ร้านขายเสื้อแท้ เชื่อถือได้",
    "เสื้อแท้รับประกัน",
    "เสื้อยืดแบรนด์แท้ พร้อมส่ง",
  ],
  openGraph: {
    title: "เสื้อแท้.com | เว็บขายเสื้อแบรนด์เนมแท้",
    description: "รับประกันของแท้ 100% สินค้าพร้อมส่ง จัดส่งไว",
    images: ["/og-image.jpg"],
    type: "website",
    locale: "th_TH",
  },
};
