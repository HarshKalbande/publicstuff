import Image from "next/image"
import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const shops = [
  {
    id: 1,
    name: "Vintage Treasures",
    image: "/placeholder.svg?height=200&width=400",
    location: "Brooklyn, NY",
    rating: 4.8,
    specialty: "Vintage Clothing",
    description: "Curated vintage clothing from the 60s, 70s, and 80s.",
  },
  {
    id: 2,
    name: "Retro Finds",
    image: "/placeholder.svg?height=200&width=400",
    location: "Portland, OR",
    rating: 4.7,
    specialty: "Home Decor",
    description: "Mid-century modern furniture and home accessories.",
  },
  {
    id: 3,
    name: "Eco Thrift",
    image: "/placeholder.svg?height=200&width=400",
    location: "Austin, TX",
    rating: 4.9,
    specialty: "Sustainable",
    description: "Eco-friendly and upcycled items for conscious consumers.",
  },
]

export default function FeaturedShops() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {shops.map((shop) => (
        <div key={shop.id} className="bg-background rounded-lg shadow-sm overflow-hidden border">
          <div className="relative h-48 w-full">
            <Image src={shop.image || "/placeholder.svg"} alt={shop.name} fill className="object-cover" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{shop.name}</h3>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{shop.rating}</span>
              </div>
            </div>
            <div className="flex items-center text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{shop.location}</span>
            </div>
            <Badge className="mb-2">{shop.specialty}</Badge>
            <p className="text-sm text-muted-foreground mb-4">{shop.description}</p>
            <Button asChild size="sm" className="w-full">
              <Link href={`/shops/${shop.id}`}>Visit Shop</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

