/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, mqs } from '../emotion-variables'

function Button({
  center = true,
  children,
  onClick,
  type = 'button',
  disabled = false,
  secondary = false,
}) {
  return (
    <StyledButton
      center={center}
      onClick={onClick}
      type={type}
      disabled={disabled}
      secondary={secondary}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: ${props =>
    props.secondary ? colors.white : colors.secondary};
  border: ${props =>
    props.secondary ? `1px solid ${colors.primary}` : '1px solid transparent'};
  border-radius: 3px 3px;
  box-shadow: ${colors.boxShadow};
  color: ${props => (props.secondary ? colors.primary : colors.white)};
  display: block;
  margin: ${props => (props.center ? '2rem auto 0' : '2rem 0 0')};
  padding: 0.8rem 2rem;
  transition: background 0.5s ease;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  font-size: 1.6rem;

  &:hover {
    background: ${props =>
      props.disabled
        ? props.secondary
          ? colors.white
          : colors.secondary
        : props.secondary
        ? colors.secondary
        : colors.primary};
    color: ${props =>
      props.secondary && props.disabled ? colors.primary : colors.white};
  }

  ${mqs.md} {
    margin: ${props => (props.center ? '4rem auto 0' : '4rem 0 0')};
  }
`

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Button
