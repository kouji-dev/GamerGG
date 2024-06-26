import {FC, Fragment} from "react";
import {Typography} from "@/ui/Typography";
import {KeyboardArrowRight} from "@/ui/icons/keyboardArrowRight";

export type BreadcrumbsProps = {
    items?: string[];
}
export const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
    const {
        items
    } = props;
    return (
        <div className='flex'>
            {items?.map((path) => (
                <Fragment key={path}>
                    <KeyboardArrowRight/>
                    <Typography variant='breadcrumbs' transform='capitalize'>{path}</Typography>
                </Fragment>
            ))}
        </div>
    )
}