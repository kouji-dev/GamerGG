import {CommonUiComponentProps} from "@/ui/common";
import {FC} from "react";
import clsx from "clsx";

type LineSize = 'small' | 'medium' | 'large';

type LineProps = {
    size?: LineSize;
    gradient?: boolean;
} & CommonUiComponentProps;
export const Line: FC<LineProps> = (props) => {
    const {
        className,
        size = 'small',
        gradient
    } = props;

    const cls = clsx(
        {
            'bg-red': !gradient,
            'bg-red-blue': gradient,
        },
        {
            'w-10 h-[3px]': size === 'small',
            'w-20 h-[3px]': size === 'medium',
            'w-32 h-[3px]': size === 'large',
        },
        className
    );

    return (
        <div className={cls}/>
    )
}