import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

const HorseSmallSection = props => {
  const { children, className, modifier } = props

  const modifiedClassNames = classNames('horse-small-section horse-padding', className, modifier)

  return (
    <div className={modifiedClassNames}>
      {children}
    </div>
  )
}

HorseSmallSection.propTypes = {
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

HorseSmallSection.defaultProps = {
  className: '',
  modifier: ''
}

export default HorseSmallSection
