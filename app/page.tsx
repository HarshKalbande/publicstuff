import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import FeaturedProducts from "@/components/featured-products"
import Newsletter from "@/components/newsletter"
import CategorySection from "@/components/category-section"
import TrendingSection from "@/components/trending-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-[#f6e6c2]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fashion model"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">Timeless Elegance, Modern Style</h1>
            <p className="text-xl md:text-2xl text-black/80 mb-8">
              Discover our curated collection of premium fashion pieces designed for the modern individual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/collections"
                className="inline-flex items-center justify-center h-12 px-6 font-medium bg-black text-[#f6e6c2] hover:bg-black/90 transition-colors"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-12 px-6 font-medium border border-black text-black hover:bg-black/5 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <CategorySection />

      {/* Featured Products */}
      <section className="py-20 bg-[#f6e6c2]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Featured Collection</h2>
              <p className="text-black/70 mt-2">Handpicked pieces for your wardrobe</p>
            </div>
            <Link href="/collections" className="text-black font-medium flex items-center hover:underline">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-20 bg-black text-[#f6e6c2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Art of Minimalism</h2>
              <p className="text-[#f6e6c2]/80 mb-8 text-lg">
                Our latest editorial explores the beauty of simplicity. Clean lines, neutral tones, and timeless
                silhouettes create a wardrobe that transcends seasons and trends.
              </p>
              <Link
                href="/editorial"
                className="inline-flex items-center justify-center h-12 px-6 font-medium border border-[#f6e6c2] text-[#f6e6c2] hover:bg-[#f6e6c2]/10 transition-colors"
              >
                Read Editorial
              </Link>
            </div>
            <div className="relative h-[500px] w-full">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Fashion editorial"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <TrendingSection />

      {/* Newsletter */}
      <Newsletter />
    </main>
  )
}

