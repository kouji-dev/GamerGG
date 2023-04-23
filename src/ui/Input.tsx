import {FC, InputHTMLAttributes, ReactNode} from "react";
import clsx from "clsx";
import {CommonUiComponentProps} from "@/ui/common";

type InputVariant = 'default';

type InputProps = {
    variant?: InputVariant,
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
} & CommonUiComponentProps & InputHTMLAttributes<any>

export const Input: FC<InputProps> = (props) => {
    const {
        leftIcon,
        rightIcon,
        className,
        variant = 'default',
        ...rest
    } = props;

    const containerRootCls = 'flex w-fit rounded-[8px] bg-layout-200 text-floral items-center px-2'

    const containerCls = clsx(
        containerRootCls,
        className
    )

    const inputRootCls = 'bg-layout-200 rounded-[8px] outline-none px-2 text-body h-[34px]'

    const inputCls = clsx(
        inputRootCls,
        className
    )
    return (
        <div className={containerCls}>
            {leftIcon}
            <input className={inputCls} {...rest} />
            {rightIcon}
        </div>
    )
}