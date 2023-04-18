import {FC, PropsWithChildren, ReactNode} from "react";
import clsx from "clsx";
import {CommonUiComponentProps} from "@/ui/common";

export type ButtonVariants = 'primary' | 'secondary' | 'default';
export type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonProps = {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    label?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
} & CommonUiComponentProps

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        variant = 'primary',
        size = 'small',
        label,
        children,
        leftIcon,
        rightIcon,
        className
    } = props;

    const rootCls = 'flex w-fit rounded-xxl font-base font-bold text-floral uppercase'

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
        <button className={cls}>
            {leftIcon}
            {children || label}
            {rightIcon}
        </button>
    )
}