import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mountain, Tent, Compass, ShoppingBag, Calendar, Shield, Users, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/majestic-mountain-landscape-forest-hiking-trail.jpg"
              alt="Mountain landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Adventure Awaits Beyond The Trail</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty max-w-2xl mx-auto opacity-90">
              Discover breathtaking hiking trails, immersive camping experiences, and eco-adventures that connect you
              with nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" variant="default" className="text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Adventure
                </Button>
              </Link>
              <Link href="/hiking">
                <Button size="lg" variant="secondary" className="text-lg">
                  <Mountain className="mr-2 h-5 w-5" />
                  Explore Packages
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Activities */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Outdoor Experiences</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose from our curated selection of outdoor activities designed for adventurers of all levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/mountain-hiking-adventure.png"
                    alt="Hiking"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Mountain className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Hiking Packages</CardTitle>
                  <CardDescription>
                    Explore scenic trails from beginner-friendly paths to challenging summit climbs.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="/hiking" className="w-full">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Packages
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/camping-tent-forest-wilderness.jpg"
                    alt="Camping"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Tent className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Camping Packages</CardTitle>
                  <CardDescription>
                    Immerse yourself in nature with our guided camping experiences under the stars.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="/camping" className="w-full">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Packages
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/eco-adventure-nature-expedition.jpg"
                    alt="Adventure"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Compass className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Eco Adventures</CardTitle>
                  <CardDescription>
                    Sustainable expeditions that celebrate and preserve our natural environment.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="/adventure" className="w-full">
                    <Button variant="outline" className="w-full bg-transparent">
                      View Adventures
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg">Everything you need for your outdoor journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Gear Marketplace</CardTitle>
                  <CardDescription>Buy and sell outdoor equipment</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Link href="/buy">
                    <Button variant="link">Browse Gear</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Team Building</CardTitle>
                  <CardDescription>Corporate outdoor experiences</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Link href="/teambuilding">
                    <Button variant="link">Learn More</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Trail Guides</CardTitle>
                  <CardDescription>Expert tips and trail maps</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Link href="/guides">
                    <Button variant="link">Read Guides</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Safety Tips</CardTitle>
                  <CardDescription>Stay safe on your adventures</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Link href="/safety">
                    <Button variant="link">View Tips</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of adventurers who have discovered their passion for the outdoors with BibMount Explorer.
            </p>
            <Link href="/book">
              <Button size="lg" variant="secondary" className="text-lg">
                Book Your First Adventure
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
