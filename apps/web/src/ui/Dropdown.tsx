import React, {FC, PropsWithChildren, useRef, useState} from "react";
import clsx from "clsx";
import {CommonUiComponentProps} from "@/ui/common";
import {Typography} from "@/ui/Typography";
import {Portal} from "@/ui/Portal";
import {KeyboardArrowDown} from "@/ui/icons/keyboardArrowDown";
import {KeyboardArrowUp} from "@/ui/icons/keyboardArrowUp";

type DropdownVariant = "default" | "secondary";

type DropdownProps = {
  label?: string;
  variant?: DropdownVariant;
} & CommonUiComponentProps;

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = (props) => {
  const { className, children, label = "Games", variant = "default" } = props;
  const containerRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const containerRootCls =
    "w-fit rounded-[8px] bg-layout-200 text-floral px-2 h-[34px] cursor-pointer";
  const dropdownCls = "flex justify-around items-center w-full h-full gap-lg";
  const contentRootCls =
    "absolute flex flex-col rounded-[8px] bg-layout-200 text-floral p-2 shadow-md";

  const containerCls = clsx(
    containerRootCls,
    {
      "bg-purple": variant === "secondary",
    },
    className
  );

  const contentCls = clsx(contentRootCls, {
    "bg-purple": variant === "secondary",
  });

  const content = open ? (
    <div
      className={contentCls}
      style={{
        ...coords,
        minWidth: window.getComputedStyle(containerRef.current).width,
      }}
    >
      {children}
    </div>
  ) : null;
  const arrow = open ? (
    <KeyboardArrowUp className="!text-floral" />
  ) : (
    <KeyboardArrowDown className="!text-floral" />
  );

  const onOpen = (event: any) => {
    const rect = containerRef.current!.getBoundingClientRect();
    setCoords({
      left: rect.x,
      top: rect.y + window.scrollY + 34 + 5,
    });
    setOpen((a) => !a);
  };

  const onClickOutside = () => {
    setOpen(false);
  };

  return (
    <div className={containerCls} ref={containerRef}>
      <div className={dropdownCls} onClick={onOpen}>
        <Typography>{label}</Typography>
        {arrow}
      </div>
      <Portal wrapperId="client-area-portals" onClickOutside={onClickOutside}>
        {content}
      </Portal>
    </div>
  );
};

type DropDownItemProps = {} & CommonUiComponentProps;
export const DropDownItem: FC<PropsWithChildren<DropDownItemProps>> = (
  props
) => {
  const { className, children } = props;

  const rootCls = "cursor-pointer hover:";

  const containerCls = clsx(rootCls, className);
  return <div className={containerCls}>{children}</div>;
};
