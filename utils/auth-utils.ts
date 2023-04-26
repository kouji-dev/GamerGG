import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import {AUTH_OPTIONS} from "@/pages/api/auth/[...nextauth]";

export const getUserFromSession = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {
    const session = await getServerSession(req, res, AUTH_OPTIONS)

    if (!session) {
        res.status(401).json({ message: "You must be logged in." })
        return
    }

    return session.user
}

export const getEmailFromSession = async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {
    const user = await getUserFromSession(req, res)

    if (!user || !user.email) throw new Error("User must have an email")

    return user.email
}