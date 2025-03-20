export default function Newsletter() {
  return (
    <section className="py-20 bg-black text-[#f6e6c2]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-[#f6e6c2]/80 mb-8 text-lg max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive access to new collections, styling tips, and special offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 bg-transparent border border-[#f6e6c2]/30 text-[#f6e6c2] placeholder:text-[#f6e6c2]/50 focus:outline-none focus:border-[#f6e6c2]"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#f6e6c2] text-black font-medium hover:bg-[#f6e6c2]/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

