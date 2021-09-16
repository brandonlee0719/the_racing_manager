import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

const HorseBigSection = props => {
  const { children, className, modifier } = props

  const modifiedClassNames = classNames('horse-big-section horse-padding', className, modifier)

  return (
    <div className={modifiedClassNames}>
      {children}
    </div>
  )
}

HorseBigSection.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

HorseBigSection.defaultProps = {
  className: '',
  modifier: ''
}

export default HorseBigSection
