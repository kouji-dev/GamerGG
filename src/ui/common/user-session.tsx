import {FC, useState} from "react";
import {SessionContextValue} from "next-auth/src/react";
import {Avatar} from "@/ui/Avatar";
import {Popover} from "@/ui/Popover";

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
      <Popover anchorEl={ref}>hi</Popover>
    </>
  );
};