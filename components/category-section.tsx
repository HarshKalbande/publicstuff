import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Women",
    image: "/placeholder.svg?height=600&width=400",
    link: "/collections/women",
  },
  {
    name: "Men",
    image: "/placeholder.svg?height=600&width=400",
    link: "/collections/men",
  },
  {
    name: "Accessories",
    image: "/placeholder.svg?height=600&width=400",
    link: "/collections/accessories",
  },
]

export default function CategorySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f6e6c2] mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={category.link} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <h3 className="text-[#f6e6c2] text-3xl font-bold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

