"use client"

import { Switch } from "@/components/ui/switch"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { CreditCard, Heart, Package, Settings, ShoppingBag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Jane Doe</CardTitle>
                <CardDescription>jane.doe@example.com</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <nav className="flex flex-col">
              <Button
                variant={activeTab === "profile" ? "default" : "ghost"}
                className="justify-start rounded-none h-12"
                onClick={() => setActiveTab("profile")}
              >
                <User className="mr-2 h-5 w-5" />
                Profile
              </Button>
              <Button
                variant={activeTab === "orders" ? "default" : "ghost"}
                className="justify-start rounded-none h-12"
                onClick={() => setActiveTab("orders")}
              >
                <Package className="mr-2 h-5 w-5" />
                Orders
              </Button>
              <Button
                variant={activeTab === "wishlist" ? "default" : "ghost"}
                className="justify-start rounded-none h-12"
                onClick={() => setActiveTab("wishlist")}
              >
                <Heart className="mr-2 h-5 w-5" />
                Wishlist
              </Button>
              <Button
                variant={activeTab === "payment" ? "default" : "ghost"}
                className="justify-start rounded-none h-12"
                onClick={() => setActiveTab("payment")}
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Payment Methods
              </Button>
              <Button
                variant={activeTab === "settings" ? "default" : "ghost"}
                className="justify-start rounded-none h-12"
                onClick={() => setActiveTab("settings")}
              >
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </Button>
            </nav>
          </CardContent>
        </Card>

        <div className="md:col-span-3">
          {activeTab === "profile" && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <p>Jane</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <p>Doe</p>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p>jane.doe@example.com</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <p>(555) 123-4567</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Address</label>
                  <p>123 Main St, Apt 4B</p>
                  <p>New York, NY 10001</p>
                </div>
                <Button>Edit Profile</Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "orders" && (
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and track your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">Order #{order}12345</h3>
                          <p className="text-sm text-muted-foreground">Placed on March {order + 10}, 2023</p>
                        </div>
                        <Badge variant="outline">Delivered</Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="h-16 w-16 bg-muted rounded flex items-center justify-center">
                          <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{order + 1} items</p>
                          <p className="text-sm text-muted-foreground">Total: ${(order * 45.99).toFixed(2)}</p>
                        </div>
                        <Button variant="outline" size="sm" className="ml-auto">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "wishlist" && (
            <Card>
              <CardHeader>
                <CardTitle>Wishlist</CardTitle>
                <CardDescription>Items you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex gap-4 border rounded-lg p-4">
                      <div className="h-20 w-20 bg-muted rounded flex-shrink-0"></div>
                      <div className="flex-grow">
                        <h3 className="font-medium">Wishlist Item {item}</h3>
                        <p className="text-sm text-muted-foreground">Vintage Shop {item}</p>
                        <p className="font-bold mt-1">${(item * 19.99).toFixed(2)}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline">
                          Add to Cart
                        </Button>
                        <Button size="sm" variant="ghost">
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "payment" && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 flex items-center">
                    <div className="h-10 w-16 bg-muted rounded mr-4"></div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/25</p>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <Button size="sm" variant="outline">
                        Edit
                      </Button>
                      <Button size="sm" variant="ghost">
                        Remove
                      </Button>
                    </div>
                  </div>
                  <Button>Add Payment Method</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "settings" && (
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label>Order updates</label>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <label>Promotions and deals</label>
                      <Switch checked={false} />
                    </div>
                    <div className="flex items-center justify-between">
                      <label>Account activity</label>
                      <Switch checked={true} />
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-4">Account Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

