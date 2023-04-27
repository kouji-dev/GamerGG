import Image from "next/image";
import image from "@assets/auth-wallpaper.jpg";
import {LoginForm} from "@/app/login/login-form";
import {getServerSession} from "next-auth/next";
import {AUTH_OPTIONS} from "@/app/api/auth/[...nextauth]/route";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context)
//     },
//   };
// };

export default async function AuthPage() {
    const session = await getServerSession(AUTH_OPTIONS);
    console.log(session);
  return (
    <div className="w-full h-full relative">
      <LoginForm />
    </div>
  );
}
