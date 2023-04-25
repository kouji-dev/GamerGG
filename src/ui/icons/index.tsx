"use client"
import {cloneElement, FC, SVGProps} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import clsx from "clsx";

export type SvgIconProps = {
    height?: number;
    width?: number;
    disabled?: boolean
} & CommonUiComponentProps & SVGProps<any>

const createSvgIcon = (Component: any) => (props: SvgIconProps) => {
    const {
        className,
        disabled,
        ...rest
    } = props;
    const cls = clsx(
        'text-red cursor-pointer',
        {
            'text-metal': disabled
        },
        className,
    )

    return cloneElement(
        Component,
        {
            className: cls,
            ...rest
        }
    )
}

export const Facebook: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.525 8.99994H14V6.99994C14 5.96794 14.084 5.31794 15.563 5.31794H17.431V2.13794C16.522 2.04394 15.608 1.99794 14.693 1.99994C11.98 1.99994 10 3.65694 10 6.69894V8.99994H7V12.9999L10 12.9989V21.9999H14V12.9969L17.066 12.9959L17.525 8.99994Z" fill="currentColor"/>
    </svg>
)
export const Instagram: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3C5.243 3 3 5.243 3 8V16C3 18.757 5.243 21 8 21H16C18.757 21 21 18.757 21 16V8C21 5.243 18.757 3 16 3H8ZM8 5H16C17.654 5 19 6.346 19 8V16C19 17.654 17.654 19 16 19H8C6.346 19 5 17.654 5 16V8C5 6.346 6.346 5 8 5ZM17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9Z" fill="currentColor"/>
    </svg>
)

export const Discord: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.23633 3.38862C7.91849 3.3507 7.5923 3.38971 7.28516 3.50776C6.36623 3.8593 5.16802 4.40809 4.12109 5.25385L4.09375 5.27534L4.06836 5.29682C3.60387 5.72741 3.34881 6.24391 3.02344 6.95112C2.69807 7.65834 2.37002 8.53108 2.07227 9.51362C1.47675 11.4787 1 13.8702 1 16.164C1 16.404 1.06291 16.6536 1.1875 16.873C1.99369 18.2961 3.38757 19.0891 4.62891 19.5644C5.86014 20.0358 6.90378 20.1956 7.5 20.2167C7.51943 20.2174 7.56864 20.2246 7.57031 20.2246C7.9779 20.2246 8.50727 20.0745 8.80469 19.5117L9.72656 17.7675C11.253 18.0348 12.6982 18.031 14.2656 17.7519L15.1934 19.5078C15.4917 20.0769 16.026 20.2226 16.4297 20.2226C16.4312 20.2226 16.4775 20.2173 16.4941 20.2167C17.0904 20.1962 18.1373 20.035 19.3711 19.5624C20.6109 19.0876 22.0024 18.2965 22.8086 16.8769C22.9372 16.6537 23 16.4029 23 16.164C23 13.8702 22.5224 11.4775 21.9238 9.50971C21.6246 8.5258 21.2956 7.64967 20.9668 6.9394C20.638 6.22913 20.3733 5.70778 19.9082 5.27729L19.8828 5.25581L19.8574 5.23432C18.8215 4.39683 17.629 3.85428 16.7129 3.50581C16.1002 3.27232 15.4092 3.35529 14.8672 3.72846C14.4486 4.0163 14.3068 4.5143 14.1973 4.99995H9.80273C9.69282 4.51473 9.55186 4.01627 9.13477 3.72846C8.86364 3.54138 8.55416 3.42654 8.23633 3.38862ZM8 5.37495C8 6.26101 8.73894 6.99995 9.625 6.99995H14.373C15.2579 6.99995 15.9989 6.2596 16 5.37495H16.002C16.7883 5.67408 17.7963 6.15787 18.5625 6.76753C18.5802 6.78946 18.8775 7.18977 19.1504 7.77925C19.4292 8.38154 19.7338 9.18441 20.0098 10.0917C20.5461 11.8551 20.9488 14.0263 20.9727 15.9921C20.4907 16.7431 19.6026 17.3328 18.6562 17.6953C17.8044 18.0215 17.0977 18.1061 16.7363 18.1464L16.2734 17.2695C16.6167 17.1688 16.9576 17.0699 17.3203 16.9472C17.4468 16.9068 17.5639 16.8417 17.665 16.7555C17.766 16.6694 17.8488 16.564 17.9087 16.4455C17.9686 16.327 18.0042 16.1978 18.0136 16.0653C18.023 15.9329 18.006 15.7999 17.9635 15.6742C17.9209 15.5484 17.8538 15.4324 17.766 15.3328C17.6781 15.2333 17.5713 15.1522 17.4518 15.0944C17.3323 15.0365 17.2025 15.003 17.07 14.9959C16.9374 14.9887 16.8047 15.008 16.6797 15.0527C12.8496 16.3478 10.9651 16.3492 7.33398 15.0585C7.20863 15.0117 7.07513 14.9904 6.94141 14.996C6.70898 15.0072 6.48772 15.0991 6.31573 15.2558C6.14375 15.4126 6.03181 15.6244 5.9992 15.8548C5.96658 16.0852 6.01533 16.3198 6.13704 16.5181C6.25876 16.7164 6.44582 16.8661 6.66602 16.9414C7.02989 17.0707 7.37505 17.1762 7.7207 17.2812L7.26367 18.1464C6.90254 18.1062 6.19557 18.0214 5.34375 17.6953C4.3974 17.3329 3.50976 16.7456 3.02734 15.9941C3.05091 14.0277 3.45222 11.8561 3.98633 10.0937C4.26107 9.18711 4.56371 8.38725 4.83984 7.78706C5.10963 7.20065 5.40707 6.80133 5.41602 6.78706C6.19667 6.16644 7.21087 5.67684 8 5.37495ZM9.03906 9.99604C8.21006 9.99604 7.53906 10.8891 7.53906 11.9921C7.53906 13.0951 8.21006 13.9882 9.03906 13.9882C9.86806 13.9882 10.5391 13.0951 10.5391 11.9921C10.5211 10.8891 9.87106 9.88604 9.03906 9.99604ZM14.9961 10.0117C14.5983 10.0117 14.2167 10.2224 13.9354 10.5975C13.6541 10.9725 13.4961 11.4812 13.4961 12.0117C13.4961 12.5421 13.6541 13.0508 13.9354 13.4259C14.2167 13.801 14.5983 14.0117 14.9961 14.0117C15.3939 14.0117 15.7755 13.801 16.0568 13.4259C16.3381 13.0508 16.4961 12.5421 16.4961 12.0117C16.4961 11.4812 16.3381 10.9725 16.0568 10.5975C15.7755 10.2224 15.3939 10.0117 14.9961 10.0117Z" fill="currentColor"/>
    </svg>
)

