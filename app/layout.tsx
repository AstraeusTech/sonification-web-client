import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonification',
  description: 'Sonification web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
