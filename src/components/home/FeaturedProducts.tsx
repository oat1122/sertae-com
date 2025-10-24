import Container from '@/components/ui/Container'
import ProductCard from '@/components/shop/ProductCard'

// TODO: [Copilot] ดึงข้อมูลสินค้าจริง 8 รายการจาก Prisma (เช่น สินค้ามาใหม่)
const placeholderProducts = [
  { id: '1', slug: 'product-1', name: 'เสื้อยืดโลโก้ Classic', brand: 'Brand A', price: 1200, imageUrl: 'https://via.placeholder.com/300x400.png?text=Product+1' },
  { id: '2', slug: 'product-2', name: 'เสื้อยืดลายกราฟิก', brand: 'Brand B', price: 1500, imageUrl: 'https://via.placeholder.com/300x400.png?text=Product+2' },
  { id: '3', slug: 'product-3', name: 'เสื้อยืดสีพื้นพรีเมียม', brand: 'Brand C', price: 990, imageUrl: 'https://via.placeholder.com/300x400.png?text=Product+3' },
  { id: '4', slug: 'product-4', name: 'เสื้อยืดรุ่น Limited', brand: 'Brand D', price: 2500, imageUrl: 'https://via.placeholder.com/300x400.png?text=Product+4' },
]

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold text-brand-primary">
          สินค้ามาใหม่
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placeholderProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
