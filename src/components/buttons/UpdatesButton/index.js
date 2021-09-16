/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Button
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @name UpdatesButton
 *  @return {Component}
 */
const UpdatesButton = props => {
  const {
    className,
    modifier,
    onClick,
    buttonClassName,
    buttonModifier,
    text,
    amount
  } = props

  /**
   *  class names for the container
   *  @type {String}
   */
  const modifiedClassNames = classNames('updates-button', className, modifier)

  return (
    <div className={modifiedClassNames}>
      {
        amount
        ? <div className='updates-button__amount'>
            <p className='nano secondary-font'>{amount}</p>
          </div>
        : null
      }
      <TextButton
        onClick={onClick}
        modifier={buttonModifier}
        className={buttonClassName}
        text={text} />
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
UpdatesButton.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onClick: PropTypes.func,
  buttonClassName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  buttonModifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  text: PropTypes.string,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

/**
 *  defaultProps
 *  @type {Object}
 */
UpdatesButton.defaultProps = {
  buttonModifier: 'secondary'
}

/**
 *  @module UpdatesButton
 */
export default UpdatesButton
