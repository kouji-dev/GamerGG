"use client";
import {FC} from "react";
import {Typography} from "@/ui/Typography";
import {Button} from "@/ui";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Facebook} from "@/ui/icons/facebook";
import {Instagram} from "@/ui/icons/instagram";
import {Discord} from "@/ui/icons/discord";
import {DashboardTwoTone} from "@/ui/icons/dashboardTwoTone";
import {PaidTwoTone} from "@/ui/icons/paidTwoTone";
import {PeopleTwoTone} from "@/ui/icons/peopleTwoTone";
import {RequestQuoteTwoTone} from "@/ui/icons/requestQuoteTwoTone";

export const Sidebar: FC<{}> = () => {
    return (
        <div className='w-fit flex flex-col justify-between items-center p-4 bg-metal'>
            <Logo/>
            <NavigationMenu/>
            <OrderAgainAd/>
            <SocialLinks/>
        </div>
    )
}

const Logo = () => {

    return (<Link href='/'><div className='w-[70px] h-[70px] rounded-full bg-orange'/></Link>)
}

const routes = [
    {route: '/client-area', label: 'dashboard', icon: <DashboardTwoTone className='w-[30px]'/>},
    {route: '/client-area/orders', label: 'orders', icon: <PaidTwoTone className='w-[30px]'/>},
    {route: '/client-area/boosters', label: 'boosters', icon: <PeopleTwoTone className='w-[30px]'/>},
    {route: '/client-area/payments', label: 'payments', icon: <RequestQuoteTwoTone className='w-[30px]'/>},
]

const NavigationMenu = () => {
    const pathname = usePathname()

    const navigationMenuItemCls = 'flex gap-[20px] py-2 pl-2 pr-8 items-center justify-start'
    return (
        <nav className='w-full'>
            <ul className='flex flex-col gap-[10px]'>
                {
                    routes.map(({route, label, icon}) => (<li key={route}>
                        <Link href={`${route}`} replace={false} className={`${navigationMenuItemCls} ${pathname === route ? '' : 'text-floral/60'}`}>
                            {icon}
                            <Typography variant='body' transform='capitalize'>{label}</Typography>
                        </Link>
                    </li>))
                }
            </ul>
        </nav>
    )
}

const OrderAgainAd = () => {
    return (
        <div className='w-[250px] h-[200px] rounded-md bg-red-blue text-center flex flex-col justify-between p-5'>
            <div className='flex flex-col gap-[10px]'>
                <Typography variant='h5' weight='black'>Exclusive offers</Typography>
                <Typography className='text-start' variant='body' weight='bold'>Many discounts personalized just for you!</Typography>
            </div>
            <Button className='self-center' label='Order again' size='medium'/>
        </div>
    )
}

const SocialLinks = () => {

    return (
        <div className='flex gap-[30px] px-2.5 py-1'>
            <Facebook/>
            <Instagram/>
            <Discord/>
        </div>
    )
}