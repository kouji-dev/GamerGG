import {FC, useState} from "react";
import {SessionContextValue, signOut} from "next-auth/react";
import {Avatar} from "@/ui/Avatar";
import {Popover} from "@/ui/Popover";
import {Button, Typography} from "@/ui";
import {usePathname} from "next/navigation";
import Link from "next/link";

type UserSessionProps = {
  session: SessionContextValue;
};
export const UserSession: FC<UserSessionProps> = (props) => {
  const { session } = props;
  const [ref, setRef] = useState<any>(null);
  const pathname = usePathname();
  const showClientAreaNavigation = !pathname.includes('client-area')

  return (
    <>
      <Avatar
        ref={setRef}
        className="cursor-pointer"
        src={session.data?.user?.image}
      />
      <Popover anchorEl={ref}>
          <div className='flex flex-col gap-sm'>
              {
                  showClientAreaNavigation && (
                      <>
                          <Link href='/client-area'><Typography variant='subtitle' weight='bold'>Dashboard</Typography></Link>
                          <hr className='border-black border-top-2 w-full'/>
                      </>

                  )
              }

              <Button onClick={() => signOut({callbackUrl: '/', redirect: true})} variant='login' label='sign out'/>
          </div>
      </Popover>
    </>
  );
};