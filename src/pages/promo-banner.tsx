//"use client";
import { FC } from "react";
import { Typography } from "@/ui";
import { Compaign } from "@/ui/icons";

export const PromoBanner: FC<{}> = () => {
  return (
    <div className="w-full bg-red-blue h-[34px] flex items-center pl-16">
      <Compaign className="!text-floral mr-2" />
      <Typography variant="h6" weight="black">
        Use code{" "}
        <Typography variant="h6" weight="black" underline inline>
          rankUp77
        </Typography>{" "}
        for 25% off your order
      </Typography>
    </div>
  );
};
