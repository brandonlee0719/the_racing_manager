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
 * ImageButton component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const ImageButton = props => {
  const { className, imageSrc } = props

  const modifiedClassNames = classNames('image-button', 'image-background', className)

  return (
    Button({
      ...props,
      className: modifiedClassNames,
      style: { backgroundImage: `url(assets/${imageSrc})` }
    })
  )
}

/**
 * Component props types
 * @type { Object }
 */
ImageButton.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 * Default component props
 * @type { Object }
 */
ImageButton.defaultProps = {
  imageSrc: ''
}

export default ImageButton
