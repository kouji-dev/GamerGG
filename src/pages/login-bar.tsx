//"use client";
import Link from "next/link";
import { Button } from "@/ui";
import { useSession } from "next-auth/react";
import { UserSession } from "@/ui/common/user-session";

export const LoginBar = () => {
  const session = useSession({
    required: false,
  });
  
  let child;
  if (session.status === "loading") child = "Loading";
  if (session.status === "authenticated")
    child = <UserSession session={session} />;
  if (session.status === "unauthenticated")
    child = (
      <Link href="/login">
        <Button label="Login" size="medium" />
      </Link>
    );
  return <div className="w-[200px] flex justify-center">{child}</div>;
};
