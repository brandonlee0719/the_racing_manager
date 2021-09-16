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
import Button from 'components/buttons/Button'

/**
 * TextButton component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const TextButton = props => {
  const {
    text,
    className,
    modifier,
    active,
    isDisabled,
    textClassName
  } = props

  /**
   *  @type {String}
   */
  const modifiedClassNames = classNames('text-button', className, modifier, {
    active
  })

  const modifiedTextClassNames = classNames('text-button__text', textClassName)

  return (
    Button({
      ...props,
      className: modifiedClassNames,
      children: <h6 className={modifiedTextClassNames}>{text}</h6>
    })
  )
}

/**
 * Component props types
 * @type { Object }
 */
TextButton.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  active: PropTypes.bool,
  textClassName: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
TextButton.defaultProps = {
  text: '',
  className: '',
  textClassName: '',
  modifiers: '',
  active: false
}

export default TextButton
