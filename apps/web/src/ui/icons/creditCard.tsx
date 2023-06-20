import {FC} from "react";
import {createSvgIcon, SvgIconProps} from "@/ui/icons/index";

export const CreditCard: FC<SvgIconProps> = createSvgIcon(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M2.6665 8H13.3332V12H2.6665V8ZM2.6665 4H13.3332V5.33333H2.6665V4Z" fill="currentColor"/>
        <path
            d="M13.3335 2.66663H2.66683C1.92683 2.66663 1.34016 3.25996 1.34016 3.99996L1.3335 12C1.3335 12.74 1.92683 13.3333 2.66683 13.3333H13.3335C14.0735 13.3333 14.6668 12.74 14.6668 12V3.99996C14.6668 3.25996 14.0735 2.66663 13.3335 2.66663ZM13.3335 12H2.66683V7.99996H13.3335V12ZM13.3335 5.33329H2.66683V3.99996H13.3335V5.33329Z"
            fill="currentColor"/>
    </svg>
)