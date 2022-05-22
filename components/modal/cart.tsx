import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import useAppContext from 'context/app'
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalTitle,
  ModalType,
} from '.'
import { Buttons, Icon, Modals, Img } from 'components'
import uuid from 'utils/uuid'
import type { Product } from 'lib/interface'

const Cart = ({ show, onClose, title }: ModalType) => {
  const { state, dispatch } = useAppContext()
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  return isBrowser && show ? createPortal(<StyledModalOverlay>
    <StyledModal width="20%">
      <StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <a href="#" onClick={onClose}>
          <Icon icon="xmark fa-2xs" />
        </a>
      </StyledModalHeader>
      <StyledModalBody>
        {state.length > 0 ? (
          state.map(
            ({
              product_id,
              price_per_unit,
              image_url,
              name,
            }: Partial<Product>) => (
              <Modals.StyledModalHeader key={uuid()}>
                <Img src={image_url} sizes={[80]} />
                <Modals.StyledModalSubTitle>
                  ARS {price_per_unit}
                </Modals.StyledModalSubTitle>
                <Modals.StyledModalDescription>
                  {name}
                </Modals.StyledModalDescription>
                <Buttons.Default
                  text="Remove"
                  action={() =>
                    dispatch({ type: 'remove', payload: product_id })
                  }
                >
                  Add
                </Buttons.Default>
              </Modals.StyledModalHeader>
            )
          )
        ) : (
          <h4>Cart Shop Empty</h4>
        )}
        {
          state.length > 0 && (
            <Buttons.Default
              text="Reset"
              action={() => dispatch({ type: 'reset' })}
            />
          )
        }
      </StyledModalBody>
    </StyledModal>
  </StyledModalOverlay>,
    document.getElementById('modal-root')) : null
}

export default Cart