export const DashboardTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_780)">
            <path opacity="0.3" d="M6.25 6.25H11.25V13.75H6.25V6.25ZM18.75 16.25H23.75V23.75H18.75V16.25ZM6.25 21.25H11.25V23.75H6.25V21.25ZM18.75 6.25H23.75V8.75H18.75V6.25Z" fill="currentColor"/>
            <path d="M3.75 16.25H13.75V3.75H3.75V16.25ZM6.25 6.25H11.25V13.75H6.25V6.25ZM16.25 26.25H26.25V13.75H16.25V26.25ZM18.75 16.25H23.75V23.75H18.75V16.25ZM16.25 3.75V11.25H26.25V3.75H16.25ZM23.75 8.75H18.75V6.25H23.75V8.75ZM3.75 26.25H13.75V18.75H3.75V26.25ZM6.25 21.25H11.25V23.75H6.25V21.25Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_249_780">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const PaidTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_786)">
            <path opacity="0.3" d="M16.25 5H7.5V25H22.5V11.25H16.25V5ZM20 22.5H10V20H20V22.5ZM20 15V17.5H10V15H20Z" fill="currentColor"/>
            <path d="M10 20H20V22.5H10V20ZM10 15H20V17.5H10V15ZM17.5 2.5H7.5C6.125 2.5 5 3.625 5 5V25C5 26.375 6.1125 27.5 7.4875 27.5H22.5C23.875 27.5 25 26.375 25 25V10L17.5 2.5ZM22.5 25H7.5V5H16.25V11.25H22.5V25Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_249_786">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const PeopleTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_792)">
            <path opacity="0.3" d="M11.25 12.5C12.2855 12.5 13.125 11.6605 13.125 10.625C13.125 9.58947 12.2855 8.75 11.25 8.75C10.2145 8.75 9.375 9.58947 9.375 10.625C9.375 11.6605 10.2145 12.5 11.25 12.5Z" fill="currentColor" />
            <path opacity="0.3" d="M5.42505 21.25H17.075C16.025 20.525 13.4875 19.6875 11.25 19.6875C9.01255 19.6875 6.47505 20.525 5.42505 21.25Z" fill="currentColor" />
            <path d="M11.25 15C13.6625 15 15.625 13.0375 15.625 10.625C15.625 8.2125 13.6625 6.25 11.25 6.25C8.8375 6.25 6.875 8.2125 6.875 10.625C6.875 13.0375 8.8375 15 11.25 15ZM11.25 8.75C12.2875 8.75 13.125 9.5875 13.125 10.625C13.125 11.6625 12.2875 12.5 11.25 12.5C10.2125 12.5 9.375 11.6625 9.375 10.625C9.375 9.5875 10.2125 8.75 11.25 8.75ZM11.25 17.1875C8.325 17.1875 2.5 18.65 2.5 21.5625V23.75H20V21.5625C20 18.65 14.175 17.1875 11.25 17.1875ZM5.425 21.25C6.475 20.525 9.0125 19.6875 11.25 19.6875C13.4875 19.6875 16.025 20.525 17.075 21.25H5.425ZM20.05 17.2625C21.5 18.3125 22.5 19.7125 22.5 21.5625V23.75H27.5V21.5625C27.5 19.0375 23.125 17.6 20.05 17.2625ZM18.75 15C21.1625 15 23.125 13.0375 23.125 10.625C23.125 8.2125 21.1625 6.25 18.75 6.25C18.075 6.25 17.45 6.4125 16.875 6.6875C17.6625 7.8 18.125 9.1625 18.125 10.625C18.125 12.0875 17.6625 13.45 16.875 14.5625C17.45 14.8375 18.075 15 18.75 15Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_249_792">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const RequestQuoteTwoTone: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_799)">
            <path opacity="0.3" d="M15 5C9.4875 5 5 9.4875 5 15C5 20.5125 9.4875 25 15 25C20.5125 25 25 20.5125 25 15C25 9.4875 20.5125 5 15 5ZM16.5375 21.6625V23.75H13.625V21.6375C11.75 21.25 10.1625 20.0375 10.05 17.925H12.1875C12.3 19.075 13.0875 19.975 15.0875 19.975C17.225 19.975 17.7125 18.9 17.7125 18.2375C17.7125 17.325 17.225 16.475 14.7875 15.9C12.075 15.2375 10.2125 14.125 10.2125 11.8875C10.2125 10 11.7375 8.7875 13.6125 8.375V6.25H16.5375V8.3875C18.575 8.875 19.5875 10.425 19.65 12.1H17.5125C17.4625 10.8875 16.8125 10.05 15.0875 10.05C13.45 10.05 12.4625 10.7875 12.4625 11.8375C12.4625 12.75 13.175 13.3625 15.3875 13.925C17.6 14.5 19.9625 15.45 19.9625 18.2C19.95 20.2 18.45 21.3 16.5375 21.6625Z" fill="currentColor" />
            <path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM15.3875 13.925C13.175 13.3625 12.4625 12.75 12.4625 11.8375C12.4625 10.7875 13.45 10.05 15.0875 10.05C16.8125 10.05 17.4625 10.875 17.5125 12.1H19.65C19.5875 10.425 18.5625 8.8875 16.5375 8.3875V6.25H13.625V8.3625C11.7375 8.7625 10.225 9.9875 10.225 11.875C10.225 14.1125 12.0875 15.2375 14.8 15.8875C17.2375 16.4625 17.725 17.325 17.725 18.225C17.725 18.8875 17.2375 19.9625 15.1 19.9625C13.1 19.9625 12.3125 19.0625 12.2 17.9125H10.05C10.175 20.0375 11.75 21.2375 13.625 21.625V23.75H16.55V21.6625C18.45 21.3 19.95 20.2125 19.9625 18.2C19.95 15.45 17.5875 14.5 15.3875 13.925Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="clip0_249_799">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const KeyboardArrowRight: FC<SvgIconProps> = createSvgIcon(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_770)">
            <path d="M7.15833 13.825L10.975 10L7.15833 6.175L8.33333 5L13.3333 10L8.33333 15L7.15833 13.825Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_249_770">
                <rect width="20" height="20" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export const KeyboardArrowDown: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_249_1123)">
            <path d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_249_1123">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const KeyboardArrowUp: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_335_264)">
            <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_335_264">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>

)
export const Person: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M15 12.625C16.4497 12.625 17.625 11.4497 17.625 10C17.625 8.55025 16.4497 7.375 15 7.375C13.5503 7.375 12.375 8.55025 12.375 10C12.375 11.4497 13.5503 12.625 15 12.625Z" fill="currentColor"/>
        <path opacity="0.3" d="M15 18.625C11.2875 18.625 7.375 20.45 7.375 21.25V22.625H22.625V21.25C22.625 20.45 18.7125 18.625 15 18.625Z" fill="currentColor"/>
        <path d="M15 16.25C11.6625 16.25 5 17.925 5 21.25V25H25V21.25C25 17.925 18.3375 16.25 15 16.25ZM22.625 22.625H7.375V21.25C7.375 20.45 11.2875 18.625 15 18.625C18.7125 18.625 22.625 20.45 22.625 21.25V22.625ZM15 15C17.7625 15 20 12.7625 20 10C20 7.2375 17.7625 5 15 5C12.2375 5 10 7.2375 10 10C10 12.7625 12.2375 15 15 15ZM15 7.375C16.45 7.375 17.625 8.55 17.625 10C17.625 11.45 16.45 12.625 15 12.625C13.55 12.625 12.375 11.45 12.375 10C12.375 8.55 13.55 7.375 15 7.375Z" fill="currentColor"/>
    </svg>
)
export const Groups: FC<SvgIconProps> = createSvgIcon(
    <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_295_168)">
            <g opacity="0.3">
                <path d="M10.0875 20C10.2 19.7125 10.25 19.5125 11.225 19.1375C12.4375 18.6625 13.7125 18.4375 15 18.4375C16.2875 18.4375 17.5625 18.6625 18.775 19.1375C19.7375 19.5125 19.7875 19.7125 19.9125 20H10.0875ZM15 10C15.6875 10 16.25 10.5625 16.25 11.25C16.25 11.9375 15.6875 12.5 15 12.5C14.3125 12.5 13.75 11.9375 13.75 11.25C13.75 10.5625 14.3125 10 15 10Z" fill="currentColor"/>
            </g>
            <path d="M5 16.25C6.375 16.25 7.5 15.125 7.5 13.75C7.5 12.375 6.375 11.25 5 11.25C3.625 11.25 2.5 12.375 2.5 13.75C2.5 15.125 3.625 16.25 5 16.25ZM6.4125 17.625C5.95 17.55 5.4875 17.5 5 17.5C3.7625 17.5 2.5875 17.7625 1.525 18.225C0.6 18.625 0 19.525 0 20.5375V22.5H5.625V20.4875C5.625 19.45 5.9125 18.475 6.4125 17.625ZM25 16.25C26.375 16.25 27.5 15.125 27.5 13.75C27.5 12.375 26.375 11.25 25 11.25C23.625 11.25 22.5 12.375 22.5 13.75C22.5 15.125 23.625 16.25 25 16.25ZM30 20.5375C30 19.525 29.4 18.625 28.475 18.225C27.4125 17.7625 26.2375 17.5 25 17.5C24.5125 17.5 24.05 17.55 23.5875 17.625C24.0875 18.475 24.375 19.45 24.375 20.4875V22.5H30V20.5375ZM20.3 17.0625C18.8375 16.4125 17.0375 15.9375 15 15.9375C12.9625 15.9375 11.1625 16.425 9.7 17.0625C8.35 17.6625 7.5 19.0125 7.5 20.4875V22.5H22.5V20.4875C22.5 19.0125 21.65 17.6625 20.3 17.0625ZM10.0875 20C10.2 19.7125 10.25 19.5125 11.225 19.1375C12.4375 18.6625 13.7125 18.4375 15 18.4375C16.2875 18.4375 17.5625 18.6625 18.775 19.1375C19.7375 19.5125 19.7875 19.7125 19.9125 20H10.0875ZM15 10C15.6875 10 16.25 10.5625 16.25 11.25C16.25 11.9375 15.6875 12.5 15 12.5C14.3125 12.5 13.75 11.9375 13.75 11.25C13.75 10.5625 14.3125 10 15 10ZM15 7.5C12.925 7.5 11.25 9.175 11.25 11.25C11.25 13.325 12.925 15 15 15C17.075 15 18.75 13.325 18.75 11.25C18.75 9.175 17.075 7.5 15 7.5Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_295_168">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Group: FC<SvgIconProps> = createSvgIcon(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="-0.000244141" width="34" height="34" rx="8" fill="#100C08" fillOpacity="0.34"/>
        <path opacity="0.3" d="M12.75 14.1664C13.9236 14.1664 14.875 13.215 14.875 12.0414C14.875 10.8678 13.9236 9.91638 12.75 9.91638C11.5764 9.91638 10.625 10.8678 10.625 12.0414C10.625 13.215 11.5764 14.1664 12.75 14.1664Z" fill="currentColor"/>
        <path opacity="0.3" d="M6.14832 24.0831H19.3516C18.1616 23.2614 15.2858 22.3123 12.75 22.3123C10.2141 22.3123 7.33832 23.2614 6.14832 24.0831Z" fill="currentColor"/>
        <path d="M12.75 16.9998C15.4842 16.9998 17.7084 14.7756 17.7084 12.0415C17.7084 9.3073 15.4842 7.08313 12.75 7.08313C10.0159 7.08313 7.79171 9.3073 7.79171 12.0415C7.79171 14.7756 10.0159 16.9998 12.75 16.9998ZM12.75 9.91646C13.9259 9.91646 14.875 10.8656 14.875 12.0415C14.875 13.2173 13.9259 14.1665 12.75 14.1665C11.5742 14.1665 10.625 13.2173 10.625 12.0415C10.625 10.8656 11.5742 9.91646 12.75 9.91646ZM12.75 19.479C9.43504 19.479 2.83337 21.1365 2.83337 24.4373V26.9165H22.6667V24.4373C22.6667 21.1365 16.065 19.479 12.75 19.479ZM6.14837 24.0831C7.33837 23.2615 10.2142 22.3123 12.75 22.3123C15.2859 22.3123 18.1617 23.2615 19.3517 24.0831H6.14837ZM22.7234 19.564C24.3667 20.754 25.5 22.3406 25.5 24.4373V26.9165H31.1667V24.4373C31.1667 21.5756 26.2084 19.9465 22.7234 19.564ZM21.25 16.9998C23.9842 16.9998 26.2084 14.7756 26.2084 12.0415C26.2084 9.3073 23.9842 7.08313 21.25 7.08313C20.485 7.08313 19.7767 7.2673 19.125 7.57896C20.0175 8.8398 20.5417 10.384 20.5417 12.0415C20.5417 13.699 20.0175 15.2431 19.125 16.504C19.7767 16.8156 20.485 16.9998 21.25 16.9998Z" fill="currentColor"/>
    </svg>

)
export const Menu: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_248_5134)">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_248_5134">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export const Search: FC<SvgIconProps> = createSvgIcon(
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor"/>
    </svg>
)

