import Image from "next/image"
import Link from "next/link"
import { Filter, ChevronDown } from "lucide-react"

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
  {
    id: 5,
    name: "Pleated Midi Skirt",
    price: 95,
    image: "/placeholder.svg?height=600&width=500",
    category: "Bottoms",
  },
  {
    id: 6,
    name: "Oversized Cotton Shirt",
    price: 85,
    image: "/placeholder.svg?height=600&width=500",
    category: "Tops",
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    price: 135,
    image: "/placeholder.svg?height=600&width=500",
    category: "Accessories",
  },
  {
    id: 8,
    name: "High-Waisted Jeans",
    price: 110,
    image: "/placeholder.svg?height=600&width=500",
    category: "Bottoms",
  },
]

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#f6e6c2]">
      {/* Collection Header */}
      <div className="bg-black text-[#f6e6c2] py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
          <p className="max-w-2xl mx-auto text-[#f6e6c2]/80">
            Explore our curated selection of timeless pieces designed with quality and sustainability in mind.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b border-black/10 bg-[#f6e6c2]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filter</span>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center cursor-pointer">
                <span className="mr-1">Category</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center cursor-pointer">
                <span className="mr-1">Price</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center cursor-pointer">
                <span className="mr-1">Sort By</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-black/5">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div>
                <span className="text-black/60 text-sm">{product.category}</span>
                <h3 className="font-medium text-black mt-1">{product.name}</h3>
                <p className="text-black mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

