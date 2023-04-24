import {Inter} from 'next/font/google';
import {ReactNode} from "react";
import './globals.css'

export const metadata = {
    title: 'GamingGG',
    description: 'High quality, performance and cheap game boosting',
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    variable: '--font-base',
    subsets: ['latin'],
    display: 'swap'
});
export default function RootLayout({ children }: {
    children: ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
        <head>
            <title>GamingGG</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
            />
        </head>
        <body className='bg-black w-screen h-screen text-floral overflow-hidden flex relative'>
            {children}
        </body>
        </html>
    );
}