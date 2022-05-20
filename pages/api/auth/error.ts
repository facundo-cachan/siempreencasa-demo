import { IncomingMessage } from 'http'
import { NextApiResponse } from 'next'

async function APIError(req: IncomingMessage, res: NextApiResponse) {
  // console.log('NextAuth Middleware Error')
  res.redirect('/')
}

export default APIError
