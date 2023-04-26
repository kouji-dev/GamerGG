import {getServerSession} from "next-auth";
import {AUTH_OPTIONS} from "@/pages/api/auth/[...nextauth]";

export const getCurrentSession = async () => {
    return await getServerSession(AUTH_OPTIONS)
}