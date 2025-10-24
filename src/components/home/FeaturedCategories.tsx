import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

// TODO: [Copilot] ดึงข้อมูล Category 3 รายการจาก Prisma
const categories = [
  { name: 'Streetwear', href: '/category/streetwear', imageUrl: 'https://via.placeholder.com/400x300.png?text=Streetwear' },
  { name: 'Sportswear', href: '/category/sportswear', imageUrl: 'https://via.placeholder.com/400x300.png?text=Sportswear' },
  { name: 'Luxury', href: '/category/luxury', imageUrl: 'https://via.placeholder.com/400x300.png?text=Luxury' },
]

export default function FeaturedCategories() {
  return (
    <section className="bg-brand-light py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold text-brand-primary">
          เลือกซื้อตามแบรนด์
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative h-48 overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={category.imageUrl}
                alt={`หมวดหมู่ ${category.name}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
