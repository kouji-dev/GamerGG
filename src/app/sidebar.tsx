"use client";
import {FC} from "react";
import {Discord, Facebook, Instagram, Menu, Support} from "@/ui/icons";
import Link from "next/link";

export const Sidebar: FC<{}> = () => {
    return (
    <div className='pr-0.5 bg-red-blue shadow-lg h-full'>
        <div className='h-full px-3 py-8 flex flex-col justify-between items-center bg-black shadow'>
            <Menu />
            <SocialLinks/>
            <Link href='/support'><Support/></Link>
        </div>
    </div>
    )
}

const SocialLinks = () => {

    return (
        <div className='flex flex-col gap-lg px-2.5 py-1'>
            <Link href='/support'><Facebook/></Link>
            <Link href='/instagram'><Instagram/></Link>
            <Link href='/discord'><Discord/></Link>
        </div>
    )
}