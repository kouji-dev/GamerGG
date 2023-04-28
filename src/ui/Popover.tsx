import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import clsx from "clsx";
import {CommonUiComponentProps} from "@/ui/common";
import {Modifier, usePopper} from "react-popper";
import * as PopperJS from "@popperjs/core";
import {useClickOutside} from "@/ui/utils/use-click-outside";
import {TooltipArrowUp} from "@/ui/icons/tooltipArrowUp";

type PopoverVariant = "default" | "secondary";

type PopoverProps = {
  variant?: PopoverVariant;
  anchorEl?: any;
  wrapperId?: string;
  open?: boolean;
  options?: Omit<Partial<PopperJS.Options>, "modifiers"> & {
    createPopper?: typeof PopperJS.createPopper;
    modifiers?: ReadonlyArray<Modifier<any>>;
  };
} & CommonUiComponentProps;

export const Popover: FC<PropsWithChildren<PopoverProps>> = (props) => {
  const { children, variant = "default", anchorEl, options } = props;
  const [popperElement, setPopperElement] = useState<any>(null);
  const [arrowElement, setArrow] = useState<any>(null);
  const [show, setShow] = useState<any>(false);
  const { styles, attributes } = usePopper(anchorEl, popperElement, {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowElement,
        },
      },
      {
        name: "flip",
        enabled: true,
        options: {
          rootBoundary: "body",
        },
      },
    ],
    ...options,
  });
  useClickOutside(anchorEl, () => {
    if (show) setShow(() => false);
  });
  const toggleTooltip = () => {
    setShow((s: boolean) => !s);
  };

  useEffect(() => {
    if (!anchorEl) return;
    const element = anchorEl;
    element.addEventListener("click", () => {
      toggleTooltip();
    });
    const removeListener = () => element.removeEventListener("click", () => {});
    return removeListener();
  }, [anchorEl]);

  const contentRootCls =
    "flex flex-col rounded-xs bg-layout-200 text-floral p-2 shadow-md";
  const contentCls = clsx(contentRootCls, {
    "bg-purple": variant === "secondary",
  });
  const content = <div className={contentCls}>{children}</div>;

  return (
    <div
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      className="z-20"
    >
      {show && <TooltipArrowUp ref={setArrow} className="!text-metal" />}
      {show && content}
    </div>
  );
};
