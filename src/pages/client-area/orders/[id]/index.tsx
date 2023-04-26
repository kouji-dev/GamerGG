import { BoostOverview } from "@/pages/client-area/orders/[id]/boost-overview";
import { BoostChat } from "@/pages/client-area/orders/[id]/boost-chat";
import { BoostOptions } from "@/pages/client-area/orders/[id]/boost-options";
import ClientAreaLayout from "@/pages/client-area/layout";

export default function ClientAreaOrderDetailPage() {
  return (
    <div className="w-full flex flex-col gap-lg">
      <BoostOverview />
      <div className="flex gap-lg">
        <BoostChat />
        <BoostOptions />
      </div>
    </div>
  );
}

ClientAreaOrderDetailPage.getLayout = (page: any) => {
  return <ClientAreaLayout>{page}</ClientAreaLayout>;
};
