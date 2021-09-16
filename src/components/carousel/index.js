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
 *  @module CarouselArrow
 */
import CarouselArrow from './CarouselArrow'

/**
 *  @module CarouselPaginationButton
 */
import CarouselPaginationButton from './CarouselPaginationButton'

/**
 *  @module CSSTransitionGroup
 */
import { CSSTransitionGroup } from 'react-transition-group'

/**
 *  @module stopPropagation
 */
import { stopPropagation } from 'utils/domutils'

/**
 *  dummy function
 */
const noop = () => {}

/**
 *  @name Carousel
 *  @class
 *  @extends {Component}
 */
class Carousel extends Component {
  /**
   *  constructor
   */
  constructor (props) {
    super(props)

    // Set initial state
    this.state = {
      currentSlide: props.slideIndex,
      dragging: false,
      frameWidth: 0,
      left: 0,
      slideCount: 0,
      slidesToScroll: props.slidesToScroll,
      slideWidth: 0,
      top: 0,
      animate: false
    }

    // Bind custom fns
    this.renderArrows = this.renderArrows.bind(this)
    this.getListStyles = this.getListStyles.bind(this)
    this.getFrameStyles = this.getFrameStyles.bind(this)
    this.getSlideStyles = this.getSlideStyles.bind(this)
    this.getSliderStyles = this.getSliderStyles.bind(this)
    this.getTouchEvents = this.getTouchEvents.bind(this)
    this.getMouseEvents = this.getMouseEvents.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSwipe = this.handleSwipe.bind(this)
    this.swipeDirection = this.swipeDirection.bind(this)
    this.autoplayIterator = this.autoplayIterator.bind(this)
    this.startAutoplay = this.startAutoplay.bind(this)
    this.resetAutoplay = this.resetAutoplay.bind(this)
    this.stopAutoplay = this.stopAutoplay.bind(this)
    this.goToSlide = this.goToSlide.bind(this)
    this.nextSlide = this.nextSlide.bind(this)
    this.prevSlide = this.prevSlide.bind(this)
    this.animateSlide = this.animateSlide.bind(this)
    this.getTargetLeft = this.getTargetLeft.bind(this)
    this.bindEvents = this.bindEvents.bind(this)
    this.onResize = this.onResize.bind(this)
    this.onReadyStateChange = this.onReadyStateChange.bind(this)
    this.unbindEvents = this.unbindEvents.bind(this)
    this.formatChildren = this.formatChildren.bind(this)
    this.setInitialDimensions = this.setInitialDimensions.bind(this)
    this.setDimensions = this.setDimensions.bind(this)
    this.setLeft = this.setLeft.bind(this)
    this.setExternalData = this.setExternalData.bind(this)
    this.getSlideTargetPosition = this.getSlideTargetPosition.bind(this)
    this.renderPrevArrow = this.renderPrevArrow.bind(this)
    this.renderNextArrow = this.renderNextArrow.bind(this)
    this.renderPagination = this.renderPagination.bind(this)

    // Custom vars
    this.touchObject = {}
    this.clickSafe = true
    this.animateTimeout = null
  }

  componentWillMount () {
    this.setInitialDimensions()
  }

  componentDidMount () {
    this.setDimensions()
    this.bindEvents()
    this.setExternalData()

    if (this.props.autoplay) {
      this.startAutoplay()
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      slideCount: nextProps.children.length
    })

    this.setDimensions(nextProps)

