import {FC, PropsWithChildren} from "react";
import clsx from "clsx";

type TypographyVariants =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'caption'
    | 'paragraph'
    | 'body';

const TEXT_TAILWIND_CLASS_MAPPER: Record<TypographyVariants, string> = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
    h6: 'text-h6',
    subtitle: 'text-subtitle',
    caption: 'text-caption',
    paragraph: 'text-paragraph',
    body: 'text-body'
}

type TypographyProps = {
    variant?: TypographyVariants
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = (props) => {
    const {
        children,
        variant = 'body'
    } = props;

    const className = clsx('font-base', TEXT_TAILWIND_CLASS_MAPPER[variant])

    return (
        <span className={className}>{children}</span>
    )
}