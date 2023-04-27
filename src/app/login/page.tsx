import Image from "next/image";
import image from "@assets/auth-wallpaper.jpg";
import {LoginForm} from "@/app/login/login-form";
import {getServerSession} from "next-auth/next";
import {AUTH_OPTIONS} from "@/app/api/auth/[...nextauth]/route";

export default async function AuthPage() {
    const session = await getServerSession(AUTH_OPTIONS);
  return (
    <div className="w-full h-full relative">
      <Image
        className="w-full h-full object-cover"
        alt="auth-wallpaper"
        src={image}
      />
      <LoginForm />
    </div>
  );
}