    if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide) {
      this.goToSlide(nextProps.slideIndex)
    }

    if (this.props.autoplay !== nextProps.autoplay) {
      if (nextProps.autoplay) {
        this.startAutoplay()
      } else {
        this.stopAutoplay()
      }
    }
  }

  componentWillUnmount () {
    this.unbindEvents()
    this.stopAutoplay()
  }

  /**
   *  getListStyles
   *  @description Will set the styles on the moving slider list.
   *  @return {Object}
   */
  getListStyles () {
    const {
      children,
      cellSpacing,
      vertical
    } = this.props

    const {
      slideWidth,
      left,
      top
    } = this.state

    const listWidth = slideWidth * React.Children.count(children)
    const spacingOffset = cellSpacing * React.Children.count(children)

    return {
      margin: vertical ? (cellSpacing / 2) * -1 + 'px 0px'
                                  : '0px ' + (cellSpacing / 2) * -1 + 'px',
      width: vertical ? 'auto' : listWidth + spacingOffset,
      touchAction: vertical ? 'pan-x' : 'pan-y',
      marginLeft: `${left}px`
    }
  }

  /**
   *  getFrameStyles
   *  @description Returns styles for the frame of the carousel
   *  @return {Object}
   */
  getFrameStyles () {
    const {
      frameOverflow,
      vertical,
      framePadding
    } = this.props

    const {
      frameWidth
    } = this.state

    return {
      overflow: frameOverflow,
      height: vertical ? frameWidth || 'initial' : 'auto',
      margin: framePadding
    }
  }

  /**
   *  getSlideStyles
   *  @description Get the styles for each slide.
   *  @param  {Number} index
   *  @param  {Number} positionValue
   *  @return {Object}
   */
  getSlideStyles (index, positionValue) {
    // const targetPosition = this.getSlideTargetPosition(index, positionValue)

    const {
      vertical,
      cellSpacing
    } = this.props

    const {
      slideWidth
    } = this.state

    return {
      // left: vertical ? 0 : targetPosition,
      // top: vertical ? targetPosition : 0,
      display: vertical ? 'block' : 'inline-block',
      width: vertical ? '100%' : slideWidth,
      marginLeft: vertical ? 'auto' : cellSpacing / 2,
      marginRight: vertical ? 'auto' : cellSpacing / 2,
      marginTop: vertical ? cellSpacing / 2 : 'auto',
      marginBottom: vertical ? cellSpacing / 2 : 'auto'
    }
  }

  /**
   *  getSliderStyles
   *  @return {Object}
   */
  getSliderStyles () {
    const {
      width
    } = this.props

    const {
      slideWidth
    } = this.state

    return {
      width: width,
      visibility: slideWidth ? 'visible' : 'hidden'
    }
  }

  /**
   *  getTouchEvents
   *  @description Will create touch events for moving the carousel on mobile.
   *  @return {Object}
   */
  getTouchEvents () {
    const {
      swiping
    } = this.props

    if (swiping === false) {
      return null
    }

    return {
      onTouchStart: (e) => {
        clearTimeout(this.animateTimeout)

        this.touchObject = {
          startX: e.touches[0].pageX,
          startY: e.touches[0].pageY
        }
        this.handleMouseOver()
      },
      onTouchMove: (e) => {
        const direction = this.swipeDirection(
          this.touchObject.startX,
          e.touches[0].pageX,
          this.touchObject.startY,
          e.touches[0].pageY
        )

        if (direction !== 0) {
          e.preventDefault()
        }

        const length = this.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - this.touchObject.startY, 2)))
                                           : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - this.touchObject.startX, 2)))

        this.touchObject = {
          startX: this.touchObject.startX,
          startY: this.touchObject.startY,
          endX: e.touches[0].pageX,
          endY: e.touches[0].pageY,
          length: length,
          direction: direction
        }

        this.setState({
          left: this.props.vertical ? 0 : this.getTargetLeft(this.touchObject.length * this.touchObject.direction),
          top: this.props.vertical ? this.getTargetLeft(this.touchObject.length * this.touchObject.direction) : 0,
          animate: false
        })
      },
      onTouchEnd: (e) => {
        this.handleSwipe(e)
        this.handleMouseOut()
      },
      onTouchCancel: (e) => {
        this.handleSwipe(e)
      }
    }
  }

  /**
   *  getMouseEvents
   *  @description Bind mouse events for moving the carousel
   *  @return {Object}
   */
  getMouseEvents () {
    const {
      dragging
    } = this.props

    if (dragging === false) {
      return null
    }

    return {
      onMouseOver: () => {
        this.handleMouseOver()
      },
      onMouseOut: () => {
        this.handleMouseOut()
      },
      onMouseDown: (e) => {
        clearTimeout(this.animateTimeout)

        this.touchObject = {
          startX: e.clientX,
          startY: e.clientY
        }

        this.setState({
          dragging: true
        })
      },
      onMouseMove: (e) => {
        if (!this.state.dragging) {
          return
        }

        var direction = this.swipeDirection(
          this.touchObject.startX,
          e.clientX,
          this.touchObject.startY,
          e.clientY
        )

        if (direction !== 0) {
          e.preventDefault()
        }

        var length = this.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - this.touchObject.startY, 2)))
                                         : Math.round(Math.sqrt(Math.pow(e.clientX - this.touchObject.startX, 2)))

        this.touchObject = {
          startX: this.touchObject.startX,
          startY: this.touchObject.startY,
          endX: e.clientX,
          endY: e.clientY,
          length: length,
          direction: direction
        }

        this.setState({
          left: this.props.vertical ? 0 : this.getTargetLeft(this.touchObject.length * this.touchObject.direction),
          top: this.props.vertical ? this.getTargetLeft(this.touchObject.length * this.touchObject.direction) : 0,
          animate: false
        })
      },
      onMouseUp: (e) => {
        if (!this.state.dragging) {
          return
        }

        this.handleSwipe(e)
      },
      onMouseLeave: (e) => {
        if (!this.state.dragging) {
          return
        }

        this.handleSwipe(e)
      }
    }
  }

  /**
   *  handleMouseOver
   *  @description If the user is hovering over the carousel, stop the auto carousel.
   */
  handleMouseOver () {
    if (this.props.autoplay) {
      this.autoplayPaused = true
      this.stopAutoplay()
    }
  }

  /**
   *  handleMouseOver
   *  @description If the user is not hovering over the carousel, and autoplay is true, then play the auto carousel.
   */
  handleMouseOut () {
    if (this.props.autoplay && this.autoplayPaused) {
      this.startAutoplay()
      this.autoplayPaused = null
    }
  }

  /**
   *  handleClick
   *  @param  {Event} e
   *  @description Prevent default / propagations.
   */
  handleClick (e) {
    if (this.state.dragging || this.clickSafe) {
      stopPropagation(e)
    }

    if (this.clickSafe === true) {
      e.preventDefault()
    }
  }

  /**
   *  handleSwipe
   *  @param  {Event} e
   *  @description Handles the logic for moving the carousel.
   */
  handleSwipe (e) {
    if (typeof this.touchObject.length !== 'undefined' && this.touchObject.length > 44) {
      this.clickSafe = true
    } else {
      this.clickSafe = false
    }

    let slidesToShow = this.props.slidesToShow

    const snap = (this.state.slideWidth + this.props.cellSpacing)

    if (this.props.slidesToScroll === 'auto') {
      slidesToShow = this.state.slidesToScroll
    }

    if (this.touchObject.length > (this.state.slideWidth / slidesToShow) / 5) {
      if (this.touchObject.direction === 1) {
        if (
          this.state.currentSlide >= React.Children.count(this.props.children) - slidesToShow &&
          !this.props.wrapAround
        ) {
          this.animateSlide()
        } else {
          // this.nextSlide()

          // find the target slide to go to based on the length of the swipe / drag
          const target = Math.min(Math.round((this.state.slideWidth + this.touchObject.length) / snap) + this.state.currentSlide, React.Children.count(this.props.children) - slidesToShow)

          this.goToSlide(target)
        }
      } else if (this.touchObject.direction === -1) {
        if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
          this.animateSlide()
        } else {
          // this.prevSlide()

          // find the target slide to go to based on the length of the swipe / drag
          const target = Math.max(-Math.round((this.state.slideWidth + this.touchObject.length) / snap) + this.state.currentSlide, 0)
          this.goToSlide(target)
        }
      }
    } else {
      this.goToSlide(this.state.currentSlide)
    }

    this.touchObject = {}

    this.setState({
      dragging: false
    })
  }

  /**
   *  swipeDirection
   *  @description Get the direction the user is moving in.
   *  @param  {Number} x1
   *  @param  {Number} x2
   *  @param  {Number} y1
   *  @param  {Number} y2
   *  @return {Number}
   */
  swipeDirection (x1, x2, y1, y2) {
    let xDist
    let yDist
    let r
    let swipeAngle

    xDist = x1 - x2
    yDist = y1 - y2
    r = Math.atan2(yDist, xDist)

    swipeAngle = Math.round(r * 180 / Math.PI)
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle)
    }
    if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
      return 1
    }
    if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
      return 1
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
      return -1
    }
    if (this.props.vertical === true) {
      if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
        return 1
      } else {
        return -1
      }
    }
    return 0
  }

  /**
   *  autoplayIterator
   *  @description Will either loop the carousel back to the beginning or stop if it reaches the end.
   */
  autoplayIterator () {
    if (this.props.wrapAround) {
      return this.nextSlide()
    }
    if (this.state.currentSlide !== this.state.slideCount - this.state.slidesToShow) {
      this.nextSlide()
    } else {
      this.stopAutoplay()
    }
  }

  /**
   *  startAutoplay
   *  @description Will start the carousel.
   */
  startAutoplay () {
    this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval)
  }

  /**
   *  resetAutoplay
   *  @description Will reset the autoplay.
   */
  resetAutoplay () {
    if (this.props.autoplay && !this.autoplayPaused) {
      this.stopAutoplay()
      this.startAutoplay()
    }
  }

  /**
   *  stopAutoplay
   *  @description Will stop the autplay.
   */
  stopAutoplay () {
    this.autoplayID && clearInterval(this.autoplayID)
  }

  /**
   *  goToSlide
   *  @description Will go to a specific slide with a passed in index.
   *               User can also cancel callbacks.
   *  @param  {Number}  index
   *  @param  {Boolean} hasCb
   */
  goToSlide (index, hasCb = true) {
    let self = this

    if ((index >= React.Children.count(this.props.children) || index < 0)) {
      if (!this.props.wrapAround) { return }
      if (index >= React.Children.count(this.props.children)) {
        if (hasCb) {
          this.props.beforeSlide(this.state.currentSlide, 0)
        }
        return this.setState({
          currentSlide: 0
        }, function () {
          self.animateSlide(self.getTargetLeft(null, index), function () {
            self.animateSlide(null, 0.01)
            if (hasCb) {
              self.props.afterSlide(0)
            }
            self.resetAutoplay()
            self.setExternalData()
          })
        })
      } else {
        let endSlide = React.Children.count(this.props.children) - this.state.slidesToScroll
        if (hasCb) {
          this.props.beforeSlide(this.state.currentSlide, endSlide)
        }
        return this.setState({
          currentSlide: endSlide
        }, function () {
          self.animateSlide(self.getTargetLeft(null, index), function () {
            self.animateSlide(null, 0.01)
            if (hasCb) {
              self.props.afterSlide(endSlide)
            }
            self.resetAutoplay()
            self.setExternalData()
          })
        })
      }
    }

    if (hasCb) {
      this.props.beforeSlide(this.state.currentSlide, index)
    }

    this.setState({
      currentSlide: index
    }, function () {
      self.animateSlide()
      if (hasCb) {
        this.props.afterSlide(index)
      }
      self.resetAutoplay()
      self.setExternalData()
    })
  }

  /**
   *  nextSlide
   *  @description Will go to the next slide in the carousel
   */
  nextSlide () {
    let childrenCount = React.Children.count(this.props.children)
    let slidesToShow = this.props.slidesToShow
    if (this.props.slidesToScroll === 'auto') {
      slidesToShow = this.state.slidesToScroll
    }
    if (this.state.currentSlide >= childrenCount - slidesToShow && !this.props.wrapAround) {
      return
    }

    if (this.props.wrapAround) {
      this.goToSlide(this.state.currentSlide + this.state.slidesToScroll)
    } else {
      if (this.props.slideWidth !== 1) {
        return this.goToSlide(this.state.currentSlide + this.state.slidesToScroll)
      }
      this.goToSlide(
        Math.min(this.state.currentSlide + this.state.slidesToScroll, childrenCount - slidesToShow)
      )
    }
  }

  /**
   *  prevSlide
   *  @description Will go to the previous slide in the carousel
   */
  prevSlide () {
    if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
      return
    }

    if (this.props.wrapAround) {
      this.goToSlide(this.state.currentSlide - this.state.slidesToScroll)
    } else {
      this.goToSlide(Math.max(0, this.state.currentSlide - this.state.slidesToScroll))
    }
  }

  /**
   *  animateSlide
   *  @description Will set the new left / top and an animate flag to move the carousel smoothley.
   */
  animateSlide (endValue, callback) {
    this.setState({
      [this.props.vertical ? 'top' : 'left']: endValue || this.getTargetLeft(),
      animate: true
    })

    this.animateTimeout = setTimeout(() => {
      if (typeof callback === 'function') {
        callback()
      }
    }, 1000)
  }

  /**
   *  getTargetLeft
   *  @description Will get the value to move the carousel.
   *  @param  {Number} touchOffset
   *  @param  {Number} slide
   *  @return {Number}
   */
  getTargetLeft (touchOffset, slide) {
    let offset
    let target = slide || this.state.currentSlide

    switch (this.props.cellAlign) {
      case 'left': {
        offset = 0
        offset -= this.props.cellSpacing * (target)
        break
      }
      case 'center': {
        offset = (this.state.frameWidth - this.state.slideWidth) / 2
        offset -= this.props.cellSpacing * (target)
        break
      }
      case 'right': {
        offset = this.state.frameWidth - this.state.slideWidth
        offset -= this.props.cellSpacing * (target)
        break
      }
    }

    let left = this.state.slideWidth * target

    let lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount

    if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
      left = (this.state.slideWidth * this.state.slideCount) - this.state.frameWidth
      offset = 0
      offset -= this.props.cellSpacing * (this.state.slideCount - 1)
    }

    offset -= touchOffset || 0

    return (left - offset) * -1
  }

  /**
   *  bindEvents
   *  @description Will add events for resizing the carousel.
   */
  bindEvents () {
    window.addEventListener('resize', this.onResize, false)
    document.addEventListener('readystatechange', this.onReadyStateChange, false)
  }

  /**
   *  onResize
   */
  onResize () {
    this.setState({
      animate: false
    })

    this.setDimensions()
  }

  /**
   *  onReadyStateChange
   */
  onReadyStateChange () {
    this.setState({
      animate: false
    })

    this.setDimensions()
  }

  /**
   *  unbindEvents
   */
  unbindEvents () {
    window.removeEventListener('resize', this.onResize, false)
    document.removeEventListener('readystatechange', this.onReadyStateChange, false)
  }

  /**
   *  formatChildren
   *  @description Will format the children to carousel friendly elements.
   *  @param  {Array} children
   */
  formatChildren (children) {
    const {
      vertical
    } = this.props

    const {
      top,
      left,
      currentSlide
    } = this.state

    const positionValue = vertical ? top : left

    return React.Children.map(children, (child, index) => {
      const className = classNames('nica-carousel__slide', '', {
        'active': index === currentSlide
      })
      return (
        <li
          onClick={ e => {
            if (!this.clickSafe) {
              this.handleClick(e)
              this.goToSlide(index)
            }
          }}
          className={className}
          style={this.getSlideStyles(index, positionValue)}
          key={index}>
          {child}
        </li>
      )
    })
  }

  /**
   *  setInitialDimensions
   *  @description Will set the initial size of the carousel
   */
  setInitialDimensions () {
    const {
      vertical,
      initialSlideHeight,
      initialSlideWidth,
      slidesToShow,
      cellSpacing,
      children
    } = this.props

    let slideWidth
    let frameHeight
    let slideHeight

    slideWidth = vertical ? (initialSlideHeight || 0) : (initialSlideWidth || 0)
    slideHeight = initialSlideHeight ? (initialSlideHeight * slidesToShow) : 0

    frameHeight = slideHeight + (cellSpacing * (slidesToShow - 1))

    this.setState({
      slideHeight: slideHeight,
      frameWidth: vertical ? frameHeight : '100%',
      slideCount: React.Children.count(children),
      slideWidth: slideWidth
    }, () => {
      this.setLeft()
      this.setExternalData()
    })
  }

  /**
   *  setDimensions
   *  @description Will be called on resize or initial mount. To resize the carousel.
   *  @param {Object} props
   */
  setDimensions (props) {
    props = props || this.props

    let slideWidth
    let slidesToScroll
    let firstSlide
    let frame
    let frameWidth
    let frameHeight
    let slideHeight

    let bSlideWidth = props.slideWidth

    if (props.breakPoints) {
      for (let point in props.breakPoints) {
        if (parseInt(point) >= window.innerWidth) {
          bSlideWidth = props.breakPoints[point].slideWidth
          break
        }
      }
    }

    slidesToScroll = props.slidesToScroll

    frame = this.refs.frame

    firstSlide = frame.childNodes[0].childNodes[0]

    if (firstSlide) {
      firstSlide.style.height = 'auto'
      slideHeight = this.props.vertical
      ? firstSlide.offsetHeight * props.slidesToShow
      : firstSlide.offsetHeight
    } else {
      slideHeight = 100
    }

    if (typeof bSlideWidth !== 'number') {
      slideWidth = parseInt(bSlideWidth)
    } else {
      if (props.vertical) {
        slideWidth = (slideHeight / props.slidesToShow) * bSlideWidth
      } else {
        slideWidth = (frame.offsetWidth / props.slidesToShow) * bSlideWidth
      }
    }

    if (!props.vertical) {
      slideWidth -= props.cellSpacing * ((100 - (100 / props.slidesToShow)) / 100)
    }

    frameHeight = slideHeight + (props.cellSpacing * (props.slidesToShow - 1))
    frameWidth = props.vertical ? frameHeight : frame.offsetWidth

    if (props.slidesToScroll === 'auto') {
      slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing))
    }

    this.setState({
      slideHeight: slideHeight,
      frameWidth: frameWidth,
      slideWidth: slideWidth,
      slidesToScroll: slidesToScroll,
      left: props.vertical ? 0 : this.getTargetLeft(),
      top: props.vertical ? this.getTargetLeft() : 0
    }, () => {
      this.setLeft()
    })
  }

  /**
   *  setLeft
   *  @description Will set the position of the slider.
   */
  setLeft () {
    this.setState({
      left: this.props.vertical ? 0 : this.getTargetLeft(),
      top: this.props.vertical ? this.getTargetLeft() : 0
    })
  }

  /**
   *  setExternalData
   */
  setExternalData () {
    if (this.props.data) {
      this.props.data()
    }
  }

  /**
   *  getSlideTargetPosition
   *  @param  {Number} index
   *  @param  {Number} positionValue
   *  @return {Number}
   */
  getSlideTargetPosition (index, positionValue) {
    var slidesToShow = (this.state.frameWidth / this.state.slideWidth)
    var targetPosition = (this.state.slideWidth + this.props.cellSpacing) * index
    var end = ((this.state.slideWidth + this.props.cellSpacing) * slidesToShow) * -1

    if (this.props.wrapAround) {
      var slidesBefore = Math.ceil(positionValue / (this.state.slideWidth))
      if (this.state.slideCount - slidesBefore <= index) {
        return (this.state.slideWidth + this.props.cellSpacing) *
          (this.state.slideCount - index) * -1
      }

      var slidesAfter = Math.ceil((Math.abs(positionValue) - Math.abs(end)) / this.state.slideWidth)

      if (this.state.slideWidth !== 1) {
        slidesAfter = Math.ceil((Math.abs(positionValue) - (this.state.slideWidth)) / this.state.slideWidth)
      }

      if (index <= slidesAfter - 1) {
        return (this.state.slideWidth + this.props.cellSpacing) * (this.state.slideCount + index)
      }
    }

    return targetPosition
  }

  renderArrows () {
    const {
      showArrows,
      arrowModifier
    } = this.props

    if (!showArrows) {
      return null
    }

    const modifiedClassNames = classNames('nica-carousel__arrows', '', arrowModifier)

    return (
      <div className={modifiedClassNames}>
        {this.renderPrevArrow()}
        {this.renderNextArrow()}
      </div>
    )
  }

  /**
   *  renderPrevArrow
   *  @return {React.Component}
   */
  renderPrevArrow () {
    const {
      prevArrow,
      prevArrowClassName,
      prevArrowModifier
    } = this.props

    const {
      currentSlide
    } = this.state

    if (currentSlide <= 0) {
      return null
    }

    if (prevArrow && React.isValidElement(prevArrow)) {
      return React.createElement(prevArrow, this.props)
    }

    const className = classNames('nica-carousel__prev-arrow', prevArrowClassName)

    return (
      <CarouselArrow
        className={className}
        modifier={prevArrowModifier}
        iconModifier={['leftarrow']}
        onClick={ e => {
          this.handleClick(e)
          this.prevSlide()
        }} />
    )
  }

  /**
   *  renderNextArrow
   *  @return {React.Component}
   */
  renderNextArrow () {
    const {
      nextArrow,
      nextArrowClassName,
      nextArrowModifier
    } = this.props

    const {
      currentSlide,
      slideCount
    } = this.state

    if (currentSlide >= (slideCount - 1)) {
      return null
    }

    if (nextArrow && React.isValidElement(nextArrow)) {
      return React.createElement(nextArrow, this.props)
    }

    const className = classNames('nica-carousel__next-arrow', nextArrowClassName)

    return (
      <CarouselArrow
        className={className}
        modifier={nextArrowModifier}
        iconModifier={['rightarrow']}
        onClick={ e => {
          this.handleClick(e)
          this.nextSlide()
        }}/>
    )
  }

  /**
   *  renderPagination
   *  @return {React.Component}
   */
  renderPagination () {
    const {
      showPagination,
      pagination,
      paginationClassName,
      children
    } = this.props

    const {
      currentSlide
    } = this.state

    if (!showPagination) {
      return null
    }

    if (pagination && React.isValidElement(pagination)) {
      return React.createElement(pagination, this.props)
    }

    const className = classNames('nica-carousel__pagination', paginationClassName)

    return (
      <CarouselPaginationButton
        className={className}
        length={React.Children.count(children)}
        activeIndex={currentSlide} />
    )
  }

  render () {
    const {
      children,
      containerClassName,
      frameClassName
    } = this.props

    const {
      animate
    } = this.state

    // Format the children for the slides.
    const slideChildren = React.Children.count(children) >= 1
          ? this.formatChildren(children)
          : children

    // Class names for the container
    const containerClassNames = classNames('nica-carousel', containerClassName)

    // Class names for the frame
    const frameClassNames = classNames('nica-carousel__frame', frameClassName)

    // Classnames for the list.
    const listClassNames = classNames('nica-carousel__list', '', {
      animate
    })

    return (
      <div className={containerClassNames} style={this.getSliderStyles()} ref='slider'>
        <div
          ref='frame'
          className={frameClassNames}
          style={this.getFrameStyles()}
          {...this.getTouchEvents()}
          {...this.getMouseEvents()}
          onClickCapture={this.handleClick}>
          <ul className={listClassNames} style={this.getListStyles()} ref='list'>
            <CSSTransitionGroup
                transitionName="fade-in"
                transitionEnterTimeout={400}
                transitionAppearTimeout={400}
                transitionLeaveTimeout={400}>
              {slideChildren}
            </CSSTransitionGroup>
          </ul>
        </div>
        {this.renderArrows()}
        {this.renderPagination()}
      </div>
    )
  }
}

