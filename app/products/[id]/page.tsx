import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, Heart, Share2 } from "lucide-react"

// This would normally come from a database or API
const products = [
  {
    id: 1,
    name: "Oversized Wool Blazer",
    price: 189,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    description:
      "A timeless oversized blazer crafted from premium wool. Features a relaxed silhouette, notched lapels, and a single-button closure. Perfect for layering over any outfit for an effortlessly sophisticated look.",
    details: [
      "100% Premium Wool",
      "Relaxed fit",
      "Notched lapels",
      "Single-button closure",
      "Front flap pockets",
      "Fully lined",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Camel", "Grey"],
    category: "Outerwear",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId) || products[0] // Fallback to first product if not found

  return (
    <main className="min-h-screen bg-[#f6e6c2]">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/collections" className="flex items-center text-black/70 hover:text-black transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Collection
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-black/5">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="relative aspect-square bg-black/5">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-8">
              <span className="text-black/60">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-black mt-2">{product.name}</h1>
              <p className="text-2xl text-black mt-2">${product.price}</p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h3 className="font-medium text-black mb-3">Color: Black</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border ${
                      color === "Black"
                        ? "bg-black border-black ring-1 ring-offset-2 ring-black"
                        : color === "Camel"
                          ? "bg-amber-700"
                          : "bg-gray-500"
                    }`}
                    aria-label={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <h3 className="font-medium text-black">Size: M</h3>
                <button className="text-black underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2 border ${
                      size === "M" ? "border-black bg-black text-[#f6e6c2]" : "border-black/30 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-medium text-black mb-3">Quantity</h3>
              <div className="flex border border-black/30 w-32">
                <button className="flex-none w-10 h-10 flex items-center justify-center text-black">
                  <Minus className="h-4 w-4" />
                </button>
                <div className="flex-grow h-10 flex items-center justify-center text-black">1</div>
                <button className="flex-none w-10 h-10 flex items-center justify-center text-black">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 mb-8">
              <button className="flex-grow py-3 bg-black text-[#f6e6c2] font-medium hover:bg-black/90 transition-colors">
                Add to Cart
              </button>
              <button className="w-12 h-12 border border-black/30 flex items-center justify-center hover:border-black">
                <Heart className="h-5 w-5" />
              </button>
              <button className="w-12 h-12 border border-black/30 flex items-center justify-center hover:border-black">
                <Share2 className="h-5 w-5" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-medium text-black mb-3">Description</h3>
              <p className="text-black/80">{product.description}</p>
            </div>

            {/* Details */}
            <div>
              <h3 className="font-medium text-black mb-3">Details</h3>
              <ul className="list-disc list-inside text-black/80 space-y-1">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

