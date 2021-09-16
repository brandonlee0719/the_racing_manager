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
 *  Image
 *  @param  {String} options.source
 *  @param  {String} options.className
 *  @return {React.Component}
 */
const Image = ({source, className, alt, isLoaded, setRef}) => {
  const modifiedClassNamesContainer = classNames('image-container', '', {
    loaded: isLoaded
  })

  /**
   *  @type {String}
   */
  const modifiedClassNames = classNames('image-container__image', className, 'normal')

  return (
    <span className={modifiedClassNamesContainer}>
      <img src={source} alt={alt} className={modifiedClassNames} ref={ref => { setRef(ref) }} />
    </span>
  )
}

Image.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isLoaded: PropTypes.bool,
  setRef: PropTypes.func.isRequired
}

export default Image
