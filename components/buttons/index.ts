import styled, { StyledComponent } from 'styled-components'

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

export type ButtonProps = {
  children?: React.ReactNode
  text: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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
