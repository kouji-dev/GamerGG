import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

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