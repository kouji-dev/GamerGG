
import {FC, PropsWithChildren} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import clsx from "clsx";


export type BadgeProps = {
    label: string;
} & CommonUiComponentProps

export const Badge: FC<PropsWithChildren<BadgeProps>> = (props) => {
    const {
        className,
        label = 'Badge',
        children
    } = props;

    const badgeContainerCls = clsx(
        'relative',
        {

        },
        className
    )

    const badgeLabelCls = clsx(
        'absolute -top-2 -right-8 text-caption w-fit bg-red rounded p-0.5',
        className
    )

    return (
        <div className={badgeContainerCls}>
            <span className={badgeLabelCls}>{label}</span>
            {children}
        </div>
    )
}