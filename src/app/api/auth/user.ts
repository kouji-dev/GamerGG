import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma";
import { isGet, isPost } from "@/utils/api-utils";
import { User } from "@prisma/client";
import { encodePassword } from "@/utils/password-utils";

export default async function UserApi(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (isGet(req)) {
        await getUser(req, res)
        return
    }

    if (isPost(req)) {
        await registerUser(req, res)
        return
    }

    res.end()
}

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const email = req.body?.email
    res.json(
        await prisma.user.findFirst({
            where: {
                email,
            },
            include: {
                userRoles: true,
            },
        }),
    )
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const user: any = req.body

    console.log({
        user,
    })

    res.json(
        await prisma.user.create({
            data: {
                ...user,
                password: await encodePassword(user.password),
                image: Buffer.from(user.image, 'utf-8'),
                userRoles: {
                    create: {
                        role: "USER",
                    },
                },
            },
            select: {
                email: true,
                image: true,
                username: true,
                userRoles: {
                    select: {
                        role: true,
                    },
                },
            },
        }),
    )
}