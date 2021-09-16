/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

const SocialButton = (props) => {
  const {
    modifier,
    text,
    onClick,
    className
  } = props

  const modifiedClassNames = classNames('social-button', className, modifier)

  return (
    <div className={modifiedClassNames} onClick={onClick}>
      <div className='social-button__icon-container'>
        <Icon
          className='social-button__icon'
          modifier={modifier} />
      </div>
      <div className='social-button__text'>
        <h6 className='uppercase regular'>
          {text}
        </h6>
      </div>
    </div>
  )
}

SocialButton.propTypes = {
  iconModifier: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default SocialButton
