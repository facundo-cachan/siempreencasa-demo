// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Product } from 'lib/interfaces'
import db from '../../../public/json/products.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product>
) {
  const product = req.query?.product_id
    ? db.find((product: Product) => product.product_id === req.query.product_id)
    : db[0]
  res.status(200).json(product)
}
