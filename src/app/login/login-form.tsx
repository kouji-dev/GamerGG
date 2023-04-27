"use client";
import { Button, Typography } from "@/ui";
// import { DiscordLogin, FacebookLogin, GoogleLogin } from "@/ui/icons";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const login = async (provider: string) => {
    signIn(provider);
  };

  const google = async () => {
    login("google");
  };
  const discord = async () => {
    login("discord");
  };
  const facebook = async () => {
    login("facebook");
  };
  return (
    <form className="absolute top-[30%] left-[40%] flex flex-col gap-lg items-center justify-center p-lg bg-metal rounded-md w-[360px]">
      <div className="flex flex-col gap-xs items-center">
        <Typography variant="h3" weight="black">
          Client Area
        </Typography>
        <Typography variant="subtitle" weight="bold">
          Sign into your account
        </Typography>
      </div>
      <div className="flex flex-col gap-sm">
        <Button
          onClick={google}
          // leftIcon={<GoogleLogin />}
          variant="login"
          label="log in with google"
          size="medium"
          full
        />
        <Button
          onClick={discord}
          // leftIcon={<DiscordLogin />}
          variant="login"
          label="log in with discord"
          size="medium"
          full
        />
        <Button
          onClick={facebook}
          // leftIcon={<FacebookLogin />}
          variant="login"
          label="log in with facebook"
          size="medium"
          full
        />
      </div>
    </form>
  );
};
