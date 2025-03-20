import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  shop: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <div className="relative h-64 w-full">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        </div>
        <button className="absolute top-2 right-2 p-1.5 bg-background/80 rounded-full">
          <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
        </button>
        <Badge className="absolute bottom-2 left-2">{product.category}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.shop}</p>
        <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

