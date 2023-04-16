import {Inter} from 'next/font/google';
import {ReactNode} from "react";
import {Sidebar} from "@/app/sidebar";
import {Header} from "@/app/header";
import {PromoBanner} from "@/app/promo-banner";
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
            <Sidebar/>
            <div className='flex flex-col flex-1 relative'>
                <Header/>
                <PromoBanner/>
                <div className='overflow-y-auto flex-1'>
                    {children}
                </div>
            </div>
        </body>
        </html>
    );
}