/**
 *  propTypes
 *  @return {Object}
 */
Carousel.propTypes = {
  afterSlide: PropTypes.func,
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  beforeSlide: PropTypes.func,
  cellAlign: PropTypes.oneOf(['left', 'center', 'right']),
  cellSpacing: PropTypes.number,
  data: PropTypes.func,
  dragging: PropTypes.bool,
  framePadding: PropTypes.string,
  frameOverflow: PropTypes.string,
  initialSlideHeight: PropTypes.number,
  initialSlideWidth: PropTypes.number,
  slideIndex: PropTypes.number,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['auto'])
  ]),
  slideWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  speed: PropTypes.number,
  swiping: PropTypes.bool,
  vertical: PropTypes.bool,
  width: PropTypes.string,
  wrapAround: PropTypes.bool,
  containerClassName: PropTypes.string,
  frameClassName: PropTypes.string,
  showArrows: PropTypes.bool,
  showPagination: PropTypes.bool,
  paginationClassName: PropTypes.string,
  nextArrowModifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  nextArrowClassName: PropTypes.string,
  prevArrowModifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  prevArrowClassName: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
Carousel.defaultProps = {
  afterSlide: noop,
  autoplay: false,
  autoplayInterval: 3000,
  beforeSlide: noop,
  cellAlign: 'left',
  cellSpacing: 0,
  data: noop,
  dragging: true,
  framePadding: '0px',
  frameOverflow: 'hidden',
  slideIndex: 0,
  slidesToScroll: 1,
  slidesToShow: 1,
  slideWidth: 1,
  speed: 400,
  swiping: true,
  vertical: false,
  width: '100%',
  wrapAround: false,
  breakPoints: null,
  showPagination: false,
  showArrows: false,
  paginationClassName: '',
  nextArrowModifier: ['right', 'nobg', 'white'],
  nextArrowClassName: '',
  prevArrowModifier: ['left', 'nobg', 'white'],
  prevArrowClassName: ''
}

/**
 *  @module Carousel
 */
export default Carousel
