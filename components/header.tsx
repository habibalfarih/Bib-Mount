"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Mountain className="h-8 w-8" />
          <span>BibMount Explorer</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Activities
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border border-border rounded-lg shadow-lg">
              <Link href="/hiking" className="block px-4 py-2 text-sm hover:bg-muted rounded-t-lg">
                Hiking Packages
              </Link>
              <Link href="/camping" className="block px-4 py-2 text-sm hover:bg-muted">
                Camping Packages
              </Link>
              <Link href="/adventure" className="block px-4 py-2 text-sm hover:bg-muted rounded-b-lg">
                Eco Adventures
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Booking
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border border-border rounded-lg shadow-lg">
              <Link href="/book" className="block px-4 py-2 text-sm hover:bg-muted rounded-t-lg">
                Book Activity
              </Link>
              <Link href="/teambuilding" className="block px-4 py-2 text-sm hover:bg-muted rounded-b-lg">
                Team Building
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
              Marketplace
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-card border border-border rounded-lg shadow-lg">
              <Link href="/buy" className="block px-4 py-2 text-sm hover:bg-muted rounded-t-lg">
                Buy Gear
              </Link>
              <Link href="/sell" className="block px-4 py-2 text-sm hover:bg-muted rounded-b-lg">
                Sell Your Gear
              </Link>
            </div>
          </div>

          <Link href="/guides" className="text-sm font-medium hover:text-primary transition-colors">
            Guides
          </Link>

          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>

          <Link href="/contact">
            <Button variant="default" size="sm" className="ml-2">
              Contact Us
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link href="/hiking" className="block py-2 text-sm hover:text-primary">
              Hiking Packages
            </Link>
            <Link href="/camping" className="block py-2 text-sm hover:text-primary">
              Camping Packages
            </Link>
            <Link href="/adventure" className="block py-2 text-sm hover:text-primary">
              Eco Adventures
            </Link>
            <Link href="/book" className="block py-2 text-sm hover:text-primary">
              Book Activity
            </Link>
            <Link href="/teambuilding" className="block py-2 text-sm hover:text-primary">
              Team Building
            </Link>
            <Link href="/buy" className="block py-2 text-sm hover:text-primary">
              Buy Gear
            </Link>
            <Link href="/sell" className="block py-2 text-sm hover:text-primary">
              Sell Your Gear
            </Link>
            <Link href="/guides" className="block py-2 text-sm hover:text-primary">
              Travel Guides
            </Link>
            <Link href="/about" className="block py-2 text-sm hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-sm hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
