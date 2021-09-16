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
 *  @module TileFooter
 */
import TileFooter from 'components/tiles/TileFooter'

/**
 *  @name TextPopupTile
 *  @param  {Object} props
 *  @return {React.Component}
 */
const TextPopupTile = props => {
  const {
    className,
    modifier,
    name,
    date,
    text,
    commentLength
  } = props

  const modifiedClassNames = classNames('text-popup-tile', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='col-sm-12 text-popup-tile__container'>
        <TileHeader
          className='text-popup-tile__heading'
          name={name}
          date={date} />
        <TileContent
          text={text} />
        <TileFooter
          commentLength={commentLength}
          shareText={text} />
      </div>
    </div>
  )
}

/**
 *  propTypes
 *  @type {Object}
 */
TextPopupTile.propTypes = {
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
}

/**
 *  defaultProps
 *  @type {Object}
 */
TextPopupTile.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  date: '',
  text: ''
}

/**
 *  @module TextPopupTile
 */
export default basePopupTile(TextPopupTile)
