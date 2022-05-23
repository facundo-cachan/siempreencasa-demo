import { ReactChild } from 'react'
import styled from 'styled-components'

import Default from './default'
import Mask from './mask'
export { Default, Mask }

type StringWithAutocomplete<T> = T | (string & Record<never, never>)
export type ButtonType = StringWithAutocomplete<
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
>

enum Btn {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export type ButtonProps = {
  accessKey?: string
  action?: () => void
  ariaLabel?: string
  children?: ReactChild
  className?: ButtonType
  color?: string
  disabled?: boolean
  endIcon?: {
    key: string;
    icon: string;
  }
  href?: string
  id?: string
  loading?: boolean
  name?: string
  startIcon?: {
    key: string;
    icon: string;
  }
  tabIndex?: number
  text?: string
  title?: string
  type?: Btn
}

export const Button = styled.button``
