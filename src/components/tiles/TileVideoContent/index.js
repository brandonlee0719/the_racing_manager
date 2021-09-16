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
 *  @module Player
 */
import { Player } from 'components/video'

/**
 *  TileVideoContent
 *  @param  {Object} props
 *  @return {React.Component}
 */
const TileVideoContent = props => {
  const {
    rootPath,
    src,
    className,
    modifier,
    poster
  } = props

  const modifiedClassNames = classNames('tile-video-content', className, modifier)

  return (
    <div className={modifiedClassNames}>
        <Player 
          poster={`${rootPath}${poster}`}
          src={`${rootPath}${src}`}/>
      </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TileVideoContent.propTypes = {
  rootPath: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  poster: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileVideoContent.defaultProps = {
  poster: '',
  className: ''
}

/**
 *  @module TileVideoContent
 */
export default TileVideoContent
