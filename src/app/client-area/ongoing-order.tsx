import {Card, CardHeader} from "@/ui/Card";
import {Button, Typography} from "@/ui";
import {Groups} from "@/ui/icons";

export const OngoingOrder = () => {
    return (
        <Card className='w-full h-[160px] rounded flex flex-col gap-[25px] justify-center items-center'>
            <div className='flex flex-col gap-[5px] justify-center items-center'>
                <Typography variant='h5' weight='black'>No on-going orders</Typography>
                <Typography variant='subtitle' weight='bold'>Get yourself a new boost and skip the elo hell.</Typography>
            </div>
            <Button variant='primary' size='medium' label='get boosting'></Button>
        </Card>
    )
}