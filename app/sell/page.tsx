"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle, Package } from "lucide-react"

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    itemName: "",
    category: "",
    condition: "",
    price: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Hi! I want to sell outdoor gear:%0A%0ASeller Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AItem: ${formData.itemName}%0ACategory: ${formData.category}%0ACondition: ${formData.condition}%0AAsking Price: ${formData.price}%0ADescription: ${formData.description}`

    window.open(`https://wa.me/6282125096778?text=${whatsappMessage}`, "_blank")
  }

  return (
    <>
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <Package className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Gear</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have outdoor equipment you no longer use? List it here and we'll help you find buyers through our
              community.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>List Your Item</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you via WhatsApp to complete the listing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+60 12-345 6789"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="itemName">Item Name *</Label>
                  <Input
                    id="itemName"
                    required
                    value={formData.itemName}
                    onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
                    placeholder="e.g., Hiking Backpack 40L"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="backpacks">Backpacks</SelectItem>
                        <SelectItem value="tents">Tents & Shelters</SelectItem>
                        <SelectItem value="sleeping">Sleeping Bags & Mats</SelectItem>
                        <SelectItem value="clothing">Clothing & Footwear</SelectItem>
                        <SelectItem value="cooking">Cooking Equipment</SelectItem>
                        <SelectItem value="navigation">Navigation & Electronics</SelectItem>
                        <SelectItem value="accessories">Accessories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition *</Label>
                    <Select
                      value={formData.condition}
                      onValueChange={(value) => setFormData({ ...formData, condition: value })}
                    >
                      <SelectTrigger id="condition">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New (Unused)</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Asking Price (RM) *</Label>
                  <Input
                    id="price"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="250"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <textarea
                    id="description"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full min-h-32 px-3 py-2 border border-input rounded-md bg-background"
                    placeholder="Describe the item, its features, any defects, and why you're selling it..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Submit Listing via WhatsApp
                </Button>

                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  After submission, our team will review your item and contact you via WhatsApp to arrange photos and
                  finalize the listing.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
