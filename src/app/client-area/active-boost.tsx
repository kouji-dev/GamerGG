import {Card, CardHeader} from "@/ui/Card";
import {Typography} from "@/ui";

import {Person} from "@/ui/icons/person";

export const ActiveBoost = () => {
    return (
        <Card className='w-[160px] h-[160px]'>
            <CardHeader>
                <Typography variant='subtitle' weight='black' transform='uppercase'>ALL</Typography>
                <Person />
            </CardHeader>
            <div className='flex flex-col gap-[5px] justify-center items-center mt-4'>
                <Typography variant='h3' weight='black'>876</Typography>
                <Typography variant='subtitle' weight='black'>active boost</Typography>
            </div>
        </Card>
    )
}