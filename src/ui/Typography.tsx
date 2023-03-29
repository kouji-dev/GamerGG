import {createElement, FC, PropsWithChildren} from "react";
import clsx from "clsx";
import {CommonUiComponentProps} from "@/ui/common";

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
    | 'body'
    | 'btn-small'
    | 'btn-medium'
    | 'btn-large'
    | 'breadcrumbs';

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
    body: 'text-body',
    breadcrumbs: 'text-breadcrumbs',
    'btn-small': 'text-btn-small',
    'btn-medium': 'text-btn-medium',
    'btn-large': 'text-btn-large',
}

type TypographyWeights =
    | 'regular'
    | 'bold'
    | 'black';

const WEIGHT_TAILWIND_CLASS_MAPPER: Record<TypographyWeights, string> = {
    regular: 'font-normal',
    bold: 'font-bold',
    black: 'font-black'
}

type TypographyTransform =
    | 'default'
    | 'uppercase'
    | 'lowercase'
    | 'capitalize';

const TRANSFORM_TAILWIND_CLASS_MAPPER: Record<TypographyTransform, string> = {
    default: 'normal-case',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize'
}

type TypographyProps = {
    variant?: TypographyVariants;
    weight?: TypographyWeights;
    transform?: TypographyTransform;
    disabled?: boolean
    breakLine?: boolean
} & CommonUiComponentProps

export const Typography: FC<PropsWithChildren<TypographyProps>> = (props) => {
    const {
        children,
        variant = 'body',
        weight = 'regular',
        transform = 'default',
        disabled = false,
        breakLine = false,
        className
    } = props;

    const cls = clsx(
        'font-base',
        TEXT_TAILWIND_CLASS_MAPPER[variant],
        WEIGHT_TAILWIND_CLASS_MAPPER[weight],
        TRANSFORM_TAILWIND_CLASS_MAPPER[transform],
        {
            ['block']: ['h', 'p'].some((s) => variant.includes(s)) || breakLine,
            ['tracking-wide']: variant === 'breadcrumbs',
            ['text-gray-400 pointer-events-none select-none']: disabled,
        },
        className
    );

    let container;

    switch (variant) {
        case 'paragraph':
            container = 'p';
            break;
        default:
            container = 'span'
    }

    return createElement(
        container,
        {className: cls},
        children
    )
}