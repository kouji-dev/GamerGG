"use client";
import {cloneElement, SVGProps} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import clsx from "clsx";

export type SvgIconProps = {
    height?: number;
    width?: number;
    disabled?: boolean
} & CommonUiComponentProps & SVGProps<any>

export const createSvgIcon = (Component: any) => (props: SvgIconProps) => {
    const {
        className,
        disabled,
        ...rest
    } = props;
    const cls = clsx(
        'text-red cursor-pointer',
        {
            'text-metal': disabled
        },
        className,
    )

    return cloneElement(
        Component,
        {
            className: cls,
            ...rest
        }
    )
}

