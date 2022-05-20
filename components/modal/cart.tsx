import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import useAppContext from 'context/app'
import {
  StyledModalOverlay,
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalTitle,
  StyledModalFooter,
} from '.'
import { Buttons } from 'components/'

const Default = ({ show, onClose, children, title }) => {
  const { state, dispatch } = useAppContext()
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
      <StyledModal width="30%">
        <StyledModalHeader>
          <a onClick={handleCloseClick}>x</a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
        <StyledModalFooter>
          {state.length > 0 && (
            <Buttons.Default
              text="Reset"
              onClick={() => dispatch({ type: 'reset' })}
            >
              Add
            </Buttons.Default>
          )}
        </StyledModalFooter>
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
