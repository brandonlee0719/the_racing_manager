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
 *  @module TileImageContent
 */
import TileImageContent from 'components/tiles/TileImageContent'

/**
 *  @module TileTitle
 */
import TileTitle from 'components/tiles/TileTitle'

/**
 *  @name NewsPopupTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const NewsPopupByIdTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    src,
    title,
    rootPath,
  } = props

  const modifiedClassNames = classNames('each-news-popup-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <TileImageContent
        rootPath={rootPath}
        useImageTag={false}
        src={src}/>
      <div className='each-news-popup-tile__container'>
        <TileHeader
          name={name}
          date={date} />

        <div className='row'>
          <div className='col-xs-12 col-sm-10 col-sm-push-1 col-md-10'>
            <TileTitle
              title={title} />
            <TileContent
              text={text} />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
NewsPopupByIdTile.propTypes = {
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
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  src: PropTypes.string,
  id: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
NewsPopupByIdTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: '',
  src: ''
}

/**
 *  @module NewsPopupTile
 */
export default basePopupTile(NewsPopupByIdTile)
