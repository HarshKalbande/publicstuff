import { products } from "@/data/products"
import ProductCard from "./product-card"

export default function RelatedProducts({ currentProductId }: { currentProductId: number }) {
  // Filter out current product and get 4 random products
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

