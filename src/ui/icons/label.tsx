import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const Label: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M10.6668 4.66663H3.3335V11.3333H10.6668L13.0335 7.99996L10.6668 4.66663Z"
              fill="currentColor"/>
        <path
            d="M11.7533 3.89337C11.5133 3.55337 11.1133 3.33337 10.6667 3.33337L3.33333 3.34004C2.6 3.34004 2 3.93337 2 4.66671V11.3334C2 12.0667 2.6 12.66 3.33333 12.66L10.6667 12.6667C11.1133 12.6667 11.5133 12.4467 11.7533 12.1067L14.6667 8.00004L11.7533 3.89337ZM10.6667 11.3334H3.33333V4.66671H10.6667L13.0333 8.00004L10.6667 11.3334Z"
            fill="currentColor"/>
    </svg>
)