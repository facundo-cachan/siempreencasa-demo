import { ReactChild } from 'react'
import styled, { StyledComponent } from 'styled-components'
import Icon from '../icon'

import Default from './default'
export { Default }

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
  endIcon?: Icon
  href?: string
  id?: string
  loading?: boolean
  name?: string
  startIcon?: Icon
  tabIndex?: number
  text?: string
  title?: string
  type?: Btn
}

export const Button: StyledComponent<'button', any, {}, never> = styled.button`
  background: ${(primary: ButtonProps) =>
    primary ? 'palevioletred' : 'white'};
  color: ${(primary: ButtonProps) => (primary ? 'white' : 'palevioletred')};
  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
