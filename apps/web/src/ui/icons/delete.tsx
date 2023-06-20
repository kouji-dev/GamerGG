import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const Delete: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M5.3335 6H10.6668V12.6667H5.3335V6Z" fill="currentColor"/>
        <path
            d="M10.3335 2.66667L9.66683 2H6.3335L5.66683 2.66667H3.3335V4H12.6668V2.66667H10.3335ZM4.00016 12.6667C4.00016 13.4 4.60016 14 5.3335 14H10.6668C11.4002 14 12.0002 13.4 12.0002 12.6667V4.66667H4.00016V12.6667ZM5.3335 6H10.6668V12.6667H5.3335V6Z"
            fill="currentColor"/>
    </svg>
)