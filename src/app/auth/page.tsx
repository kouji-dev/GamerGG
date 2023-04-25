import Image from "next/image";
import image from '@assets/auth-wallpaper.jpg'
import {LoginForm} from "@/app/auth/login-form";
export default function AuthPage() {
    return (
        <div className='w-full h-full relative'>
            <Image className='w-full h-full object-cover' alt='auth-wallpaper' src={image}/>
            <LoginForm/>
        </div>
    )
}