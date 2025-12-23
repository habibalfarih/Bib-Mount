import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BibMount Explorer - Adventure Awaits",
  description:
    "Your ultimate outdoor, hiking, and adventure portal. Explore trails, book experiences, and gear up for your next journey.",

  metadataBase: new URL("https://bib-mount.vercel.app"),

  icons: {
    icon: [
      {
        url: "/bibmount.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "BibMount Explorer - Adventure Awaits",
    description:
      "Explore hiking, camping, and eco adventures with BibMount Explorer.",
    url: "https://bib-mount.vercel.app",
    siteName: "BibMount Explorer",
    images: [
      {
        url: "/bibmount.png",
        width: 1200,
        height: 630,
        alt: "BibMount Explorer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BibMount Explorer - Adventure Awaits",
    description:
      "Your ultimate outdoor, hiking, and adventure portal.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
