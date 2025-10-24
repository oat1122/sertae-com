import Link from "next/link";
import Container from "@/components/ui/Container";

// TODO: [Copilot] เพิ่มลิงก์ที่ถูกต้องสำหรับ Footer
export default function Footer() {
  return (
    <footer className="bg-brand-light py-12">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-xl font-bold text-brand-primary">เสื้อแท้.com</h3>
          <p className="mt-2 text-sm text-brand-text">
            เว็บขายเสื้อแบรนด์เนมแท้ที่เชื่อถือได้ รับประกันคุณภาพสินค้าทุกชิ้น
          </p>
          {/* TODO: [Copilot] เพิ่มไอคอนและลิงก์ Social Media */}
          <div className="mt-4 flex space-x-4">{/* (Icons here) */}</div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h4 className="font-semibold text-brand-text">ช่วยเหลือ</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/help" className="hover:text-brand-primary">
                ศูนย์ช่วยเหลือ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-brand-primary">
                นโยบายการจัดส่ง
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-brand-primary">
                นโยบายการคืนสินค้า
              </Link>
            </li>
            <li>
              <Link href="/order-tracking" className="hover:text-brand-primary">
                ติดตามสถานะ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div>
          <h4 className="font-semibold text-brand-text">เกี่ยวกับเรา</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-brand-primary">
                เรื่องราวของเรา
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-brand-primary">
                สินค้าทั้งหมด
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-primary">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="mt-8 border-t border-brand-mid pt-8 text-center text-sm text-brand-text">
        <p>© {new Date().getFullYear()} เสื้อแท้.com. All rights reserved.</p>
      </div>
    </footer>
  );
}
