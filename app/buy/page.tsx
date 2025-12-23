import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle, Instagram, Package } from "lucide-react"

const gearItems = [
  {
    id: 1,
    name: "Ultralight Hiking Backpack 40L",
    condition: "New",
    price: "RM 320",
    description: "Water-resistant, ergonomic design with multiple compartments. Perfect for multi-day hikes.",
    image: "/backpack.jpeg",
  },
  {
    id: 2,
    name: "Professional Camping Tent (4-Person)",
    condition: "Like New",
    price: "RM 580",
    description: "Waterproof, easy setup, includes rainfly and footprint. Used only twice.",
    image: "/camping.jpeg",
  },
  {
    id: 3,
    name: "Trekking Poles Set",
    condition: "Used",
    price: "RM 120",
    description: "Adjustable aluminum poles with anti-shock system. Some wear but fully functional.",
    image: "/tracking.jpeg",
  },
  {
    id: 4,
    name: "Sleeping Bag -10°C",
    condition: "New",
    price: "RM 280",
    description: "Premium down insulation, compact, suitable for cold weather camping.",
    image: "/sleeping.jpeg",
  },
  {
    id: 5,
    name: "Portable Camp Stove",
    condition: "Like New",
    price: "RM 150",
    description: "Compact gas stove with piezo ignition. Includes carrying case.",
    image: "/portable.jpeg",
  },
  {
    id: 6,
    name: "Hiking Boots Size 42",
    condition: "Used",
    price: "RM 220",
    description: "Waterproof leather boots, excellent grip, well maintained.",
    image: "/boots.jpeg",
  },
]

export default function BuyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <Package className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Buy Outdoor Gear</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Quality pre-owned and new equipment from fellow adventurers
            </p>
          </div>
        </section>

        {/* Gear Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <p className="text-muted-foreground text-lg mb-6">
                All purchases are handled through WhatsApp or Instagram for your convenience and security.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://wa.me/6282125096778?text=Hi!+I+want+to+browse+outdoor+gear"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Shop via WhatsApp
                  </Button>
                </a>
                <a href="https://instagram.com/bibmount_" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Instagram className="mr-2 h-4 w-4" />
                    View on Instagram
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gearItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-56 overflow-hidden bg-muted">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={item.condition === "New" ? "default" : "secondary"}>{item.condition}</Badge>
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                    </div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <CardDescription className="leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex gap-2">
                    <a
                      href={`https://wa.me/6282125096778?text=Hi!+I+want+to+buy:+${encodeURIComponent(item.name)}+-+${item.price}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Buy Now
                      </Button>
                    </a>
                    <a href="https://instagram.com/bibmount_" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Instagram className="h-4 w-4" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
