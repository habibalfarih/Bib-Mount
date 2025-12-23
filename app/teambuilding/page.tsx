import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Target, Trophy, Heart, Zap, Shield } from "lucide-react"

export default function TeamBuildingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/eco-adventure-nature-expedition.jpg"
              alt="Team Building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Team Building Services</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Strengthen your team through outdoor challenges and shared adventures.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Outdoor Team Building?</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Nature provides the perfect environment for teams to connect, collaborate, and grow together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Enhanced Communication</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Outdoor challenges require clear communication and active listening, strengthening team dynamics.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Trophy className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Problem Solving Skills</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Navigate real challenges together, developing creative solutions and strategic thinking.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Trust & Bonding</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Build lasting relationships and trust through shared experiences outside the office.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Programs</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/hiking-trail-adventure-mountains.jpg"
                    alt="Corporate Hiking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Corporate Hiking Expedition
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    <strong>Duration:</strong> 1-2 Days
                    <br />
                    <strong>Group Size:</strong> 10-50 participants
                    <br />
                    <strong>Price:</strong> From RM 350/person
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Guided hikes with team challenges along the trail. Includes leadership exercises, navigation tasks,
                    and summit celebration. Perfect for building endurance and teamwork.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/jungle-basecamp-wilderness-adventure.jpg"
                    alt="Survival Challenge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Survival Skills Challenge
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    <strong>Duration:</strong> 2-3 Days
                    <br />
                    <strong>Group Size:</strong> 15-40 participants
                    <br />
                    <strong>Price:</strong> From RM 550/person
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Learn essential outdoor survival skills including shelter building, fire making, and navigation.
                    Intensive program designed for maximum team cohesion.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/highland-mountains-expedition-wilderness.jpg"
                    alt="Adventure Race"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Adventure Race Competition
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    <strong>Duration:</strong> 1 Day
                    <br />
                    <strong>Group Size:</strong> 20-100 participants
                    <br />
                    <strong>Price:</strong> From RM 280/person
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    High-energy team race combining hiking, orienteering, and physical challenges. Build competitive
                    spirit while fostering collaboration.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/sunrise-mountain-peak-hiking.jpg"
                    alt="Leadership Retreat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Leadership Retreat
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    <strong>Duration:</strong> 2-3 Days
                    <br />
                    <strong>Group Size:</strong> 8-20 participants
                    <br />
                    <strong>Price:</strong> From RM 750/person
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Executive-level outdoor retreat combining camping, strategic planning sessions, and leadership
                    development activities in nature.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Team?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact us to customize a team building program that fits your organization's goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?package=teambuilding">
                <Button size="lg" variant="secondary">
                  Book Now
                </Button>
              </Link>
              <a
                href="https://wa.me/6282125096778?text=Hi!+I+want+to+inquire+about+team+building+services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
