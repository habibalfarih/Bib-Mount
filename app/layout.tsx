import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BibMount Explorer - Adventure Awaits",
  description:
    "Your ultimate outdoor, hiking, and adventure portal. Explore trails, book experiences, and gear up for your next journey.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/bibmount.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
