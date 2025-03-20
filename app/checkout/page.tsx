"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function CheckoutPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would process the payment here
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#f6e6c2] py-12">
        <div className="container mx-auto px-4 max-w-md text-center">
          <CheckCircle className="h-16 w-16 mx-auto text-black mb-6" />
          <h1 className="text-3xl font-bold text-black mb-4">Order Confirmed!</h1>
          <p className="text-black/70 mb-8">
            Thank you for your purchase. We've sent a confirmation email with all the details.
          </p>
          <p className="font-medium text-black mb-8">Order #MON12345678</p>
          <Link
            href="/"
            className="inline-block py-3 px-6 bg-black text-[#f6e6c2] font-medium hover:bg-black/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f6e6c2]">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/cart" className="flex items-center text-black/70 hover:text-black mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>

        <h1 className="text-3xl font-bold text-black mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-6">Contact Information</h2>
              <div className="space-y-4">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-black mb-6">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-black mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="apartment" className="block text-sm font-medium text-black mb-1">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-black mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-black mb-1">
                      State
                    </label>
                    <select
                      id="state"
                      className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="NY">New York</option>
                      <option value="CA">California</option>
                      <option value="TX">Texas</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-black mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-black mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className="border border-black/20 p-4">
                  <div className="flex items-center">
                    <input type="radio" id="creditCard" name="paymentMethod" className="h-4 w-4" defaultChecked />
                    <label htmlFor="creditCard" className="ml-2 text-black">
                      Credit Card
                    </label>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-black mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-black mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-black mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          placeholder="123"
                          className="w-full px-4 py-2 bg-white border border-black/20 focus:border-black focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-black/20 p-4">
                  <div className="flex items-center">
                    <input type="radio" id="paypal" name="paymentMethod" className="h-4 w-4" />
                    <label htmlFor="paypal" className="ml-2 text-black">
                      PayPal
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="border border-black/10 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-black/5 mr-4"></div>
                    <div>
                      <p className="text-black">Oversized Wool Blazer</p>
                      <p className="text-black/60 text-sm">Size: M | Black</p>
                    </div>
                  </div>
                  <p className="text-black">$189.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-black/5 mr-4"></div>
                    <div>
                      <p className="text-black">Tailored Linen Trousers</p>
                      <p className="text-black/60 text-sm">Size: S | Camel</p>
                    </div>
                  </div>
                  <p className="text-black">$120.00</p>
                </div>
                <div className="border-t border-black/10 pt-4 flex justify-between">
                  <span className="text-black/70">Subtotal</span>
                  <span className="text-black">$309.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/70">Shipping</span>
                  <span className="text-black">$15.00</span>
                </div>
                <div className="border-t border-black/10 pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>$324.00</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-[#f6e6c2] font-medium hover:bg-black/90 transition-colors"
              >
                Complete Order
              </button>

              <p className="text-black/60 text-sm mt-4 text-center">
                By completing your order, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

