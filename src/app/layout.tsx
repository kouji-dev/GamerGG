import { ReactNode } from "react";
import { Inter } from "next/font/google";
import '../../public/globals.css'

const inter = Inter({
  variable: "--font-base",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
        />
        <title>Gaming GG</title>
      </head>
      <body
        className={`relative bg-black w-screen h-screen text-floral overflow-hidden flex relative ${inter.variable}`}
      >
      {children}
      </body>
    </html>
  );
}
