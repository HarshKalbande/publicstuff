import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const trendingItems = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    shop: "Vintage Treasures",
    price: 45.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Mid-Century Coffee Table",
    shop: "Retro Finds",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Furniture",
  },
  {
    id: 3,
    name: "Polaroid Camera",
    shop: "Vintage Treasures",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Handmade Ceramic Vase",
    shop: "Eco Thrift",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home Decor",
  },
]

export default function TrendingItems() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {trendingItems.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <div className="relative">
            <div className="relative h-64 w-full">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            </div>
            <button className="absolute top-2 right-2 p-1.5 bg-background/80 rounded-full">
              <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
            </button>
            <Badge className="absolute bottom-2 left-2">{item.category}</Badge>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold truncate">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.shop}</p>
            <p className="font-bold mt-2">${item.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link href={`/products/${item.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

