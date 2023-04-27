import {FC, useState} from "react";
import {SessionContextValue, signOut} from "next-auth/react";
import {Avatar} from "@/ui/Avatar";
import {Popover} from "@/ui/Popover";
import {Button} from "@/ui";

type UserSessionProps = {
  session: SessionContextValue;
};
export const UserSession: FC<UserSessionProps> = (props) => {
  const { session } = props;
  const [ref, setRef] = useState<any>(null);

  return (
    <>
      <Avatar
        ref={setRef}
        className="cursor-pointer"
        src={session.data?.user?.image}
      />
      <Popover anchorEl={ref}>
          <div className='flex flex-col'>
              <Button onClick={() => signOut({callbackUrl: '/', redirect: true})} variant='login' label='sign out'/>
          </div>
      </Popover>
    </>
  );
};