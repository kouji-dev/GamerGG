import {FC} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import clsx from "clsx";

export type AvatarProps = {
    label?: string;
} & CommonUiComponentProps

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        label = 'A'
    } = props;

    const cls = clsx(
        'w-[50px] h-[50px] rounded-xs bg-orange flex items-center justify-center font-bold text-h6',
        className
    )
    return (
        <div className={cls}>
            {label}
        </div>
    )
}