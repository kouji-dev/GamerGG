import {ReactNode} from "react";

export default function ClientAreaOrdersLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
                />
            </head>
            {children}
        </>
    )
}