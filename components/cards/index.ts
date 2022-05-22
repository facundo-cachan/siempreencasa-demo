import type { Product } from 'lib/interfaces'
import Default from './default'
import Horizontal from './horizontal'
export { Default, Horizontal }

export type CardType = Product & {
  name: string
  height?: string
  img?: number
  fontSize?: string
  categories?: string[]
  description: string
  image_url: string
  price_per_litre: string
  clickOnImage?: () => void
  clickBtnPrimary?: () => void
  clickBtnSecondary?: () => void
}
