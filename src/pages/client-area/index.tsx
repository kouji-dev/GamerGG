import {ActiveBoost} from "@/pages/client-area/active-boost";
import {UserSpent} from "@/pages/client-area/user-spent";
import {TopBoosters} from "@/pages/client-area/top-boosters";
import {OngoingOrder} from "@/pages/client-area/ongoing-order";
import {DiscordServer} from "@/pages/client-area/discord-server";
import {OrdersSummaryList} from "@/pages/client-area/orders-summary-list";
import ClientAreaLayout from "@/pages/client-area/layout";

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

ClientAreaPage.getLayout = (page: any) => {
    return (
        <ClientAreaLayout>{page}</ClientAreaLayout>
    )
}
