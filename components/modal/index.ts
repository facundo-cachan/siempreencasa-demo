import { ReactNode } from 'react'
import Default from './default'
export { Default }

type StringWithAutocomplete<T> = T | (string & Record<never, never>)
type ButtonType = StringWithAutocomplete<
  'is-light' | 'is-dark' | 'is-black' | 'is-text'
>

export type ModalType = {
  children?: ReactNode
  title: string
  btnPrimaryText: string
  btnPrimaryColor?: ButtonType
  btnPrimaryAction: () => void
}