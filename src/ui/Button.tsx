import {forwardRef, PropsWithChildren, ReactNode} from "react";
import clsx from "clsx";
import {CommonUiComponentProps} from "@/ui/common";

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "login"
  | "ghosted";
export type ButtonSizes = "small" | "medium" | "large";

type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    label?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    full?: boolean;
  } & CommonUiComponentProps
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = "primary",
      size = "small",
      label,
      children,
      leftIcon,
      rightIcon,
      className,
      full = false,
    } = props;

    const rootCls =
      "flex items-center w-fit rounded-xxl font-base font-bold text-floral uppercase";

    const cls = clsx(
      rootCls,
      {
        ["p-btn-small text-btn-small"]: size === "small",
        ["p-btn-medium text-btn-medium"]: size === "medium",
        ["p-btn-large text-btn-large"]: size === "large",
        ["bg-red-blue shadow-base"]: variant === "primary",
        ["bg-black shadow-md"]: variant === "default",
        ["bg-green shadow"]: variant === "success",
        ["bg-orange shadow"]: variant === "warning",
        ["bg-purple shadow"]: variant === "info",
        ["bg-red shadow"]: variant === "danger",
        ["bg-filter-200 shadow"]: variant === "ghosted",
        ["shadow-complex bg-purple"]: variant === "secondary",
        ["bg-filter-200 shadow !gap-md !rounded-sm"]: variant === "login",
        ["gap-xs"]: !!leftIcon,
        ["w-full"]: full,
      },
      className
    );
    return (
      <button ref={ref} className={cls}>
        {leftIcon}
        {children || label}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
