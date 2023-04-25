import {Button, Typography} from "@/ui";
import {DiscordLogin, FacebookLogin, GoogleLogin} from "@/ui/icons";

export const LoginForm = () => {

    return (
        <form className='absolute top-[30%] left-[40%] flex flex-col gap-lg items-center justify-center p-lg bg-metal rounded-md w-[360px]'>
            <div className='flex flex-col gap-xs items-center'>
                <Typography variant='h3' weight='black'>Client Area</Typography>
                <Typography variant='subtitle' weight='bold'>Sign into your account</Typography>
            </div>
            <div className='flex flex-col gap-sm'>
                <Button leftIcon={<GoogleLogin/>} variant='login' label='log in with google' size='medium' full/>
                <Button leftIcon={<DiscordLogin/>} variant='login' label='log in with discord' size='medium' full/>
                <Button leftIcon={<FacebookLogin/>} variant='login' label='log in with facebook' size='medium' full/>
            </div>
        </form>
    )
}