import React from 'react'
import PropTypes from 'prop-types'

function Button (props) {
  return <button>{props.children}</button>
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.element
}

Button.defaultProps = {
  variant: 'default'
}

export default Button
