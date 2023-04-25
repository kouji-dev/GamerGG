import { FC } from "react";
import { Card } from "@/ui/Card";
import { Button, Typography } from "@/ui";
import { Adc, Check, Close, Edit, Ekko, Jungle, Label } from "@/ui/icons";

type BoostOptionsProps = {};

export const BoostOptions: FC<BoostOptionsProps> = (props) => {
  return (
    <Card className="p-lg flex flex-col gap-lg min-w-[320px]">
      <div className="flex flex-col gap-lg">
        <div className="flex justify-between">
          <Typography variant="h6" weight="bold">
            Boost Options
          </Typography>
          <Button
            variant="default"
            label="edit"
            leftIcon={<Edit className="!text-floral" />}
          />
        </div>
        <div className="flex flex-col gap-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-xs items-center">
              <Label />
              <Typography variant="subtitle" weight="bold">
                Roles
              </Typography>
            </div>
            <div className="flex">
              <Jungle />
              <Adc />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-xs items-center">
              <Label />
              <Typography variant="subtitle" weight="bold">
                Champions
              </Typography>
            </div>
            <div className="flex gap-xs">
              <Ekko />
              <Ekko />
              <Ekko />
              <Ekko />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-xs items-center">
              <Label />
              <Typography variant="subtitle" weight="bold">
                Solo Only
              </Typography>
            </div>
            <div className="flex gap-xs items-center">
              <Check />
              <Typography variant="subtitle" weight="bold">
                Yes
              </Typography>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-xs items-center">
              <Label />
              <Typography variant="subtitle" weight="bold">
                Coaching
              </Typography>
            </div>
            <div className="flex gap-xs items-center">
              <Close />
              <Typography variant="subtitle" weight="bold">
                No
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-1 border-black" />
      <div className="flex flex-col gap-lg">
        <div className="flex justify-between">
          <Typography variant="h6" weight="bold">
            Account Info
          </Typography>
          <Button
            variant="default"
            label="edit"
            leftIcon={<Edit className="!text-floral" />}
          />
        </div>
        <div className="flex flex-col gap-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-xs items-center">
              <Label />
              <Typography variant="subtitle" weight="bold">
                IGN
              </Typography>
            </div>
            <div className="flex">
              <Typography variant="subtitle" weight="bold">
                DuoLeveling
              </Typography>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-xs items-center">
              <Label />
              <Typography variant="subtitle" weight="bold">
                Login
              </Typography>
            </div>
            <div className="flex gap-xs">
              <Typography variant="subtitle" weight="bold">
                Kalpieceten
              </Typography>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-xs items-center">
              <Label />
              <Typography variant="subtitle" weight="bold">
                Password
              </Typography>
            </div>
            <div className="flex gap-xs items-center">
              <Typography variant="subtitle" weight="bold">
                **********
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
