import { OrdersList } from "@/app/client-area/orders/orders-list";
import { ActiveOrders } from "@/app/client-area/orders/active-orders";
import ClientAreaLayout from "@/app/client-area/layout";

export default function ClientAreaOrdersPage() {
  return (
    <div className="w-full flex flex-col gap-lg">
      <ActiveOrders />
      <div className="flex-1">
        <OrdersList />
      </div>
    </div>
  );
}

ClientAreaOrdersPage.getLayout = (page: any) => {
    return <ClientAreaLayout>{page}</ClientAreaLayout>
}
