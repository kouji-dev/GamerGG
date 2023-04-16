import {Inter} from 'next/font/google';
import {ReactNode} from "react";
import {Sidebar} from "@/app/client-area/sidebar";
import {Header} from "@/app/client-area/header";

export const metadata = {
  title: 'Client Area',
  description: 'Dashboard panel',
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    variable: '--font-base',
    subsets: ['latin'],
    display: 'swap'
});
export default function ClientAreaLayout({ children }: {
  children: ReactNode;
}) {
  return (
      <html lang="en" className={inter.variable}>
        <body className='bg-metal w-screen h-screen text-floral overflow-hidden flex relative'>
            <Sidebar/>
            <div className='flex flex-col flex-1 bg-metal2'>
                <Header/>
                <div className='overflow-y-auto flex-1 py-9 px-8'>
                    {children}
                </div>
            </div>
        </body>
      </html>
  );
}