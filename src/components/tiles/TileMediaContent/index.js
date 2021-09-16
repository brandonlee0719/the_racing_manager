/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Carousel
 */
import Carousel from 'components/carousel'

/**
 *  @name  MediaTileContent
 *  @param  {Object} props
 *  @return {React.Component}
 */
class MediaTileContent extends Component {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      modifier,
      children
    } = this.props

    // Modified classnames for the container div.
    const modifiedClassNames = classNames('tile-media-content', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <Carousel
          showArrows
          arrowModifier={['show-bar']}
          nextArrowModifier={['right', 'white']}
          prevArrowModifier={['white']}>
          {
            children.map((child, index) => {
              return (
                <div className='tile-media-content__slidercontainer' key={index}>
                  {child}
                </div>
              )
            })
          }
        </Carousel>
      </div>
    )
  }
}

/**
 * propTypes
 *  @type {Object}
 */
MediaTileContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

/**
 *  defaultProps
 *  @type {Object}
 */
MediaTileContent.defaultProps = {
  className: ''
}

/**
 *  @module MediaTileContent
 */
export default MediaTileContent
