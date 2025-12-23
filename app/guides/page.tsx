import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Book, Clock, ArrowRight } from "lucide-react"

const guides = [
  {
    id: 1,
    title: "Beginner's Guide to Hiking in Malaysia",
    excerpt:
      "Everything you need to know before hitting the trails. Learn about essential gear, trail etiquette, and safety basics.",
    readTime: "8 min read",
    category: "Getting Started",
    image: "/forest-trail-rainforest-hiking.jpg",
  },
  {
    id: 2,
    title: "Top 10 Hiking Trails in Peninsular Malaysia",
    excerpt:
      "Discover the most breathtaking trails from Perlis to Johor. Detailed information about difficulty, duration, and highlights.",
    readTime: "12 min read",
    category: "Trail Guides",
    image: "/hiking-trail-adventure-mountains.jpg",
  },
  {
    id: 3,
    title: "Essential Camping Gear Checklist",
    excerpt:
      "Never forget important items again. Comprehensive checklist for overnight camping trips in Malaysian wilderness.",
    readTime: "6 min read",
    category: "Equipment",
    image: "/camping-tent-forest-wilderness.jpg",
  },
  {
    id: 4,
    title: "How to Prepare for Your First Mountain Climb",
    excerpt: "Physical training, mental preparation, and logistics planning for conquering your first summit.",
    readTime: "10 min read",
    category: "Training",
    image: "/mountain-summit-peak-adventure.jpg",
  },
  {
    id: 5,
    title: "Wildlife Spotting Guide: Taman Negara",
    excerpt: "Learn about the incredible biodiversity of Malaysia's oldest rainforest and how to spot rare wildlife.",
    readTime: "15 min read",
    category: "Wildlife",
    image: "/tropical-rainforest-conservation-jungle-wildlife-n.jpg",
  },
  {
    id: 6,
    title: "Leave No Trace: Outdoor Ethics",
    excerpt:
      "Understand the principles of responsible outdoor recreation and how to minimize your environmental impact.",
    readTime: "7 min read",
    category: "Conservation",
    image: "/eco-adventure-sustainable-tourism-nature-rainfores.jpg",
  },
]

export default function GuidesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] flex items-center justify-center bg-gradient-to-br from-accent to-primary">
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <Book className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Travel Guides</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Expert advice and comprehensive guides for your outdoor adventures
            </p>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <Card key={guide.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-primary">{guide.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-tight">{guide.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{guide.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto group-hover:gap-2 transition-all">
                      Read Guide
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/safety">
                <Button size="lg" variant="outline">
                  View Safety Tips
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
