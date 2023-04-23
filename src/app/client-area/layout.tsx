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
          <div className='flex flex-col flex-1 bg-layout'>
              <Header/>
              <div className='overflow-y-auto flex-1 p-lg'>
                  {children}
              </div>
          </div>
      </>
  );
}