export const Support: FC<SvgIconProps> = createSvgIcon(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_209_39)">
            <path d="M29.75 17.3117C29.75 9.53417 23.715 4.25 17 4.25C10.3558 4.25 4.25001 9.42083 4.25001 17.3967C3.40001 17.8783 2.83334 18.785 2.83334 19.8333V22.6667C2.83334 24.225 4.10834 25.5 5.66668 25.5H7.08334V16.8583C7.08334 11.3758 11.5175 6.94167 17 6.94167C22.4825 6.94167 26.9167 11.3758 26.9167 16.8583V26.9167H15.5833V29.75H26.9167C28.475 29.75 29.75 28.475 29.75 26.9167V25.1883C30.5858 24.7492 31.1667 23.885 31.1667 22.865V19.6067C31.1667 18.615 30.5858 17.7508 29.75 17.3117Z" fill="currentColor"/>
            <path d="M12.75 19.8333C13.5324 19.8333 14.1667 19.1991 14.1667 18.4167C14.1667 17.6343 13.5324 17 12.75 17C11.9676 17 11.3333 17.6343 11.3333 18.4167C11.3333 19.1991 11.9676 19.8333 12.75 19.8333Z" fill="currentColor"/>
            <path d="M21.25 19.8333C22.0324 19.8333 22.6667 19.1991 22.6667 18.4167C22.6667 17.6343 22.0324 17 21.25 17C20.4676 17 19.8333 17.6343 19.8333 18.4167C19.8333 19.1991 20.4676 19.8333 21.25 19.8333Z" fill="currentColor"/>
            <path d="M25.5 15.6258C24.82 11.5883 21.3067 8.5 17.0708 8.5C12.7783 8.5 8.16001 12.0558 8.52834 17.6375C12.0275 16.2067 14.6625 13.09 15.4133 9.29333C17.2692 13.0192 21.08 15.5833 25.5 15.6258Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_209_39">
                <rect width="34" height="34" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Compaign: FC<SvgIconProps> = createSvgIcon(
    <svg width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_206_147)">
            <path d="M25.5 14.5833V17.4166H31.1667V14.5833H25.5ZM22.6667 23.9475C24.0267 24.9533 25.7975 26.285 27.2 27.3333C27.7667 26.5825 28.3333 25.8175 28.9 25.0666C27.4975 24.0183 25.7267 22.6866 24.3667 21.6666C23.8 22.4316 23.2333 23.1966 22.6667 23.9475ZM28.9 6.93329C28.3333 6.18246 27.7667 5.41746 27.2 4.66663C25.7975 5.71496 24.0267 7.04663 22.6667 8.06663C23.2333 8.81746 23.8 9.58246 24.3667 10.3333C25.7267 9.31329 27.4975 7.99579 28.9 6.93329ZM5.66668 11.75C4.10834 11.75 2.83334 13.025 2.83334 14.5833V17.4166C2.83334 18.975 4.10834 20.25 5.66668 20.25H7.08334V25.9166H9.91668V20.25H11.3333L18.4167 24.5V7.49996L11.3333 11.75H5.66668ZM21.9583 16C21.9583 14.1158 21.1367 12.4158 19.8333 11.2541V20.7316C21.1367 19.5841 21.9583 17.8841 21.9583 16Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_206_147">
                <rect width="34" height="34" fill="white" transform="translate(0 -1)"/>
            </clipPath>
        </defs>
    </svg>

)

