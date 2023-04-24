import {FC, forwardRef, PropsWithChildren, ReactNode} from "react";
import clsx from "clsx";
import {CommonUiComponentProps} from "@/ui/common";

export type ButtonVariants = 'primary' | 'secondary' | 'default';
export type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonProps = PropsWithChildren<{
    variant?: ButtonVariants;
    size?: ButtonSizes;
    label?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
} & CommonUiComponentProps>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const {
        variant = 'primary',
        size = 'small',
        label,
        children,
        leftIcon,
        rightIcon,
        className
    } = props;

    const rootCls = 'flex w-fit rounded-xxl font-base font-bold text-floral uppercase flex items-center'

    const cls = clsx(
        rootCls,
        {
            ['p-btn-small text-btn-small']: size === 'small',
            ['p-btn-medium text-btn-medium']: size === 'medium',
            ['p-btn-large text-btn-large']: size === 'large',
            ['bg-red-blue shadow-base']: variant === 'primary',
            ['bg-metal']: variant === 'default',
            ['shadow-complex bg-blue']: variant === 'secondary'
        },
        className
    )
    return (
        <button ref={ref} className={cls}>
            {leftIcon}
            {children || label}
            {rightIcon}
        </button>
    )
})

Button.displayName = 'Button'