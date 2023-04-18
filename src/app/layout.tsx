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
        <body className='bg-black w-screen h-screen text-floral overflow-hidden flex relative'>
            {children}
        </body>
        </html>
    );
}