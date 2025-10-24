import Link from 'next/link'
import Container from '@/components/ui/Container'
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@/lib/icons'

// TODO: [Copilot] เพิ่มลิงก์ที่ถูกต้องสำหรับ navigation links
const navLinks = [
  { name: 'หน้าแรก', href: '/' },
  { name: 'สินค้าทั้งหมด', href: '/shop' },
  { name: 'เกี่ยวกับเรา', href: '/about' },
  { name: 'ติดต่อ', href: '/contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-brand-primary"
        >
          เสื้อแท้.com
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-text hover:text-brand-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="Search"
            className="text-brand-text hover:text-brand-primary"
          >
            <SearchIcon className="h-6 w-6" />
          </button>
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="text-brand-text hover:text-brand-primary"
          >
            <ShoppingBagIcon className="h-6 w-6" />
          </Link>
          <Link
            href="/account"
            aria-label="User Account"
            className="text-brand-text hover:text-brand-primary"
          >
            <UserIcon className="h-6 w-6" />
          </Link>
        </div>
      </Container>
    </header>
  )
}
