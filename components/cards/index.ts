import type { Product } from 'lib/interfaces'
import Default from './default'
export { Default }

export type CardType = Product & {
  hashtgs: string[]
  clickOnImage?: () => void
  clickBtnPrimary?: () => void
}
