// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Product } from 'lib/interfaces'
import db from './db.json'

export default async function handler(
   _req: NextApiRequest,
   res: NextApiResponse<Product>
) {
   res.status(200).json(db)
}
