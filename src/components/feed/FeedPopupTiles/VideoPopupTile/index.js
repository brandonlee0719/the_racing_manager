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
 *  @module basePopupTile
 */
import basePopupTile from 'components/tiles/BasePopupTile'

/**
 *  @module TileHeader
 */
import TileHeader from 'components/tiles/TileHeader'

/**
 *  @module TileContent
 */
import TileContent from 'components/tiles/TileContent'

/**
 *  @module TileVideoContent
 */
import TileVideoContent from 'components/tiles/TileVideoContent'

/**
 *  @module TileFooter
 */
import TileFooter from 'components/tiles/TileFooter'

/**
 *  @name VideoPopupTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const VideoPopupTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    poster,
    src,
    rootPath
  } = props

  const modifiedClassNames = classNames('video-popup-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileVideoContent
        poster={poster}
        src={src}
        rootPath={rootPath} />
      <div className='col-sm-12 video-popup-tile__container'>
        <TileHeader
          name={name}
          date={date} />
        <TileContent
          text={text} />
        <TileFooter
          shareText={text} />
      </div>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
VideoPopupTile.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string,
  date: PropTypes.string,
  src: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
VideoPopupTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: '',
  poster: ''
}

/**
 *  @module VideoPopupTile
 */
export default basePopupTile(VideoPopupTile)
