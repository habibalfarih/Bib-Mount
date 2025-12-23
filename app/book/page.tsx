"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MessageCircle } from "lucide-react"

function BookingForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: searchParams.get("package") || "",
    date: "",
    guests: "1",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Hi! I want to book an activity:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APackage: ${formData.package}%0ADate: ${formData.date}%0AGuests: ${formData.guests}%0AMessage: ${formData.message}`

    window.open(`https://wa.me/6282125096778?text=${whatsappMessage}`, "_blank")
  }

  return (
    <>
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Adventure</h1>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll contact you via WhatsApp to confirm your booking.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Booking Information
              </CardTitle>
              <CardDescription>
                Complete this form to reserve your spot. We'll reach out within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

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

                <div className="space-y-2">
                  <Label htmlFor="package">Select Package *</Label>
                  <Select
                    value={formData.package}
                    onValueChange={(value) => setFormData({ ...formData, package: value })}
                  >
                    <SelectTrigger id="package">
                      <SelectValue placeholder="Choose your adventure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hiking-1">Hiking - Summit Trail Experience</SelectItem>
                      <SelectItem value="hiking-2">Hiking - Forest Discovery Hike</SelectItem>
                      <SelectItem value="hiking-3">Hiking - Waterfall Quest</SelectItem>
                      <SelectItem value="camping-1">Camping - Lakeside Retreat</SelectItem>
                      <SelectItem value="camping-2">Camping - Wilderness Basecamp</SelectItem>
                      <SelectItem value="adventure-1">Eco - Rainforest Conservation</SelectItem>
                      <SelectItem value="adventure-2">Eco - River Expedition</SelectItem>
                      <SelectItem value="teambuilding">Team Building Program</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => setFormData({ ...formData, guests: value })}
                    >
                      <SelectTrigger id="guests">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Message</Label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-24 px-3 py-2 border border-input rounded-md bg-background"
                    placeholder="Any special requests or questions?"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Send Booking via WhatsApp
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you'll be redirected to WhatsApp to complete your booking with our team.
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

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <>
          <Header />
          <main className="py-20 bg-background">
            <div className="container mx-auto px-4 text-center">
              <p>Loading booking form...</p>
            </div>
          </main>
          <Footer />
        </>
      }
    >
      <BookingForm />
    </Suspense>
  )
}
