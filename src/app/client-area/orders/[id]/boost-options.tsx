import {FC} from "react";
import {Card, CardHeader} from "@/ui/Card";
import {Typography} from "@/ui";

type BoostOptionsProps = {}

export const BoostOptions: FC<BoostOptionsProps> = (props) => {

    return (
        <Card>
            <CardHeader>
                <Typography variant='h5' weight='bold'>Boost Options</Typography>
            </CardHeader>
        </Card>
    )
}