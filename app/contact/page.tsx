import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageCircle, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions about our adventures? Want to customize a package? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                  <CardDescription>Choose your preferred way to reach us</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://wa.me/6282125096778?text=Hi!+I+have+a+question+about+BibMount+Explorer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="default" className="w-full justify-start" size="lg">
                      <MessageCircle className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-xs opacity-90">+62 82125096778</div>
                      </div>
                    </Button>
                  </a>

                  <a href="https://instagram.com/bibmount_" target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full justify-start bg-transparent" size="lg">
                      <Instagram className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="font-semibold">Instagram</div>
                        <div className="text-xs text-muted-foreground">@bibmount_</div>
                      </div>
                    </Button>
                  </a>

                  <div className="pt-4 border-t border-border space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Email</div>
                        <a href="mailto:info@bibmountexplorer.com" className="hover:text-primary">
                          info@bibmountexplorer.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Phone</div>
                        <div>+62 82125096778</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Business Hours</div>
                        <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                        <div>Sat - Sun: 10:00 AM - 4:00 PM</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground mb-1">Office</div>
                        <div>Jalan Outdoor Adventure 123,</div>
                        <div>50450 Kuala Lumpur, Malaysia</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">How do I book an activity?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Fill out our booking form or contact us directly via WhatsApp. We'll confirm availability and
                      arrange the details.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">What's your cancellation policy?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Cancellations 7+ days before: full refund. 3-6 days: 50% refund. Less than 3 days: no refund.
                      Weather cancellations: full refund.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Do you provide equipment?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Most packages include essential equipment (tents, cooking gear). Personal items like backpacks and
                      clothing are your responsibility.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Are beginners welcome?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      We have packages specifically designed for beginners. Our guides will ensure you're comfortable
                      and safe.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Can I customize a package?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Yes! Contact us to discuss your specific needs, group size, and preferences. We can create
                      tailored experiences.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
