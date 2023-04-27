import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const ArrowBack: FC<SvgIconProps> = createSvgIcon(
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_441_260)">
            <path
                d="M28.3333 15.5833H11.0925L19.0116 7.66413L17 5.66663L5.66663 17L17 28.3333L18.9975 26.3358L11.0925 18.4166H28.3333V15.5833Z"
                fill="currentColor"/>
        </g>
        <defs>
            <clipPath id="clip0_441_260">
                <rect width="34" height="34" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)