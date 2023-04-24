import {FC} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import clsx from "clsx";

type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

export type AvatarProps = {
    label?: string;
    size?: AvatarSize;
} & CommonUiComponentProps

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        label = 'A',
        size = 'small',
    } = props;

    const cls = clsx(
        'rounded-xs bg-orange flex items-center justify-center font-bold text-h6',
        {
          'w-[50px] h-[50px]': size === 'small',
          'w-[70px] h-[70px]': size === 'medium',
          'w-[100px] h-[100px]': size === 'large',
          'w-[140px] h-[140px]': size === 'xlarge',
        },
        className
    )
    return (
        <div className={cls}>
            {label}
        </div>
    )
}