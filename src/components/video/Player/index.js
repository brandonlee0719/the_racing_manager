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
 *  @module PlayButton
 */
import PlayButton from 'components/video/Button'

/**
 *  @module isInViewport
 */
import { isInViewport } from 'utils/imageutils'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

import ReactJWPlayer from 'react-jw-player'

import { PLAYERSCRIPT } from 'data/consts'
/**
 *  @class
 *  @name Player
 *  @extends {Component}
 */
class Player extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      showPlayButton: true
    }

    // Local variables
    this.videoRef = null
    this.mounted = false

    // Bind custom fns
    this.toggleVideo = this.toggleVideo.bind(this)
    this.playVideo = this.playVideo.bind(this)
    this.pauseVideo = this.pauseVideo.bind(this)
    this.bindScrollEvent = this.bindScrollEvent.bind(this)
    this.unBindScrollEvent = this.unBindScrollEvent.bind(this)
    this.checkViewport = this.checkViewport.bind(this)

    this.debouncedResize = debounce(this.checkViewport)
  }

  componentDidMount () {
    this.mounted = true
    this.checkViewport()
    this.bindScrollEvent()
  }

  componentWillUnmount () {
    this.mounted = false
    // Unbind scroll event
    this.unBindScrollEvent()
    this.debouncedResize = null
  }

  componentWillReceiveProps () {
    this.checkViewport()
  }

  /**
   *  @name bindScrollEvent
   */
  bindScrollEvent () {
    window.addEventListener('scroll', this.debouncedResize, false)
  }

  /**
   *  @name unBindScrollEvent
   */
  unBindScrollEvent () {
    window.removeEventListener('scroll', this.debouncedResize, false)
  }

  /**
   *  @name checkViewport
   */
  checkViewport () {
    if (!this.videoRef || !this.mounted) {
      return false
    }

    if (!isInViewport(this.videoRef)) {
      this.pauseVideo()
    } else
    if (this.props.autoPlay) {
      this.playVideo()
    }
    return null
  }

  /**
   *  toggleVideo
   *  @param {Object} event
   *  @description Will toggle the video between playing and pausing
   *  @return {Void}
   */
  toggleVideo (event) {
    if (event) {
      event.stopPropagation()
    }

    if (this.state.showPlayButton) {
      this.playVideo()
    } else {
      this.pauseVideo()
    }
  }

  /**
   *  playVideo
   *  @description Will play the video
   */
  playVideo () {
    this.videoRef.play()

    this.setState({
      showPlayButton: false
    })
  }

  /**
   *  pauseVideo
   *  @description Will play the video
   */
  pauseVideo () {
    this.videoRef.pause()

    this.setState({
      showPlayButton: true
    })
  }

  handleChildClick (e) {
    e.stopPropagation()
  }

  render () {
    const {
      children,
      className,
      modifier,
      loop,
      muted,
      playsInline,
      src,
      poster,
      preload,
      playerId
    } = this.props

    const {
      showPlayButton
    } = this.state

    // Constructs classnames from the base name
    const modifiedClassNames = classNames('video', className, modifier)

    return (
      <div className={modifiedClassNames} onClick={this.handleChildClick}>
        <ReactJWPlayer
          playerId='unique_id'
          playerScript={PLAYERSCRIPT}
          file={src}
        />
      </div>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
Player.defaultProps = {
  className: '',
  modifier: '',
  loop: true,
  preload: 'none',
  autoPlay: false,
  playsInline: true,
  poster: ''
}

/**
 *  propTypes
 *  @type {Object}
 */
Player.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  autoPlay: PropTypes.bool,
  playsInline: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
  preload: PropTypes.oneOf([
    'auto', 'metadata', 'none'
  ])
}

/**
 *  @module Player
 */
export default Player
