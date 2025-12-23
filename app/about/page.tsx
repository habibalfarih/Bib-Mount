import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mountain, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/eco-adventure-nature-expedition.jpg" alt="About us" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About BibMount Explorer</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">Connecting people with nature since 2020</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                BibMount Explorer was born from a simple belief: everyone deserves to experience the transformative
                power of nature. What started as a small group of outdoor enthusiasts organizing weekend hikes has grown
                into Malaysia's premier outdoor adventure platform.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We specialize in creating memorable outdoor experiences that are safe, sustainable, and accessible to
                adventurers of all skill levels. From beginner-friendly forest walks to challenging multi-day
                expeditions, we're committed to helping you discover your passion for the great outdoors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of certified guides, outdoor educators, and conservation advocates work tirelessly to ensure
                every adventure is not just exciting, but also responsible and environmentally conscious.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <Mountain className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Adventure</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground leading-relaxed">
                  We believe adventure is essential for growth, discovery, and living life to its fullest.
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground leading-relaxed">
                  Building a supportive community of outdoor enthusiasts who inspire and encourage each other.
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Safety</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground leading-relaxed">
                  Your safety is our top priority. We maintain the highest standards in all our operations.
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Sustainability</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground leading-relaxed">
                  Protecting and preserving nature for future generations through responsible tourism.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Adventures Organized</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3,000+</div>
                <div className="text-lg opacity-90">Happy Adventurers</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Trails Explored</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4.9</div>
                <div className="text-lg opacity-90">Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
