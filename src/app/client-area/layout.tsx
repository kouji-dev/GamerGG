"use client";
import { ReactNode } from "react";
import { Sidebar } from "@/app/client-area/sidebar";
import { Header } from "@/app/client-area/header";
import { SessionProvider } from "next-auth/react";

export default function ClientAreaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 bg-layout">
        <SessionProvider>
          <Header />
        </SessionProvider>
        <div className="overflow-y-auto flex-1 p-lg">{children}</div>
      </div>
    </>
  );
}
