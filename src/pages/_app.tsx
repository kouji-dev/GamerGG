import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import "../../public/globals.css";
import {Inter} from "next/font/google";

const inter = Inter({
    variable: "--font-base",
    subsets: ["latin"],
    display: "swap",
});

export type AppWithLayoutProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout?: (C: ReactElement) => ReactNode;
  };
  pageProps: {
    session?: Session | null;
  } & AppProps["pageProps"];
};

export default function App({
  Component,
  pageProps: { session, ...props },
}: AppWithLayoutProps) {
  return (
    <main className={`relative bg-black w-screen h-screen text-floral overflow-hidden flex relative ${inter.variable}`}>
        <SessionProvider session={session}>
            {Component.getLayout ? (
                Component.getLayout(<Component {...props} />)
            ) : (
                <Component {...props} />
            )}
        </SessionProvider>
    </main>
  );
}
