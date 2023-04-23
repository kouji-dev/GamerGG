import {ActiveBoost} from "@/app/client-area/active-boost";
import {UserSpent} from "@/app/client-area/user-spent";
import {TopBoosters} from "@/app/client-area/top-boosters";
import {OngoingOrder} from "@/app/client-area/ongoing-order";
import {DiscordServer} from "@/app/client-area/discord-server";
import {OrdersSummaryList} from "@/app/client-area/orders-summary-list";

export default function ClientAreaPage() {
  return (
      <div className='w-full flex overflow-x-hidden gap-lg'>
          <div className='w-[380px] flex flex-col gap-lg'>
              <div className='flex justify-between'>
                  <ActiveBoost/>
                  <UserSpent/>
              </div>
              <TopBoosters/>
          </div>
          <div className='flex flex-col flex-1 gap-lg'>
              <OngoingOrder/>
              <DiscordServer/>
              <OrdersSummaryList/>
          </div>
      </div>
  )
}
