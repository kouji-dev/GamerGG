import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const Copy: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_255_534)">
            <path opacity="0.3" d="M8 7L19 7V21H8L8 7Z" fill="currentColor"/>
            <path
                d="M16 1L4 1C2.9 1 2 1.9 2 3L2 17H4L4 3L16 3V1ZM19 5L8 5C6.9 5 6 5.9 6 7L6 21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8L8 7L19 7V21Z"
                fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_255_534">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)