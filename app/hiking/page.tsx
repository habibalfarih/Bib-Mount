import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, Users, MapPin } from "lucide-react"

const hikingPackages = [
  {
    id: 1,
    name: "Summit Trail Experience",
    difficulty: "Advanced",
    duration: "2 Days",
    groupSize: "8-12",
    location: "Mount Kinabalu",
    price: "RM 850",
    description: "Conquer the highest peak in Malaysia with experienced guides. Includes camping equipment and meals.",
    image: "/mountain-summit-peak-adventure.jpg",
  },
  {
    id: 2,
    name: "Forest Discovery Hike",
    difficulty: "Beginner",
    duration: "1 Day",
    groupSize: "10-15",
    location: "Taman Negara",
    price: "RM 280",
    description: "Perfect for beginners. Explore ancient rainforest trails with knowledgeable nature guides.",
    image: "/forest-trail-rainforest-hiking.jpg",
  },
  {
    id: 3,
    name: "Waterfall Quest",
    difficulty: "Intermediate",
    duration: "1 Day",
    groupSize: "6-10",
    location: "Cameron Highlands",
    price: "RM 420",
    description: "Trek through tea plantations and jungle to discover hidden waterfalls. Swimming included!",
    image: "/waterfall-jungle-hiking-nature.jpg",
  },
  {
    id: 4,
    name: "Sunrise Peak Expedition",
    difficulty: "Intermediate",
    duration: "1 Day",
    groupSize: "8-12",
    location: "Bukit Tabur",
    price: "RM 350",
    description: "Early morning hike to catch the spectacular sunrise. Includes breakfast at the summit.",
    image: "/sunrise-mountain-peak-hiking.jpg",
  },
  {
    id: 5,
    name: "Coastal Trail Adventure",
    difficulty: "Beginner",
    duration: "1 Day",
    groupSize: "12-16",
    location: "Penang National Park",
    price: "RM 320",
    description: "Scenic coastal hike with stunning beach views. Perfect for families and nature lovers.",
    image: "/coastal-trail-beach-hiking.jpg",
  },
  {
    id: 6,
    name: "Highland Explorer",
    difficulty: "Advanced",
    duration: "3 Days",
    groupSize: "6-8",
    location: "Titiwangsa Range",
    price: "RM 1,250",
    description:
      "Multi-day expedition through pristine highlands. Camping, wildlife spotting, and breathtaking vistas.",
    image: "/highland-mountains-expedition-wilderness.jpg",
  },
]

export default function HikingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/hiking-trail-adventure-mountains.jpg" alt="Hiking" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Hiking Packages</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              From gentle forest walks to challenging peak conquests, find your perfect trail.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hikingPackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={
                          pkg.difficulty === "Advanced"
                            ? "destructive"
                            : pkg.difficulty === "Intermediate"
                              ? "secondary"
                              : "default"
                        }
                      >
                        {pkg.difficulty}
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
                    <Link href={`/book?package=hiking-${pkg.id}`} className="w-full">
                      <Button className="w-full">Book This Package</Button>
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
