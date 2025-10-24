import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-brand-mid py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-brand-text">
          ทำไมต้อง เสื้อแท้.com
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-text">
          เราคือ{" "}
          <strong className="font-semibold">เว็บขายเสื้อแบรนด์เนมแท้</strong>{" "}
          ที่คุณวางใจได้ คัดสรรแต่สินค้าคุณภาพ
          พร้อมการรับประกันที่ทำให้คุณมั่นใจในทุกการสั่งซื้อ
          สัมผัสประสบการณ์การช้อปปิ้งที่ดีที่สุดกับเรา
        </p>
        <div className="mt-8">
          <Button href="/about" variant="primary" className="bg-brand-primary">
            อ่านเรื่องราวของเรา
          </Button>
        </div>
      </Container>
    </section>
  );
}
