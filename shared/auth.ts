import { CredentialInput } from "next-auth/providers/credentials";

export const CREDENTIALS_DEFINITION: Record<string, CredentialInput> = {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
}

export const SIMPLE_AUTH = "credentials"

export type LoginCredentials = {
    username: string
    password: string
}

export type LoginRequest = LoginCredentials & {
    csrfToken: string
}

export type RegisterUser = {
    username: string
    email: string
    password: string
    image?: string
}