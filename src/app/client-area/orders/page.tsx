import {OrdersList} from "@/app/client-area/orders/orders-list";
import {ActiveOrders} from "@/app/client-area/orders/active-orders";

export default function ClientAreaOrdersPage() {
  return (
      <div className='w-full flex flex-col gap-[10px]'>
        <ActiveOrders />
        <div className='flex-1'>
          <OrdersList />
        </div>
      </div>
  )
}
