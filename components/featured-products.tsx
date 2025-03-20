import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Oversized Wool Blazer",
    price: 189,
    image: "/placeholder.svg?height=600&width=500",
    category: "Outerwear",
  },
  {
    id: 2,
    name: "Silk Slip Dress",
    price: 145,
    image: "/placeholder.svg?height=600&width=500",
    category: "Dresses",
  },
  {
    id: 3,
    name: "Tailored Linen Trousers",
    price: 120,
    image: "/placeholder.svg?height=600&width=500",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Cashmere Turtleneck",
    price: 165,
    image: "/placeholder.svg?height=600&width=500",
    category: "Knitwear",
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-black/5">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Link
                href={`/products/${product.id}`}
                className="bg-black text-[#f6e6c2] py-3 px-6 flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <span className="text-black/60 text-sm">{product.category}</span>
            <h3 className="font-medium text-black mt-1">{product.name}</h3>
            <p className="text-black mt-1">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

