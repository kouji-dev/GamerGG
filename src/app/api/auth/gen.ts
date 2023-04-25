import { NextApiRequest, NextApiResponse } from "next";
import { encodePassword } from "@/utils/password-utils";

export default async function UserGet(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const password = req.query.password;
  res.json(
    {
      encoded: await encodePassword(password as string)
    }
  )
}