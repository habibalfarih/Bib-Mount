import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Moon, Users, MapPin, Tent } from "lucide-react"

const campingPackages = [
  {
    id: 1,
    name: "Lakeside Camping Retreat",
    type: "Family Friendly",
    nights: "2 Nights",
    groupSize: "4-6",
    location: "Lake Kenyir",
    price: "RM 680",
    description: "Peaceful lakeside camping with fishing, kayaking, and stargazing. All equipment provided.",
    image: "/lakeside-camping-tent-nature.jpg",
  },
  {
    id: 2,
    name: "Wilderness Basecamp",
    type: "Adventure",
    nights: "3 Nights",
    groupSize: "6-10",
    location: "Royal Belum",
    price: "RM 1,150",
    description: "Deep jungle camping experience. Wildlife watching, night treks, and survival skills training.",
    image: "/jungle-basecamp-wilderness-adventure.jpg",
  },
  {
    id: 3,
    name: "Beach Camping Paradise",
    type: "Relaxation",
    nights: "2 Nights",
    groupSize: "8-12",
    location: "Perhentian Islands",
    price: "RM 850",
    description: "Camp on pristine beaches. Snorkeling, BBQ, and beach games included.",
    image: "/beach-camping-tropical-paradise.jpg",
  },
  {
    id: 4,
    name: "Highland Camp Experience",
    type: "Scenic",
    nights: "1 Night",
    groupSize: "6-8",
    location: "Cameron Highlands",
    price: "RM 480",
    description: "Cool mountain air and tea plantation views. Perfect weekend getaway for beginners.",
    image: "/highland-camping-mountains-tea.jpg",
  },
]

export default function CampingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/camping-tent-stars-wilderness.jpg" alt="Camping" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Camping Packages</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Sleep under the stars and wake up to nature's symphony.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campingPackages.map((pkg) => (
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
                      <Badge variant="secondary">{pkg.type}</Badge>
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-pretty leading-relaxed">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        <span>{pkg.nights}</span>
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
                    <Link href={`/book?package=camping-${pkg.id}`} className="w-full">
                      <Button className="w-full">
                        <Tent className="mr-2 h-4 w-4" />
                        Book This Package
                      </Button>
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
