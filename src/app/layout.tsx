import "@/src/app/globals.css";
import { Inter } from "next/font/google";

import { ReactLenis } from "@/src/utils/lenis";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Zingico - Daniel Olov Mostad",
  description:
    "Hi, I'm Daniel Mostad — full-stack developer, 3D designer, and IT Developer Apprentice at Visma Flyt. Explore my skills, projects, and get in touch.",
  keywords: [
    "Daniel Olov Mostad",
    "Portfolio",
    "IT Developer Apprentice",
    "Full-stack development",
    "3D design",
    "C#",
    "ASP.NET",
    "Vue.js",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MariaDB",
    "Python",
    "Frontend development",
    "Unreal Engine",
    "Software engineering",
    "Developer",
    "Zingico"
  ],
  authors: [{ name: "Daniel Olov Mostad", email: "daniel.mostad1@gmail.com" }],
  metadataBase: new URL("https://www.zingico.com/"),
  openGraph: {
    title: "Daniel Olov Mostad",
    description:
      "Portfolio of Daniel Mostad — full-stack developer and IT Developer Apprentice at Visma Flyt, working with C#, ASP.NET, Vue.js, Next.js, and more.",
    url: "https://www.zingico.com/",
    siteName: "Daniel Olov Mostad",
    images: [
      {
        url: "/img/og.webp",
        width: 1200,
        height: 630,
        alt: "Daniel Olov Mostad - IT Developer and Designer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Olov Mostad",
    description:
      "Portfolio of Daniel Mostad — full-stack developer and IT Developer Apprentice working with C#, ASP.NET, Vue.js, Next.js, and more.",
    image: "/img/og.webp",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    android: "/android-chrome-192x192.png",
  },
  contact: {
    email: "daniel.mostad1@gmail.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={inter.className}>{children}</body>
      </ReactLenis>
    </html>
  );
}
