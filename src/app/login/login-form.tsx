"use client";
import { Button, Typography } from "@/ui";
import { signIn } from "next-auth/react";
import { FacebookLogin } from "@/ui/icons/facebookLogin";
import { DiscordLogin } from "@/ui/icons/discordLogin";
import { GoogleLogin } from "@/ui/icons/googleLogin";

export const LoginForm = () => {
  const login = (provider: string) => {
    signIn(provider, {
      redirect: true,
      callbackUrl: "/client-area",
    });
  };

  const google = () => {
    login("google");
  };
  const discord = () => {
    login("discord");
  };
  const facebook = () => {
    login("facebook");
  };
  return (
    <div className="absolute top-[30%] left-[40%] flex flex-col gap-lg items-center justify-center p-lg bg-metal rounded-md w-[360px]">
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
          leftIcon={<GoogleLogin />}
          variant="login"
          label="log in with google"
          size="medium"
          full
        />
        <Button
          onClick={discord}
          leftIcon={<DiscordLogin />}
          variant="login"
          label="log in with discord"
          size="medium"
          full
        />
        <Button
          onClick={facebook}
          leftIcon={<FacebookLogin />}
          variant="login"
          label="log in with facebook"
          size="medium"
          full
        />
      </div>
    </div>
  );
};
