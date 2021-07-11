import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  export interface Session {
    expires: string
    id: string
    token: string
    user: {
      /** The user's postal address. */
      address: string
      image: string
      name: string
    }
  }
}