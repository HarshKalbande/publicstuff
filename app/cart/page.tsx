"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Oversized Wool Blazer",
    price: 189,
    image: "/placeholder.svg?height=150&width=120",
    quantity: 1,
    size: "M",
    color: "Black",
  },
  {
    id: 3,
    name: "Tailored Linen Trousers",
    price: 120,
    image: "/placeholder.svg?height=150&width=120",
    quantity: 1,
    size: "S",
    color: "Camel",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 15
  const total = subtotal + shipping

  return (
    <main className="min-h-screen bg-[#f6e6c2]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-black mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 border border-black/10">
                    <div className="relative h-40 w-32 flex-shrink-0 bg-black/5 self-center sm:self-start">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-medium text-black">{item.name}</h3>
                          <p className="text-black/60 text-sm mt-1">
                            Size: {item.size} | Color: {item.color}
                          </p>
                        </div>
                        <p className="font-bold text-black mt-2 sm:mt-0">${item.price}</p>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        <div className="flex border border-black/30">
                          <button
                            className="flex-none w-8 h-8 flex items-center justify-center text-black"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <div className="flex-grow w-8 h-8 flex items-center justify-center text-black">
                            {item.quantity}
                          </div>
                          <button
                            className="flex-none w-8 h-8 flex items-center justify-center text-black"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button className="text-black/60 hover:text-black" onClick={() => removeItem(item.id)}>
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/collections" className="flex items-center text-black hover:underline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div>
              <div className="border border-black/10 p-6">
                <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-black/70">Subtotal</span>
                    <span className="text-black">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black/70">Shipping</span>
                    <span className="text-black">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-black/10 pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full py-3 bg-black text-[#f6e6c2] font-medium text-center hover:bg-black/90 transition-colors"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-black/30 mb-6" />
            <h2 className="text-2xl font-bold text-black mb-4">Your cart is empty</h2>
            <p className="text-black/70 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link
              href="/collections"
              className="inline-block py-3 px-6 bg-black text-[#f6e6c2] font-medium hover:bg-black/90 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

