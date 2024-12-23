import '@/src/app/globals.css'
import { Inter } from 'next/font/google'

import { ReactLenis } from '@/src/utils/lenis'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Daniel's Portfolio",
  description: 'Full-stack developer and 3D designer',
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