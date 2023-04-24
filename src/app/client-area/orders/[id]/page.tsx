import {BoostOverview} from "@/app/client-area/orders/[id]/boost-overview";
import {BoostChat} from "@/app/client-area/orders/[id]/boost-chat";
import {BoostOptions} from "@/app/client-area/orders/[id]/boost-options";

export default function ClientAreaOrderDetailPage() {
  return (
      <div className="w-full flex flex-col gap-lg">
        <BoostOverview/>
        <div className='flex gap-lg'>
          <BoostChat/>
          <BoostOptions/>
        </div>
      </div>
  )
}