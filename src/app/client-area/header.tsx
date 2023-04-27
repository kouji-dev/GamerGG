"use client";
import { FC } from "react";
import { Breadcrumbs } from "@/ui/Breadcrumbs";
import { UserSession } from "@/ui/common/user-session";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export const Header: FC<{}> = () => {
  const session = useSession({
    required: true,
  });
  const pathname = usePathname();
  const paths = pathname.substring(1).split("/");
  return (
    <div className="pb-0.5 bg-red-blue shadow-lg">
      <div className="p-4 flex justify-between items-center bg-layout shadow">
        <Breadcrumbs items={paths} />
        <UserSession session={session} />
      </div>
    </div>
  );
};
