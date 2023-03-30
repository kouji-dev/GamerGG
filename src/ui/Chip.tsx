import {FC, PropsWithChildren} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import clsx from "clsx";

export type ChipSizes = 'small' | 'medium' | 'large';

export type ChipProps = {
    label: string;
    size?: ChipSizes
} & CommonUiComponentProps

export const Chip: FC<PropsWithChildren<ChipProps>> = (props) => {
    const {
        className,
        label = 'chip',
        size = 'small'
    } = props;

    const rootCls = 'w-fit h-fit rounded-xs flex justify-center items-center font-bold cursor-pointer';

    const cls = clsx(
        rootCls,
        {
            ['px-[12px] py-[6px] text-btn-large uppercase']: size === 'large',
            ['px-[10px] py-[5px] text-btn-medium uppercase']: size === 'medium',
            ['px-[6px] py-[3px] text-btn-small uppercase']: size === 'small',
        },
        className
    )

    return (
        <div className={cls}>
            {label}
        </div>
    )
}