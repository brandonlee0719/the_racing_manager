/**
 *  @module React
 */
import React from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  CarouselArrow
 *  @param  {String} options.className
 *  @param  {String} options.modifier
 *  @param  {Function} options.onClick
 *  @return {Component}
 */
const CarouselArrow = (props) => {
  const {
    className,
    modifier,
    onClick,
    iconModifier
  } = props

  // class names for the container
  const modifiedClassNames = classNames('carousel-arrow', className, modifier)

  return (
    <div className={modifiedClassNames} onClick={onClick}>
      <Icon
        modifier={iconModifier}/>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
CarouselArrow.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  iconModifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onClick: PropTypes.func
}

/**
 *  defaultProps
 *  @type {Object}
 */
CarouselArrow.defaultProps = {
}

/**
 *  @module CarouselArrow
 */
export default CarouselArrow
