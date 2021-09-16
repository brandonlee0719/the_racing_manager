import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

const Separator = props => {
  const { className, modifier } = props

  const modifiedClassNames = classNames('separator', className, modifier)

  return (
    <hr className={modifiedClassNames} />
  )
}

Separator.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
}

Separator.defaultProps = {
  className: '',
  modifier: ''
}

export default Separator
