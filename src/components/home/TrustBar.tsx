import Container from '@/components/ui/Container'
import { ShieldCheckIcon, TruckIcon, StarIcon } from '@/lib/icons'

const features = [
  {
    name: 'รับประกันของแท้ 100%',
    description: 'ไม่แท้ยินดีคืนเงินเต็มจำนวน',
    icon: ShieldCheckIcon,
  },
  {
    name: 'จัดส่งไวใน 24 ชม.',
    description: 'สินค้าพร้อมส่ง ไม่ต้องรอพรีออเดอร์',
    icon: TruckIcon,
  },
  {
    name: 'รีวิวจากผู้ซื้อจริง 1,000+',
    description: 'คะแนนเฉลี่ย 4.9/5 ดาว',
    icon: StarIcon,
  },
]

export default function TrustBar() {
  return (
    <section className="bg-brand-light py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col items-center"
            >
              <feature.icon className="h-10 w-10 text-brand-primary" />
              <h3 className="mt-4 text-lg font-semibold text-brand-text">
                {feature.name}
              </h3>
              <p className="mt-1 text-sm text-brand-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
