import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Leaf, Users, MapPin, Clock } from "lucide-react"

const adventurePackages = [
  {
    id: 1,
    name: "Rainforest Conservation Tour",
    category: "Eco-Tourism",
    duration: "3 Days",
    groupSize: "8-12",
    location: "Danum Valley",
    price: "RM 1,450",
    description:
      "Participate in conservation efforts while exploring one of the world's oldest rainforests. Plant trees and track wildlife.",
    image: "/tropical-rainforest-conservation-jungle-wildlife-n.jpg",
  },
  {
    id: 2,
    name: "River Expedition",
    category: "Water Adventure",
    duration: "2 Days",
    groupSize: "6-10",
    location: "Kinabatangan River",
    price: "RM 920",
    description:
      "Canoe through pristine rivers, spot proboscis monkeys, pygmy elephants, and exotic birds in their natural habitat.",
    image: "/river-expedition-kayaking-canoeing-wildlife-nature.jpg",
  },
  {
    id: 3,
    name: "Sustainable Farm Stay",
    category: "Agro-Tourism",
    duration: "2 Days",
    groupSize: "4-8",
    location: "Kundasang",
    price: "RM 680",
    description: "Experience organic farming, learn sustainable practices, and enjoy fresh farm-to-table meals.",
    image: "/organic-farm-sustainable-agriculture-countryside.jpg",
  },
  {
    id: 4,
    name: "Mangrove Exploration",
    category: "Coastal Eco",
    duration: "1 Day",
    groupSize: "10-15",
    location: "Kuala Selangor",
    price: "RM 380",
    description:
      "Discover the importance of mangrove ecosystems. Kayaking, firefly watching, and educational tour included.",
    image: "/mangrove-forest-coastal-ecosystem-kayaking-nature.jpg",
  },
]

export default function AdventurePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/eco-adventure-sustainable-tourism-nature-rainfores.jpg" alt="Eco Adventure" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Eco Adventure Tours</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Sustainable adventures that protect and celebrate our natural world.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Leaf className="h-5 w-5" />
                <span className="font-semibold">Sustainable & Responsible Tourism</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our eco-adventure tours prioritize environmental conservation and support local communities while
                providing unforgettable experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {adventurePackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="default" className="bg-accent">
                        <Leaf className="h-3 w-3 mr-1" />
                        {pkg.category}
                      </Badge>
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-pretty leading-relaxed">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Duration: {pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Group: {pkg.groupSize} people</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{pkg.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/book?package=adventure-${pkg.id}`} className="w-full">
                      <Button className="w-full">Book This Adventure</Button>
                    </Link>
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
