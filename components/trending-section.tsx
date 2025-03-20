import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const trendingItems = [
  {
    id: 1,
    name: "Pleated Midi Skirt",
    price: 95,
    image: "/placeholder.svg?height=600&width=500",
  },
  {
    id: 2,
    name: "Oversized Cotton Shirt",
    price: 85,
    image: "/placeholder.svg?height=600&width=500",
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    price: 135,
    image: "/placeholder.svg?height=600&width=500",
  },
]

export default function TrendingSection() {
  return (
    <section className="py-20 bg-[#f6e6c2]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black">Trending Now</h2>
            <p className="text-black/70 mt-2">The season's most coveted pieces</p>
          </div>
          <Link href="/trending" className="text-black font-medium flex items-center hover:underline">
            View All
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-black/5">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div>
                <h3 className="font-medium text-black">{item.name}</h3>
                <p className="text-black mt-1">${item.price}</p>
                <Link
                  href={`/products/${item.id}`}
                  className="inline-block mt-2 text-black border-b border-black pb-1 hover:pb-2 transition-all"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