export const Plus: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_358_270)">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_358_270">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export const Eye: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_429_300)">
            <path opacity="0.3" d="M11.9999 6.5C8.20993 6.5 4.82993 8.63 3.17993 12C4.82993 15.37 8.19993 17.5 11.9999 17.5C15.7999 17.5 19.1699 15.37 20.8199 12C19.1699 8.63 15.7899 6.5 11.9999 6.5ZM11.9999 16.5C9.51993 16.5 7.49993 14.48 7.49993 12C7.49993 9.52 9.51993 7.5 11.9999 7.5C14.4799 7.5 16.4999 9.52 16.4999 12C16.4999 14.48 14.4799 16.5 11.9999 16.5Z" fill="currentColor"/>
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17.5C8.21 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.79 17.5 12 17.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_429_300">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const ArrowForward: FC<SvgIconProps> = createSvgIcon(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0001 5.66663L15.0026 7.66413L22.9076 15.5833H5.66675V18.4166H22.9076L15.0026 26.3358L17.0001 28.3333L28.3334 17L17.0001 5.66663Z" fill="currentColor"/>
    </svg>
)
export const ArrowBack: FC<SvgIconProps> = createSvgIcon(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_441_260)">
            <path d="M28.3333 15.5833H11.0925L19.0116 7.66413L17 5.66663L5.66663 17L17 28.3333L18.9975 26.3358L11.0925 18.4166H28.3333V15.5833Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_441_260">
                <rect width="34" height="34" fill="white"/>
            </clipPath>
        </defs>
    </svg>

)

