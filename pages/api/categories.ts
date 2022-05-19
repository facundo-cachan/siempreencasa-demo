// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
   _req: NextApiRequest,
   res: NextApiResponse<string[]>
) {
   res.status(200).json([
      "aguas",
      "vinos",
      "cervezas",
      "gaseosas",
      "mas vendidos"
   ])
}
