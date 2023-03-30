import {Card} from "@/ui/Card";
import {Button, Typography} from "@/ui";
import Image from "next/image";

export const DiscordServer = () => {
    return (
        <Card className='w-full h-[160px] rounded flex flex-col gap-[25px] justify-center items-center bg-discord-pattern bg-social-discord relative overflow-hidden'>
            <Image alt='Discord Server' src='/discord-server.jpeg' fill objectFit='cover' priority className='opacity-5'></Image>
            <div className='flex flex-col gap-[5px] justify-center items-center bg-transparent'>
                <Typography variant='h4' weight='black'>Join Our discord Server</Typography>
                <Typography variant='h6' weight='bold'>Amazing community, weekly giveaways and more!</Typography>
            </div>
            <Button className='z-0' variant='default' size='medium' label='join us'></Button>
        </Card>
    )
}