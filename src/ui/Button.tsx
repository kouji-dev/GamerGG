import {FC, ReactNode} from "react";
import clsx from "clsx";

export type ButtonVariants = 'primary' | 'secondary' | 'default';
export type ButtonSizes = 'small' | 'medium' | 'large';

type ButtonProps = {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    label?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        variant = 'primary',
        size = 'small',
        label = 'button',
        leftIcon,
        rightIcon
    } = props;

    const rootCls = 'flex w-fit rounded-xxl font-base font-bold text-floral uppercase'

    const className = clsx(
        rootCls,
        {
            ['p-btn-small text-btn-small']: size === 'small',
            ['p-btn-medium text-btn-medium']: size === 'medium',
            ['p-btn-large text-btn-large']: size === 'large',
            ['bg-red-blue shadow-base']: variant === 'primary',
        }
    )
    return (
        <button className={className}>{label}</button>
    )
}