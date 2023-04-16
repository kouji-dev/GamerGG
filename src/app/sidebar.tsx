"use client"
import {FC} from "react";
import {Typography} from "@/ui/Typography";
import {Button} from "@/ui";
import {
    Discord,
    Facebook,
    Instagram,
    DashboardTwoTone,
    PaidTwoTone,
    PeopleTwoTone,
    RequestQuoteTwoTone,
    Menu, Support
} from "@/ui/icons";
import {useSelectedLayoutSegment} from "next/navigation";
import Link from "next/link";
import {Breadcrumbs} from "@/ui/Breadcrumbs";
import {Avatar} from "@/ui/Avatar";
export const Sidebar: FC<{}> = () => {
    return (
    <div className='pr-0.5 bg-red-blue shadow-lg h-full'>
        <div className='h-full px-3 py-8 flex flex-col justify-between items-center bg-black shadow'>
            <Menu />
            <SocialLinks/>
            <Support/>
        </div>
    </div>
    )
}

const SocialLinks = () => {

    return (
        <div className='flex flex-col gap-[30px] px-2.5 py-1'>
            <Facebook/>
            <Instagram/>
            <Discord/>
        </div>
    )
}