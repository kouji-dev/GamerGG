"use client";
import { Button } from "@/ui";
import { signIn, useSession } from "next-auth/react";
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
    child = <Button onClick={() => signIn()} label="Login" size="medium" />;
  return <div className="w-[200px] flex justify-center">{child}</div>;
};
