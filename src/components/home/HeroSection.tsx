import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="bg-brand-lightest">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        {/* Left: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-brand-text sm:text-5xl">
            เสื้อยืดแบรนด์แท้ พร้อมส่ง
          </h1>
          <p className="mt-4 text-lg text-brand-text">
            ร้านขายเสื้อแท้ที่เชื่อถือได้ ค้นพบแบรนด์โปรดของคุณที่{" "}
            <strong className="font-semibold text-brand-primary">
              เสื้อแท้.com
            </strong>
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <Button href="/shop" variant="primary">
              เลือกซื้อเลย
            </Button>
            <Button href="/about" variant="ghost">
              ทำไมต้องซื้อกับเรา
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative h-64 w-full md:h-96">
          <Image
            src="/gif/hero/hero.gif"
            alt="เสื้อยืดแบรนด์เนมแท้พรีเมียม - คอลเลกชันใหม่ล่าสุด"
            fill
            className="rounded-lg object-cover shadow-lg"
            priority
            unoptimized
          />
        </div>
      </Container>
    </section>
  );
}
