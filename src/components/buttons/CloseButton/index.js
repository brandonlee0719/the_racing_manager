/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Button
 */
import Button from 'components/buttons/Button'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  noop
 *  @return {Void}
 */
const noop = () => {}

/**
 *  @name CloseButton
 *  @param  {Object} props
 *  @return {React.Component}
 */
const CloseButton = props => {
  const {
    className,
    modifier
  } = props

  // Modified class names for the container
  const modifiedClassNames = classNames('close-button', className, modifier)

  // Send to the Button modified props
  // Remove classname as we are overriding this.
  const modifiedProps = omit(props, ['className'])

  return (
    <Button
      className={modifiedClassNames}
      {...modifiedProps}>
      <Icon
        className='close-button__icon'
        modifier='close'/>
    </Button>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
CloseButton.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
}

/**
 *  defaultProps
 *  @type {Object}
 */
CloseButton.defaultProps = {
  className: '',
  isDisabled: false,
  onClick: noop
}

/**
 *  @module CloseButton
 */
export default CloseButton
