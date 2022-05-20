import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'

const secret = process.env.NEXTAUTH_SECRET

async function APISignIn(req: NextApiRequest, res: NextApiResponse) {
  // console.log('API Auth SignIn')
  const session = await getSession({ req })
  const token = await getToken({ req, secret })
  // console.log({ secret, session, token })
  if (session && token) {
    res.redirect('/error')
  }
  res.redirect('/')
}

export default APISignIn
