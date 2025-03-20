export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6e6c2]">
      <section className="py-20 bg-black text-[#f6e6c2]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-[#f6e6c2]/80">
            We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-black mb-2">Email</h3>
                  <p className="text-black/80">info@monochrome.com</p>
                </div>

                <div>
                  <h3 className="font-medium text-black mb-2">Phone</h3>
                  <p className="text-black/80">+1 (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="font-medium text-black mb-2">Store Location</h3>
                  <p className="text-black/80">
                    123 Fashion Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-black mb-2">Hours</h3>
                  <p className="text-black/80">
                    Monday - Friday: 10am - 7pm
                    <br />
                    Saturday: 11am - 6pm
                    <br />
                    Sunday: 12pm - 5pm
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-6">Send a Message</h2>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-black text-[#f6e6c2] font-medium hover:bg-black/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

