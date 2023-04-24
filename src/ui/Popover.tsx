import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import clsx from "clsx";
import {CommonUiComponentProps} from "@/ui/common";
import {Portal} from "@/ui/Portal";

type PopoverVariant = "default" | "secondary";

type PopoverProps = {
    variant?: PopoverVariant;
    anchorEl?: any,
    wrapperId?: string,
    open?: boolean,
    onClickOutside?: () => void
} & CommonUiComponentProps

export const Popover: FC<PropsWithChildren<PopoverProps>> = (props) => {
    const {
        children,
        variant = 'default',
        anchorEl,
        wrapperId= '',
        onClickOutside
    } = props;
    const [coords, setCoords] = useState({top: 0, left: 0});
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!anchorEl) return;
        const element = anchorEl.current;
        const rect = element!.getBoundingClientRect();
        setCoords({
            left: rect.x,
            top: rect.y + window.scrollY + 34 + 5
        });
        element.addEventListener('click', () => {
            setOpen((o) => !o);
        })
        return () => element.addEventListener('click', () => {
            setOpen(false)
        })
    }, [anchorEl])

    const contentRootCls = 'absolute flex flex-col rounded-[8px] bg-layout-200 text-floral p-2 shadow-md';
    const contentCls = clsx(
        contentRootCls,
        {
            'bg-purple': variant === 'secondary',
        }
    )
    const content = open ? <div className={contentCls} style={{...coords, minWidth: window.getComputedStyle(anchorEl.current).width}}>{children}</div> : null;

    const handleClickOutside = (event: MouseEvent) => {
        if (!anchorEl.current.contains(event.target)) {
            setOpen(false)
        }
    }

    if (!open) {
        return null;
    }

    return (
        <Portal wrapperId={wrapperId} onClickOutside={handleClickOutside}>
            {content}
        </Portal>
    )
}