import type { Product } from 'lib/interfaces'

type Action =
  | { type: 'add'; payload: Product }
  | { type: 'remove'; payload: Product }
  | { type: 'reset'; payload: null }

const initialState: [] = []
export function reducer(state: typeof initialState, action: Action) {
  const { type, payload } = action
  switch (type) {
    case 'add':
      return [...state, payload]
    case 'remove':
      return state.filter((product: Product) => product.product_id !== payload)
    case 'reset':
      return initialState
    default:
      throw new Error()
  }
}
