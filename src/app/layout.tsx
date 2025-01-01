import '@/src/app/globals.css'
import { Inter } from 'next/font/google'

import { ReactLenis } from '@/src/utils/lenis'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Daniel Olov Mostad",
  description:
    'Hi, I’m Daniel Mostad, a passionate IT student with expertise in programming, development, and 3D design. Explore my skills, projects, and contact information.',
  keywords: [
    'Daniel Olov Mostad',
    'Portfolio',
    'IT student',
    'Full-stack development',
    '3D design',
    'Python',
    'Node.js',
    'PostgreSQL',
    'Frontend development',
    'Unreal Engine',
    'Graphic design',
    'Software engineering',
    'IT enthusiast',
  ],
  authors: [
    { name: 'Daniel Olov Mostad', email: 'daniel.mostad1@gmail.com' },
  ],
  openGraph: {
    title: "Daniel Olov Mostad",
    description:
      'Discover the portfolio of Daniel Mostad, an aspiring IT professional with a strong foundation in programming, database management, and 3D design.',
    url: 'https://www.danielom999.org/',
    siteName: 'Daniel Olov Mostad',
    images: [
      {
        url: '/img/og.webp',
        width: 1200,
        height: 630,
        alt: 'Daniel Olov Mostad - IT Developer and Designer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Daniel Olov Mostad",
    description:
      'Explore the projects, skills, and experience of Daniel Mostad, an IT student and aspiring developer.',
    image: '/img/og.webp',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    android: '/android-chrome-192x192.png',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  contact: {
    email: 'daniel.mostad1@gmail.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReactLenis root>
      <body className={inter.className}>{children}</body>
      </ReactLenis>
    </html>
  )
}