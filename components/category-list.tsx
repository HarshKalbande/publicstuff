import Link from "next/link"
import { Shirt, Home, Tv, Briefcase, Gem, BookOpen, Coffee, Utensils } from "lucide-react"

const categories = [
  { name: "Clothing", icon: Shirt, href: "/category/clothing" },
  { name: "Home Decor", icon: Home, href: "/category/home-decor" },
  { name: "Electronics", icon: Tv, href: "/category/electronics" },
  { name: "Accessories", icon: Briefcase, href: "/category/accessories" },
  { name: "Jewelry", icon: Gem, href: "/category/jewelry" },
  { name: "Books", icon: BookOpen, href: "/category/books" },
  { name: "Kitchenware", icon: Utensils, href: "/category/kitchenware" },
  { name: "Collectibles", icon: Coffee, href: "/category/collectibles" },
]

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="flex items-center p-3 rounded-lg border bg-background hover:bg-muted transition-colors"
        >
          <category.icon className="h-5 w-5 mr-2" />
          <span className="text-sm">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

