import {getServerSession} from "next-auth";
import {AUTH_OPTIONS} from "@/app/api/auth/[...nextauth]/route";

export const getCurrentSession = async () => {
    return await getServerSession(AUTH_OPTIONS)
}