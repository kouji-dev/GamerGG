"use client"
import {FC} from "react";
import Link from "next/link";
import {Button, Typography} from "@/ui";

export const Header: FC<{}> = () => {
    return (
        <div className='flex items-center'>
            <NavBar/>
            <LoginBar/>
        </div>
    )
}

const menuItems = [
    {route: '/boosting', label: 'Boosting'},
    {route: '/coaching', label: 'Coaching'},
    {route: '/packages', label: 'Packages'},
]

const NavBar = () => {
    return (
        <nav className='flex-auto flex justify-center'>
            <ul className='flex gap-[50px] py-6'>
                {menuItems.map(({route, label}, i) => <li key={i}>{<Link href={route}><Typography variant='body' transform='uppercase'>{label}</Typography></Link>}</li>)}
            </ul>
        </nav>
    )
}

const LoginBar = () => {
    return (
        <div className='w-[200px] flex justify-center'>
            <Button label='Login' size='medium'/>
        </div>
    )
}