import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-[#f6e6c2]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MONOCHROME</h3>
            <p className="text-[#f6e6c2]/70 mb-6">
              Timeless fashion for the modern individual. Quality, sustainability, and style in every piece.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/women" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/collections/men" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/accessories"
                  className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/new-arrivals"
                  className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-[#f6e6c2]/70 hover:text-[#f6e6c2] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#f6e6c2]/20 text-center text-[#f6e6c2]/50 text-sm">
          <p>© {new Date().getFullYear()} MONOCHROME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

