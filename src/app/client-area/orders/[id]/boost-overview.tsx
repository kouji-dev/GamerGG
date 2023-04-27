import { FC } from "react";
import { Card } from "@/ui/Card";
import { Avatar } from "@/ui/Avatar";
import { Button, Typography } from "@/ui";
import { ArrowRight, Copy, CreditCard, Delete, Edit, Place } from "@/ui/icons";
import { Chip } from "@/ui/Chip";
import { getStatusCls } from "@/ui/utils/status";

type BoostOverviewProps = {};

export const BoostOverview: FC<BoostOverviewProps> = () => {
  return (
    <Card className="rounded-md p-lg flex justify-between">
      <div className="flex gap-md">
        <Avatar className="!bg-purple" size="xlarge" label="LOL" />
        <div className="flex flex-col gap-sm">
          <div className="flex gap-sm items-center">
            <Typography variant="h6" weight="bold">
              lol - AEC1232213
            </Typography>
            <Copy />
            <Chip label="unpaid" className={getStatusCls("UNPAID")} />
          </div>
          <div className="flex gap-sm">
            <div className="flex gap-xs items-center">
              <Place />
              <Typography variant="subtitle" weight="bold">
                Rank Boost
              </Typography>
            </div>
            <div className="flex gap-xs items-center">
              <Place />
              <Typography variant="subtitle" weight="bold">
                EU-West
              </Typography>
            </div>
            <div className="flex gap-xs items-center">
              <Place />
              <Typography variant="subtitle" weight="bold">
                49.23$
              </Typography>
            </div>
            <div className="flex gap-xs items-center">
              <Place />
              <Typography variant="subtitle" weight="bold">
                SUPER22 - 16%
              </Typography>
            </div>
          </div>
          <div className="flex gap-lg items-center">
            <div className="border-2 border-filter-100 border-dashed p-sm flex gap-sm rounded">
              <Avatar className="bg-filter-100" />
              <div className="flex flex-col gap-sm">
                <Typography variant="subtitle" weight="bold">
                  Platinum III
                </Typography>
                <Typography variant="subtitle" weight="bold">
                  0 LP
                </Typography>
              </div>
            </div>
            <ArrowRight />
            <div className="border-2 border-filter-100 border-dashed p-sm flex gap-sm rounded">
              <Avatar className="bg-filter-100" />
              <div className="flex flex-col gap-sm">
                <Typography variant="subtitle" weight="bold">
                  Platinum III
                </Typography>
                <Typography variant="subtitle" weight="bold">
                  0 LP
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-fit items-start gap-sm">
        {/*<Button leftIcon={<Star className='!text-floral'/>} variant='default' label='rate booster'/>*/}
        {/*<Button leftIcon={<Star className='!text-floral'/>} variant='success' label='review us'/>*/}
        <Button
          leftIcon={<Delete className="!text-floral" />}
          variant="danger"
        />
        <Button
          leftIcon={<Edit className="!text-floral" />}
          variant="default"
          label="edit"
        />
        <Button
          leftIcon={<CreditCard className="!text-floral" />}
          label="complete payment"
        />
      </div>
    </Card>
  );
};
