import {Inter} from 'next/font/google';
import {ReactNode} from "react";
import {Sidebar} from "@/app/client-area/sidebar";
import {Header} from "@/app/client-area/header";

export const metadata = {
  title: 'Client Area',
  description: 'Dashboard panel',
}
export default function ClientAreaLayout({ children }: {
  children: ReactNode;
}) {
  return (
      <>
          <Sidebar/>
          <div className='flex flex-col flex-1 bg-metal2'>
              <Header/>
              <div className='overflow-y-auto flex-1 py-9 px-8'>
                  {children}
              </div>
          </div>
      </>
  );
}