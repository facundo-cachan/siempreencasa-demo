import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalTitle,
  ModalType,
} from '.'
import { Icon } from 'components'

const Default = ({ show, onClose, children, title }: ModalType) => {
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
      <StyledModalBody>{children}</StyledModalBody>
    </StyledModal>
  </StyledModalOverlay>,
    document.getElementById('modal-root')) : null
}

export default Default
