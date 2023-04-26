import {ReactNode} from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-black w-screen h-screen text-floral overflow-hidden flex relative">
      {children}
    </div>
  );
}