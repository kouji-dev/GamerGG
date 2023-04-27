import Image from "next/image";
import image from "@assets/auth-wallpaper.jpg";
import {GetServerSideProps} from "next";
import {getCsrfToken} from "next-auth/react";
import {LoginForm} from "@/pages/login/login-form";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    },
  };
};

export default function AuthPage() {
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
