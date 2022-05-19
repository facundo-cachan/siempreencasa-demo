import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

export type Token = {
  name: string
  email: string
  picture: string
  sub: string
  provider: string
}

const options = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    error: '/pages/error',
  },
  jwt: {
    encryption: true,
  },
  callbacks: {
    async jwt({
      token,
      user,
      account,
    }: {
      token: Token
      user: {
        name: string
        email: string
        image: string
      }
      account: {
        provider: string
        type: string
        id_token?: string
        access_token?: string
        expires_at: number
        refresh_token: string
      }
    }) {
      if (account && user) {
        return {
          accessToken: account.id_token || account.access_token,
          accessTokenExpires: Date.now() + account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
          provider: account.provider,
          type: account.type,
        }
      }
      return token
    },
  },
}
const CustomNetcAuth = (req: any, res: any) => NextAuth(req, res, options)
export default CustomNetcAuth