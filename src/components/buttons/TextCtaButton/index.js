import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

const TextCtaButton = (props) => {
  const {
    text,
    onClick,
    active,
    className,
    modifier
  } = props

  const modifiedClassNames = classNames('text-cta-button', className, modifier, {
    active
  })

  return (
    <h6 className={modifiedClassNames} onClick={onClick}>
      {text}
    </h6>
  )
}

TextCtaButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool
}

TextCtaButton.defaultProps = {
  text: '',
  active: true
}

export default TextCtaButton
