/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { colors, fonts, mqs, space } from './../emotion-variables'

const Heading1 = styled.h1`
  font: ${(props) => (props.secondary ? fonts.h1.secondary : fonts.h1.primary)};
  color: ${colors.black};
  margin-bottom: ${(props) => (props.margin ? space.margin.xs : 0)};
  ${mqs.sm} {
    font-size: 3rem;
  }
  ${mqs.md} {
    font-size: ${(props) => (props.secondary ? '3rem' : '3.3rem')};
  }
  ${mqs.lg} {
    font-size: ${(props) => (props.secondary ? '3.3rem' : '5rem')};
  }
`

export const H1 = ({ children, secondary = false, margin, ...props }) => {
  return (
    <Heading1 secondary={secondary} margin={margin} {...props}>
      {children}
    </Heading1>
  )
}

H1.propTypes = {
  children: PropTypes.any.isRequired,
}

const Heading2 = styled.h2`
  font: ${(props) => (props.secondary ? fonts.h2.secondary : fonts.h2.primary)};
  color: ${colors.black};
  margin-bottom: ${(props) => (props.margin ? space.margin.xs : 0)};
`

export const H2 = ({ children, secondary = false, margin, ...props }) => {
  return (
    <Heading2 secondary={secondary} margin={margin} {...props}>
      {children}
    </Heading2>
  )
}

H2.propTypes = {
  children: PropTypes.string.isRequired,
}

const Heading3 = styled.h3`
  font: ${(props) => (props.secondary ? fonts.h3.secondary : fonts.h3.primary)};
  color: ${colors.black};
  margin-bottom: ${(props) => (props.margin ? space.margin.xs : 0)};
`

export const H3 = ({
  children,
  secondary = false,
  tertiary,
  margin,
  ...props
}) => {
  return (
    <Heading3
      secondary={secondary}
      margin={margin}
      tertiary={tertiary}
      {...props}
    >
      {children}
    </Heading3>
  )
}

H3.propTypes = {
  children: PropTypes.string.isRequired,
}
