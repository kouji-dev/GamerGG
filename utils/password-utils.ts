import { compare, genSalt, hash } from "bcrypt";

const saltRounds = 10;
export const encodePassword = async (password: string) => {
    const salt  = await genSalt(saltRounds);
    return hash(password, salt)
}
export const comparePassword = async (password: string, encoded: string) => {
    return compare(password, encoded)
}


