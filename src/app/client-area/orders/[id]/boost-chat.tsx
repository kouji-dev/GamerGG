import {FC} from "react";
import {Card, CardHeader} from "@/ui/Card";
import {Button, Typography} from "@/ui";
import {CardGift, Person, Send} from "@/ui/icons";
import {Input} from "@/ui/Input";

type BoostChatProps = {}

export const BoostChat: FC<BoostChatProps> = (props) => {

    return (
        <Card className='flex-auto flex flex-col justify-between !p-0'>
            <CardHeader className='bg-filter-200 -m-2 p-8 flex justify-between'>
                <Typography variant='h6' weight='bold'>Boost Chat</Typography>
                <div className='flex items-center gap-sm'>
                    <Person/>
                    <CardGift/>
                </div>
            </CardHeader>
            <div className=' min-h-[300px]'>

            </div>
            <div className='bg-filter-200 min-h-[70px] flex justify-between items-center gap-md p-md'>
                <Input className='!bg-filter-200 flex-auto' placeholder='Type something'/>
                <Button size='medium' leftIcon={<Send className='!text-floral'/>} label='send'/>
            </div>
        </Card>
    )
}