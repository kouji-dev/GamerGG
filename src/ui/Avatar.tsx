import { forwardRef } from "react";
import { CommonUiComponentProps } from "@/ui/common";
import clsx from "clsx";
import Image from "next/image";

type AvatarSize = "small" | "medium" | "large" | "xlarge";

export type AvatarProps = {
  label?: string;
  size?: AvatarSize;
  src?: string | null;
} & CommonUiComponentProps &
  JSX.IntrinsicElements["div"];

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { className, label = "A", size = "small", src, ...rest } = props;

  const cls = clsx(
    "relative rounded-xs bg-orange flex items-center justify-center font-bold text-h6",
    {
      "w-[50px] h-[50px]": size === "small",
      "w-[70px] h-[70px]": size === "medium",
      "w-[100px] h-[100px]": size === "large",
      "w-[140px] h-[140px]": size === "xlarge",
    },
    className
  );
  return (
    <div ref={ref} {...rest} className={cls}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {label}
      </div>
      {src && (
        <Image
          src={src}
          alt="User Avatar"
          fill
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";
