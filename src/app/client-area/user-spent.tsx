import {Card, CardHeader} from "@/ui/Card";
import {Typography} from "@/ui";

import {Groups} from "@/ui/icons/groups";

export const UserSpent = () => {
    return (
        <Card className='w-[160px] h-[160px] rounded'>
            <CardHeader>
                <Typography variant='subtitle' weight='black' transform='uppercase'>Yours</Typography>
                <Groups />
            </CardHeader>
            <div className='flex flex-col gap-[5px] justify-center items-center mt-4'>
                <Typography variant='h3' weight='black'>14,5 <span className='text-transparent bg-red-blue bg-clip-text'>$</span></Typography>
                <Typography variant='subtitle' weight='black'>spent</Typography>
            </div>
        </Card>
    )
}