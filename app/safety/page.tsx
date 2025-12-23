import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, AlertTriangle, Heart, Phone, Sun, Droplets } from "lucide-react"

export default function SafetyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-br from-destructive/80 to-accent">
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Safety Tips</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Your safety is our priority. Essential guidelines for outdoor adventures.
            </p>
          </div>
        </section>

        {/* Safety Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Emergency Section */}
            <Card className="mb-8 border-destructive bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-destructive">
                  <AlertTriangle className="h-6 w-6" />
                  Emergency Contacts
                </CardTitle>
                <CardDescription>Save these numbers before your trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <strong>Emergency Services (Malaysia):</strong> 999
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <strong>BibMount Emergency Line:</strong> +60 12-345 6789
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Always inform someone of your hiking plans, including expected return time and trail location.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before You Go */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Before You Go
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2">Check the Weather</h4>
                    <p className="text-muted-foreground">
                      Monitor forecasts and avoid hiking during storms or extreme weather conditions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Know Your Limits</h4>
                    <p className="text-muted-foreground">
                      Choose trails appropriate for your fitness level and experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Study the Trail</h4>
                    <p className="text-muted-foreground">
                      Review maps, difficulty ratings, and estimated duration before departure.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Inform Others</h4>
                    <p className="text-muted-foreground">Share your itinerary with friends or family members.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Essential Gear */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Essential Safety Gear
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2">First Aid Kit</h4>
                    <p className="text-muted-foreground">
                      Include bandages, antiseptic, pain relievers, and personal medications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Navigation Tools</h4>
                    <p className="text-muted-foreground">
                      Bring map, compass, and GPS device or smartphone with offline maps.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Communication Device</h4>
                    <p className="text-muted-foreground">
                      Fully charged phone in waterproof case, power bank recommended.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Shelter</h4>
                    <p className="text-muted-foreground">
                      Emergency blanket or lightweight tarp for unexpected situations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* On the Trail */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-primary" />
                    On the Trail
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2">Stay Hydrated</h4>
                    <p className="text-muted-foreground">
                      Drink water regularly. Carry at least 2L per person for day hikes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Pace Yourself</h4>
                    <p className="text-muted-foreground">
                      Take regular breaks. Listen to your body and don't push too hard.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Stay on Marked Trails</h4>
                    <p className="text-muted-foreground">Prevents getting lost and protects the environment.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Respect Wildlife</h4>
                    <p className="text-muted-foreground">
                      Observe from distance, never feed animals, store food properly.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Health & Wellness */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Health & Wellness
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2">Sun Protection</h4>
                    <p className="text-muted-foreground">Apply sunscreen (SPF 30+), wear hat and sunglasses.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Prevent Dehydration</h4>
                    <p className="text-muted-foreground">
                      Drink before feeling thirsty. Signs include dizziness and dark urine.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Watch for Heat Exhaustion</h4>
                    <p className="text-muted-foreground">
                      Symptoms: excessive sweating, weakness, nausea. Rest in shade and hydrate.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Insect Protection</h4>
                    <p className="text-muted-foreground">
                      Use repellent, wear long sleeves, check for leeches and ticks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weather Safety */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Droplets className="h-6 w-6 text-primary" />
                  Weather-Related Safety
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold mb-2">Lightning Safety</h4>
                  <p className="text-muted-foreground">
                    If you hear thunder, seek shelter immediately. Avoid peaks, ridges, and tall trees. Squat low if
                    caught in the open.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Flash Floods</h4>
                  <p className="text-muted-foreground">
                    Never camp in dry riverbeds. Move to higher ground if water levels rise. Don't attempt to cross
                    swift currents.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Heavy Rain</h4>
                  <p className="text-muted-foreground">
                    Trails become slippery. Visibility decreases. Consider turning back or waiting out the storm in safe
                    shelter.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Extreme Heat</h4>
                  <p className="text-muted-foreground">
                    Start early morning. Take frequent breaks in shade. Increase water intake. Know signs of heat
                    stroke.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
