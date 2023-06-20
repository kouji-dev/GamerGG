import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const TooltipArrowRight: FC<SvgIconProps> = createSvgIcon(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_494_310)">
            <path d="M10 17L15 12L10 7V17Z" fill="#BE4A31"/>
        </g>
        <defs>
            <clipPath id="clip0_494_310">
                <rect width="24" height="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)