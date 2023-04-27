import {FC} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import {Card, CardHeader} from "@/ui/Card";
import {Chip} from "@/ui/Chip";
import {getStatusCls} from "@/ui/utils/status";
import {Button, Typography} from "@/ui";
import Link from "next/link";
import {Avatar} from "@/ui/Avatar";
import {Copy} from "@/ui/icons";

type OrderCardProps = {
    id: any
} & CommonUiComponentProps
export const OrderCard: FC<OrderCardProps> = (props) => {
    const {
        id
    } = props;
    return (
        <Card className='w-[320px] h-[240px] flex flex-col justify-between rounded-md'>
            <CardHeader className='flex justify-end'>
                <Chip label='unpaid' className={getStatusCls('UNPAID')}/>
            </CardHeader>
            <div className='flex items-center gap-sm'>
                <Avatar label='LOL' size='medium' className='bg-purple'/>
                <div className='flex flex-col gap-xs'>
                    <Typography variant='h6' weight='black'>Promotion from gold</Typography>
                    <Typography variant='subtitle' weight='black' className='text-orange'>League boosting</Typography>
                    <Typography variant='table-body' className='flex items-center'>lol-121324 <Copy className='ml-sm'/></Typography>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <Typography weight='bold'>Total amount</Typography>
                <Typography weight='bold'>72.9$</Typography>
            </div>
            <div className='flex justify-between items-center'>
                <Link href={`client-area/orders/${id}/complete`}>
                    <Button label='complete' size='medium'/>
                </Link>
                <Link href={`client-area/orders/${id}`}>
                    <Button label='view' size='medium' variant='secondary'/>
                </Link>
            </div>
        </Card>
    )
}