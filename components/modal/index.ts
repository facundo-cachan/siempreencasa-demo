import { ReactNode } from 'react'
import styled, { StyledComponent } from 'styled-components'
import type { Buttons } from 'components'

import Default from './default'
import Cart from './cart'
export { Default, Cart }

export type ModalType = {
  children?: ReactNode
  active: boolean
  title: string
  btnPrimaryText: string
  btnPrimaryColor?: Buttons.ButtonType
  btnPrimaryAction: () => void
}
export const StyledModalBody = styled.div`
  padding-top: 10px;
`
export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`
export const StyledModalTitle = styled.h1`
  font-size: 2rem;
`
export const StyledModalSubTitle = styled.h3`
  font-size: 1rem;
`
export const StyledModalDescription = styled.h5`
  font-size: 0.7rem;
`
export const StyledModal: StyledComponent<'div', any, {}, never> = styled.div`
  height: auto;
  width: ${({ width }: { width: string }) => (width ? width : 'auto')};
  background: white;
  border-radius: 15px;
  padding: 15px;
`
export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`
export const StyledModalFooter = styled.div`
  height: auto;
  width: 100%;
  background: white;
  border-radius: 15px;
  padding: 15px;
`
