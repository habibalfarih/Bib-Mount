import Link from "next/link"
import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-bold text-primary"
            >
              <Image
                src="/bibmount.png"
                alt="BibMount Explorer"
                width={80}
                height={42}
                className="transition-transform hover:scale-105"
              />
              <span>BibMount Explorer</span>
            </Link>

            <p className="text-sm text-muted-foreground">
              Your ultimate outdoor adventure companion. Explore, book, and gear up for your next journey into the wild.
            </p>
          </div>

          {/* Activities */}
          <div>
            <h3 className="font-semibold mb-4">Activities</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/hiking" className="hover:text-primary transition-colors">
                  Hiking Packages
                </Link>
              </li>
              <li>
                <Link href="/camping" className="hover:text-primary transition-colors">
                  Camping Packages
                </Link>
              </li>
              <li>
                <Link href="/adventure" className="hover:text-primary transition-colors">
                  Eco Adventures
                </Link>
              </li>
              <li>
                <Link href="/teambuilding" className="hover:text-primary transition-colors">
                  Team Building
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/guides" className="hover:text-primary transition-colors">
                  Trail Guides
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-primary transition-colors">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link href="/buy" className="hover:text-primary transition-colors">
                  Buy Gear
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-primary transition-colors">
                  Sell Gear
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/6282125096778"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/bibmount_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} BibMount Explorer. All rights reserved. Built for adventure enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  )
}
