/**
 * @module react
 */
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module stopPropagation
 */
import { stopPropagation } from 'utils/domutils'

/**
 *  @module TileSocialShare
 */
import TileSocialShare from 'components/tiles/TileSocialShare'

class TileFooter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showSocial: props.showSocial
    }

    this.showSocial = this.showSocial.bind(this)
    this.hideSocial = this.hideSocial.bind(this)
    this.onSocialShare = this.onSocialShare.bind(this)
  }

  componentWillReceiveProps ({ showSocial }, nextState) {
    if (showSocial !== this.props.showSocial && showSocial !== nextState.showSocial) {
      if (showSocial) {
        this.hideSocial()
      } else {
        this.showSocial()
      }
    }
  }

  showSocial () {
    this.setState({
      showSocial: true
    })
  }

  hideSocial () {
    this.setState({
      showSocial: false
    })
  }

  onSocialShare () {
    if (!this.props.allowSocialShare) {
      return false
    }

    if (this.state.showSocial) {
      return this.hideSocial()
    }

    return this.showSocial()
  }

  render () {
    const {
      className,
      modifier,
      shareText,
      id,
      allowSocialShare
    } = this.props

    const {
      showSocial
    } = this.state

    const modifiedClassNames = classNames('tile-footer', className, modifier)

    return (
      <div className={modifiedClassNames} onClick={stopPropagation}>
        <div className='tile-footer__item'>
          <Icon
            className='tile-footer__icon micro'
            modifier='heart' />
          <p className='tile-footer__text micro'></p>
        </div>
        <div className='tile-footer__item'>
          <Icon
            className='tile-footer__icon micro'
            modifier='comment' />
          <p className='tile-footer__text micro'>{this.props.commentLength}</p>
        </div>
        <div className='tile-footer__item' onClick={this.onSocialShare}>
          <Icon
            className='tile-footer__icon micro'
            modifier='share' />
        </div>
        {
          allowSocialShare
          ? (
              <TileSocialShare
                show={showSocial}
                onClose={this.hideSocial}
                shareText={shareText}
                id={id} />
            )
          : null
        }
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
TileFooter.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  showSocial: PropTypes.bool,
  shareText: PropTypes.string,
  allowSocialShare: PropTypes.bool
}

/**
 *  defaultProps
 *  @type {Object}
 */
TileFooter.defaultProps = {
  className: '',
  modifier: '',
  showSocial: false,
  shareText: '',
  allowSocialShare: true
}

/**
 *  @module TileFooter
 */
export default TileFooter
