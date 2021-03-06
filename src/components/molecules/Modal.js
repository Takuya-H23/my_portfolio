/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, keyframes } from '@emotion/core'
import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'
import { Button } from '../atoms'
import { colors, mqs, space } from '../emotion-variables'

function Modal({ onClick, center, children, type, disabled }) {
  const elRef = useRef(null)

  if (!elRef.current) {
    const div = document.createElement('div')
    elRef.current = div
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(elRef.current)

    return function cleanUpModal() {
      modalRoot.removeChild(elRef.current)
    }
  }, [])

  return createPortal(
    <Wrapper>
      <ModalBox>
        {children}
        <Button
          onClick={onClick}
          center={center}
          type={type}
          disabled={disabled}
        >
          Back
        </Button>
      </ModalBox>
    </Wrapper>,
    elRef.current
  )
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  center: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
}

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.modalBackground};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const ModalBox = styled.div`
  background-color: ${colors.white};
  border-radius: 5px;
  padding: ${space.padding.sm};
  ${mqs.md} {
    padding: ${space.padding.md};
  }
  animation: ${opacityAnimation} 0.3s ease;
`

export default Modal
