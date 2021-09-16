/**
 * @module react
 */
import React, { Component } from 'react'

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
 *  @module TileImageContent
 */
import TileImageContent from 'components/tiles/TileImageContent'

/**
 *  @module TileVideoContent
 */
import TileVideoContent from 'components/tiles/TileVideoContent'

/**
 *  @module TileMediaContent
 */
import TileMediaContent from 'components/tiles/TileMediaContent'

/**
 *  @module TileFooter
 */
import TileFooter from 'components/tiles/TileFooter'

/**
 *  createSlides
 *  @param  {Array} images
 *  @param  {Array} videos
 *  @param  {String} rootPath
 *  @return {Array}
 */
export const createSlides = (attachments = [], rootPath) => {
  return attachments.map((attachment, index) => {
    if (attachment.type === 'video') {
      return (
        <div key={`mvideo-${index}`}>
          <TileVideoContent
            modifier={['no-margin-bottom']}
            rootPath={rootPath}
            className='multiple-popup-tile__slide'
            poster={attachment.thumbnail}
            src={attachment.path}/>
        </div>
      )
    } else {
      return (
        <div key={`mimg-${index}`}>
          <TileImageContent
            useImageTag={false}
            modifier={['no-margin-bottom', 'video-aspect']}
            rootPath={rootPath}
            className='multiple-popup-tile__slide'
            src={attachment.path}
            alt={'Horse racing'} />
        </div>
      )
    }
  })
}

/**
 *  @name MediaCarouselPopupTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
class MediaCarouselPopupTile extends Component {
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
      name,
      date,
      text,
      attachments,
      rootPath
    } = this.props

    const modifiedClassNames = classNames('multiple-popup-tile', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <TileMediaContent>
          {createSlides(attachments, rootPath)}
        </TileMediaContent>
        <div className='col-sm-12 multiple-popup-tile__container'>
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
}

/**
 *  propTypes
 *  @type {Object}
 */
MediaCarouselPopupTile.propTypes = {
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
  src: PropTypes.string,
  attachments: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    path: PropTypes.string,
    thumbnail: PropTypes.string
  }))
}

/**
 *  defaultProps
 *  @type {Object}
 */
MediaCarouselPopupTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: ''
}

/**
 *  @module MediaCarouselPopupTile
 */
export default basePopupTile(MediaCarouselPopupTile)
