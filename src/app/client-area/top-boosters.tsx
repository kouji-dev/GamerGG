import {Card, CardHeader} from "@/ui/Card";
import {Typography} from "@/ui";
import {Group} from "@/ui/icons";
import {Avatar} from "@/ui/Avatar";
import {Chip} from "@/ui/Chip";

const BOOSTERS = [
    {name: 'DUOLEVELING', rank: 1, game: 'lol', systemRank: 'legend'},
    {name: 'DUOLEVELING', rank: 2, game: 'lol', systemRank: 'legend'},
    {name: 'DUOLEVELING', rank: 3, game: 'lol', systemRank: 'legend'},
    {name: 'DUOLEVELING', rank: 4, game: 'lol', systemRank: 'legend'},
    {name: 'DUOLEVELING', rank: 5, game: 'lol', systemRank: 'legend'},
    {name: 'DUOLEVELING', rank: 6, game: 'lol', systemRank: 'legend'},
]

const getRankCls = (rank: number) => {
    switch (rank) {
        case 1:
            return 'bg-red-blue';
        case 2:
            return 'bg-blue';
        case 3:
            return 'bg-purple';
        default:
            return 'bg-black'
    }
}

export const TopBoosters = () => {
    return (
        <Card className='w-full rounded'>
            <CardHeader>
                <div>
                    <Typography variant='h6' weight='bold' transform='capitalize'breakLine>Top Boosters</Typography>
                    <Typography variant='subtitle'>Our highest performing boosters.</Typography>
                </div>
                <Group/>
            </CardHeader>
            <ul className='mt-4 flex flex-col gap-[10px]'>
                {BOOSTERS.map(({name, rank, game, systemRank}) => (
                    <li key={name} className='flex justify-between'>
                        <div className='flex justify-center items-center'>
                            <Avatar className='bg-rose mr-4'/>
                            <div className='flex flex-col'>
                                <Typography variant='btn-medium' weight='bold'>{name}</Typography>
                                <span>
                                    <Typography variant='subtitle'>{game}</Typography> - <Typography variant='subtitle'>{systemRank}</Typography>
                                </span>
                            </div>
                        </div>
                        <Chip label={`rank ${rank}`} className={getRankCls(rank)} />
                    </li>)
                )}
            </ul>
        </Card>
    )
}