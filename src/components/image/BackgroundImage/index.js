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
 *  BackgroundImage
 *  @param  {String} options.source
 *  @param  {String} options.className
 *  @return {React.Component}
 */
const BackgroundImage = ({source, className, children, isLoaded, setRef}) => {
  /**
   *  @type {String}
   */
  const modifiedClassNames = classNames('image', className, 'background', {
    loaded: isLoaded
  })

  return (
    <div style={{backgroundImage: `url(${source})`}} className={modifiedClassNames} ref={ref => { setRef(ref) }}>
      {children}
    </div>
  )
}

BackgroundImage.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isLoaded: PropTypes.bool,
  setRef: PropTypes.func.isRequired
}

export default BackgroundImage
