import {FC, PropsWithChildren} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import clsx from "clsx";

export type CardProps = {} & CommonUiComponentProps

export const Card: FC<PropsWithChildren<CardProps>> = (props) => {
    const {
        className,
        children
    } = props

    const cls = clsx(
        'bg-layout-200 p-4 rounded-md overflow-hidden',
        className
    )
    return (
        <div className={cls}>
            {children}
        </div>
    )
}

export const CardHeader: FC<PropsWithChildren<CardProps>> = (props) => {
    const {
        className,
        children
    } = props

    const cls = clsx(
        'flex justify-between items-center',
        className
    )
    return (
        <div className={cls}>
            {children}
        </div>
    )
}