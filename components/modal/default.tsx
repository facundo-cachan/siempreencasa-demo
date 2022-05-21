import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalTitle,
} from '.'

const Default = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal width="20%">
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

export default Default
