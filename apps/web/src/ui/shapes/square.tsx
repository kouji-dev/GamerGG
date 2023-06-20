import {CommonUiComponentProps} from "@/ui/common";
import {FC} from "react";
import clsx from "clsx";

type SquareSize = 'small' | 'medium' | 'large';

type SquareProps = {
    size?: SquareSize
} & CommonUiComponentProps;
export const Square: FC<SquareProps> = (props) => {
    const {
        className,
        size = 'small'
    } = props;

    const cls = clsx(
        'bg-red',
        {
            'w-5 h-5': size === 'small',
            'w-10 h-10': size === 'medium',
            'w-20 h-20': size === 'large',
        },
        className
    );

    return (
        <div className={cls}/>
    )
}