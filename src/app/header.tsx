"use client"
import {FC} from "react";
import Link from "next/link";
import {Button, Typography} from "@/ui";
import {Badge} from "@/ui/Badge";

export const Header: FC<{}> = () => {
    return (
        <div className='flex items-center'>
            <NavBar/>
            <LoginBar/>
        </div>
    )
}

const menuItems = [
    {route: '/boosting', label: <Typography variant='body' transform='uppercase'>Boosting</Typography>},
    {route: '/coaching', label: <Typography variant='body' transform='uppercase'>Coaching</Typography>},
    {route: '/packages', label: <Typography variant='body' transform='uppercase'>Packages</Typography>},
    {route: '/jobs', label: <Badge label='we are hiring!'><Typography variant='body' transform='uppercase'>Jobs</Typography></Badge>},
]

const NavBar = () => {
    return (
        <nav className='flex-auto flex justify-center'>
            <ul className='flex gap-[50px] py-6'>
                {menuItems.map(({route, label}, i) => <li key={i}>{<Link href={route}>{label}</Link>}</li>)}
            </ul>
        </nav>
    )
}

const LoginBar = () => {
    return (
        <div className='w-[200px] flex justify-center'>
            <Link href='/client-area'><Button label='Login' size='medium'/></Link>
        </div>
    )
}