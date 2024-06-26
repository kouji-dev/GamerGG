import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const Send: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_448_265)">
            <path opacity="0.3"
                  d="M4 8.25003L11.51 9.25003L4.01 6.03003L4 8.25003ZM4.01 17.97L11.51 14.75L4 15.75L4.01 17.97Z"
                  fill="currentColor"/>
            <path
                d="M2.01 3L2 10L17 12L2 14L2.01 21L23 12L2.01 3ZM4 8.25V6.03L11.51 9.25L4 8.25ZM4.01 17.97V15.75L11.52 14.75L4.01 17.97Z"
                fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_448_265">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)