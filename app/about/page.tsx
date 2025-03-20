import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6e6c2]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fashion atelier"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#f6e6c2] mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-[#f6e6c2]/80 max-w-2xl">
            Crafting timeless fashion with a commitment to quality and sustainability.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center">Our Mission</h2>
          <p className="text-lg text-black/80 mb-6 text-center">
            We believe in creating fashion that stands the test of time—both in style and durability. Our mission is to
            provide high-quality, thoughtfully designed pieces that become the foundation of your wardrobe for years to
            come.
          </p>
          <p className="text-lg text-black/80 mb-6 text-center">
            With a focus on sustainable practices and ethical production, we strive to make a positive impact on both
            the fashion industry and the world around us.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black text-[#f6e6c2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#f6e6c2] text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-[#f6e6c2]/80">
                We source the finest materials and work with skilled artisans to create pieces that are built to last.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f6e6c2] text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-[#f6e6c2]/80">
                From responsible sourcing to eco-friendly packaging, sustainability is at the core of everything we do.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f6e6c2] text-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Timelessness</h3>
              <p className="text-[#f6e6c2]/80">
                We design with longevity in mind, creating pieces that transcend seasonal trends and remain relevant for
                years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Creative Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-1">Emma Chen</h3>
              <p className="text-black/60 mb-4">Creative Director</p>
              <p className="text-black/80">
                With over 15 years in the fashion industry, Emma brings her unique vision and expertise to every
                collection.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <Image src="/placeholder.svg?height=200&width=200" alt="Head of Design" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-black mb-1">Marcus Taylor</h3>
              <p className="text-black/60 mb-4">Head of Design</p>
              <p className="text-black/80">
                Marcus combines traditional craftsmanship with modern techniques to create our signature aesthetic.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sustainability Lead"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-1">Sophia Rivera</h3>
              <p className="text-black/60 mb-4">Sustainability Lead</p>
              <p className="text-black/80">
                Sophia ensures our commitment to ethical and sustainable practices is upheld throughout our supply
                chain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