export const Copy: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_255_534)">
            <path opacity="0.3" d="M8 7L19 7V21H8L8 7Z" fill="currentColor"/>
            <path d="M16 1L4 1C2.9 1 2 1.9 2 3L2 17H4L4 3L16 3V1ZM19 5L8 5C6.9 5 6 5.9 6 7L6 21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8L8 7L19 7V21Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_255_534">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export const CardGift: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_397_264)">
            <path opacity="0.3" d="M4 17H20V19H4V17ZM17 10.83L15.38 12L12 7.40002L8.62 12L7 10.83L9.08 8.00002H4V14H20V8.00002H14.92L17 10.83Z" fill="currentColor"/>
            <path d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4.02L11.5 3.34C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM9 4C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4ZM20 19H4V17H20V19ZM20 14H4V8H9.08L7 10.83L8.62 12L12 7.4L15.38 12L17 10.83L14.92 8H20V14Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_397_264">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>

)
export const Send: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_448_265)">
            <path opacity="0.3" d="M4 8.25003L11.51 9.25003L4.01 6.03003L4 8.25003ZM4.01 17.97L11.51 14.75L4 15.75L4.01 17.97Z" fill="currentColor"/>
            <path d="M2.01 3L2 10L17 12L2 14L2.01 21L23 12L2.01 3ZM4 8.25V6.03L11.51 9.25L4 8.25ZM4.01 17.97V15.75L11.52 14.75L4.01 17.97Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_448_265">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Place: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_385_330)">
            <path d="M12.3334 7.30004C12.3334 9.01337 10.9334 11.16 8.22675 13.64L8.00008 13.84L7.77341 13.6334C5.06675 11.16 3.66675 9.01337 3.66675 7.30004C3.66675 4.74004 5.54675 2.83337 8.00008 2.83337C10.4534 2.83337 12.3334 4.73337 12.3334 7.30004Z" fill="currentColor" fillOpacity="0.3"/>
            <path d="M8.00008 1.83337C10.8001 1.83337 13.3334 3.98004 13.3334 7.30004C13.3334 9.51337 11.5534 12.1334 8.00008 15.1667C4.44675 12.1334 2.66675 9.51337 2.66675 7.30004C2.66675 3.98004 5.20008 1.83337 8.00008 1.83337ZM12.0001 7.30004C12.0001 4.88004 10.2334 3.16671 8.00008 3.16671C5.76675 3.16671 4.00008 4.88004 4.00008 7.30004C4.00008 8.86004 5.30008 10.9267 8.00008 13.3934C10.7001 10.9267 12.0001 8.86004 12.0001 7.30004ZM8.00008 8.50004C7.26675 8.50004 6.66675 7.90004 6.66675 7.16671C6.66675 6.43337 7.26675 5.83337 8.00008 5.83337C8.73342 5.83337 9.33342 6.43337 9.33342 7.16671C9.33342 7.90004 8.73342 8.50004 8.00008 8.50004Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_385_330">
                <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
        </defs>
    </svg>
)
export const ArrowRight: FC<SvgIconProps> = createSvgIcon(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_385_340)">
            <path d="M22.6809 15.5834H5.66675V18.4167H22.6809V22.6667L28.3334 17L22.6809 11.3334V15.5834Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_385_340">
                <rect width="34" height="34" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Star: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_459_269)">
            <path opacity="0.3" d="M8.00011 10.2666L5.49344 11.78L6.16011 8.92665L3.94678 7.00665L6.86678 6.75332L8.00011 4.06665L9.14011 6.75998L12.0601 7.01332L9.84678 8.93332L10.5134 11.7866L8.00011 10.2666Z" fill="currentColor"/>
            <path d="M14.6668 6.16004L9.8735 5.74671L8.00016 1.33337L6.12683 5.75337L1.3335 6.16004L4.9735 9.31337L3.88016 14L8.00016 11.5134L12.1202 14L11.0335 9.31337L14.6668 6.16004ZM8.00016 10.2667L5.4935 11.78L6.16016 8.92671L3.94683 7.00671L6.86683 6.75337L8.00016 4.06671L9.14016 6.76004L12.0602 7.01337L9.84683 8.93337L10.5135 11.7867L8.00016 10.2667Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_459_269">
                <rect width="16" height="16" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Label: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M10.6668 4.66663H3.3335V11.3333H10.6668L13.0335 7.99996L10.6668 4.66663Z" fill="currentColor"/>
        <path d="M11.7533 3.89337C11.5133 3.55337 11.1133 3.33337 10.6667 3.33337L3.33333 3.34004C2.6 3.34004 2 3.93337 2 4.66671V11.3334C2 12.0667 2.6 12.66 3.33333 12.66L10.6667 12.6667C11.1133 12.6667 11.5133 12.4467 11.7533 12.1067L14.6667 8.00004L11.7533 3.89337ZM10.6667 11.3334H3.33333V4.66671H10.6667L13.0333 8.00004L10.6667 11.3334Z" fill="currentColor"/>
    </svg>
)
export const Jungle: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="url(#pattern0)"/>
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_464_319" transform="scale(0.0294118)"/>
            </pattern>
            <image id="image0_464_319" width="34" height="34" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAC1ElEQVRYhe2XPVYaURTHf/cNObHL7EBcQbAxZyrJDrRQj5WkB5wdyA7CUXuw4oiF7iBajbFBVxDcgXZ+wLspGGCAwZlJtEiO/wre3Hffj/v1BnjXv6yg5effeq9JZWR6hc6p72aF6Jz6rjG9QtZ9Lyo4rtay7rlsV8/S2qaKCIAIbnBSLqaGOKn4QDetfS6tofZNHUfPgcScBy0/j9o9g/ma1n/qiHjb9S7QTZUip99E9XZls3796iChmiLsvtQJQbtSEmQVQzOL40wgCx+cM8DF2NiodE59V5DvAB9zzt+BBC0/f9X2Y1tueb1+p+iFCDtxhfv4bGuAi+rN8nr9Ls5H0PLzcRGdAfG2692+2rXLdqUROztUzgFEZS+6HNruACADmxmIdqWEsaWw3l4GAfC29msKS4/P9tdMdIwND5FiNCoPT9YH3AGknQEJjqtNoORt7cemdX6N9J0S4FpsJ2hXSsPlhVxu1AkTUREd2VjDRFqC42pNhJ3QZ6zmgnjb9a4qRwCCNH4el9dgUCdjKykO8y3IeIr2cqPQByflogh7qhzFpSQRZPDQjpyrmEZcEYtjfQgHXuRHQNhF1jSmfWUG+bJ1GN3sWmxjQKU3kfWd0eGqN9FnD0/WR8iD3k/5ygYCoOhF5GshOCkXEfkcBRymDUNzOMg6p74rwu7AB4kTNnmg6WQrTrftwMQUAbTnnGnPOQN47PVLhF007SNOiZeewV7rBK/E3cCrMK4NAFV8ifhIPidB0604RxNFHLT8vCCLWXwkgngbh4lhhUGbDj9Lrr+W1UeqS0/Rb2nsxhvG6RvOolcB8TYPmllgFC0MIbyt/bnTNDPIEMZglkHvk2wFWcwCkQkEYGWzfm1wikkwWSEAJNlkVldtv2Dpn4N8Gh3eN0sv3SVvAgLhZabmB4Cit97mwR//CYPs76wjeRuH56MCTjE53wwExt3kyPjmfdd/p9+sWzcxZX9gsgAAAABJRU5ErkJggg=="/>
        </defs>
    </svg>
)
export const Adc: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="url(#pattern1)"/>
        <defs>
            <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_464_322" transform="scale(0.0294118)"/>
            </pattern>
            <image id="image0_464_322" width="34" height="34" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAwElEQVRYhWNgGAWjAD9gRBeoiNJooIVFfxn+buhedvsCLnkmWlhKqiPo4hBsjji+Mm8BXR2CyxGMjAzx6GpZCBnWsewG1dIMLkcwMNApjRByBN0cQsgRdHMIIUfQzSHEAIKJFRvAV+iRm7gHTYiMOgQdjDoEHQwah5CVfalZ/8DAoAmRoeGQvwx/Nwy4Q4hp3lETYE2spLSsqAUwQmQgHMHAgKU7gQ5o5QiLsEkoduNNrPQICYIOoacjRsEoIAYAAKaeUewVazqsAAAAAElFTkSuQmCC"/>
        </defs>
    </svg>
)
export const Edit: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_464_436)">
            <path opacity="0.3" d="M3.3335 12.0533V12.6666H3.94683L9.98683 6.62664L9.3735 6.01331L3.3335 12.0533Z" fill="currentColor"/>
            <path d="M13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333L12.2467 2.19333C12.1133 2.06 11.9467 2 11.7733 2C11.6 2 11.4333 2.06667 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333ZM2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667L2 11.5ZM3.94667 12.6667H3.33333V12.0533L9.37333 6.01333L9.98667 6.62667L3.94667 12.6667Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_464_436">
                <rect width="16" height="16" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Ekko: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="url(#ekko)"/>
        <defs>
            <pattern id="ekko" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_464_340" transform="scale(0.00833333)"/>
            </pattern>
            <image id="image0_464_340" width="120" height="120" xlinkHref="data:image/png;base64,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"/>
        </defs>
    </svg>
)

