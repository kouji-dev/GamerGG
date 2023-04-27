import {ReactNode} from "react";
import {Inter} from "next/font/google";
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
        <title>Gaming GG</title>
      </head>
      <body
        className={`relative bg-black w-screen h-screen text-floral overflow-hidden flex ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