export const Check: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_464_355)">
            <path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 6.99997L19.5902 5.58997L9.00016 16.17Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_464_355">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export const Close: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_464_370)">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_464_370">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)
export const Delete: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M5.3335 6H10.6668V12.6667H5.3335V6Z" fill="currentColor"/>
        <path d="M10.3335 2.66667L9.66683 2H6.3335L5.66683 2.66667H3.3335V4H12.6668V2.66667H10.3335ZM4.00016 12.6667C4.00016 13.4 4.60016 14 5.3335 14H10.6668C11.4002 14 12.0002 13.4 12.0002 12.6667V4.66667H4.00016V12.6667ZM5.3335 6H10.6668V12.6667H5.3335V6Z" fill="currentColor"/>
    </svg>
)

export const CreditCard: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M2.6665 8H13.3332V12H2.6665V8ZM2.6665 4H13.3332V5.33333H2.6665V4Z" fill="currentColor"/>
        <path d="M13.3335 2.66663H2.66683C1.92683 2.66663 1.34016 3.25996 1.34016 3.99996L1.3335 12C1.3335 12.74 1.92683 13.3333 2.66683 13.3333H13.3335C14.0735 13.3333 14.6668 12.74 14.6668 12V3.99996C14.6668 3.25996 14.0735 2.66663 13.3335 2.66663ZM13.3335 12H2.66683V7.99996H13.3335V12ZM13.3335 5.33329H2.66683V3.99996H13.3335V5.33329Z" fill="currentColor"/>
    </svg>
)

