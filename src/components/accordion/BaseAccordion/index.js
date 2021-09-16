/**
 * @module React, React.Copmonent
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module cssAnimation
 */
import cssAnimation from 'css-animation'

/**
 *  animate
 *  @param  {DOMElement}   node
 *  @param  {Boolean}   show
 *  @param  {String}   transitionName
 *  @param  {Function} done
 *  @return {Function}
 */
export const animate = (node, show, offset, transitionName, done, initial = false) => {
  /**
   *  @private
   *  @type {Number | NULL}
   */
  let height

  return cssAnimation(node, transitionName, {
    start () {
      if (!show && !initial) {
        node.style.height = `${node.scrollHeight}px`
      } else {
        height = node.scrollHeight
        node.style.height = `${Math.min(node.scrollHeight, offset)}px`
      }
    },
    active () {
      node.style.height = `${show ? height : Math.min(node.scrollHeight, offset)}px`
    },
    end () {
      if (show) {
        node.style.height = 'auto'
      } else {
        node.style.height = `${Math.min(node.scrollHeight, offset)}px`
      }
      done()
    }
  })
}

/**
 *  animation
 *  @param  {String} prefixCls
 *  @description Start, enter and leave transitions
 *  @return {Object}
 */
export const animation = prefixCls => {
  return {
    start (node, { initialShow, offset }, done) {
      return animate(node, initialShow, offset, `${prefixCls}--noanim`, done, true)
    },
    enter (node, { offset }, done) {
      return animate(node, true, offset, `${prefixCls}--anim`, done)
    },
    leave (node, { offset }, done) {
      return animate(node, false, offset, `${prefixCls}--anim`, done)
    }
  }
}

/**
 * Accordion
 * @type { Object }
 * @extends { React.Component }
 */
class Accordion extends Component {
  /**
   *  @constructor
   */
  constructor () {
    super()

    // Bind private functions
    this._initialShow = this._initialShow.bind(this)
    this._showContent = this._showContent.bind(this)
    this._hideContent = this._hideContent.bind(this)

    // Store an instance of animation with the BEM class for adding animation transition classes
    this.animation = animation('accordion')
  }

  componentDidMount () {
    this._initialShow()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      if (nextProps.isOpen) {
        setTimeout(() => { this._showContent() }, 0)
      } else {
        setTimeout(() => { this._hideContent() }, 0)
      }
    }
  }

  /**
   *  @private
   *  @function
   *  @description Will show the initial accordion height without transitions
   *  @return {Void}
   */
  _initialShow () {
    const {
      isOpen,
      offset
    } = this.props

    const initialShow = isOpen

    this.animation.start(this.root, { initialShow, offset }, () => {})
  }

  /**
   *  @private
   *  @function
   *  @description Will animate the accordion to the full height
   *  @return {Void}
   */
  _showContent () {
    const {
      offset
    } = this.props

    this.animation.enter(this.root, { offset }, () => {})
  }

  /**
   *  @private
   *  @function
   *  @description Will animate the accordion to 0 height
   *  @return {Void}
   */
  _hideContent () {
    const {
      offset
    } = this.props

    this.animation.leave(this.root, { offset }, () => {})
  }

  render () {
    /**
     *  @const
     */
    const { className, children } = this.props

    /**
     *  @const
     *  @type {String}
     */
    const modifiedClassNames = classNames('accordion', className)

    return (
      <div
        className={modifiedClassNames}
          ref={ref => { this.root = ref }}>
          <div className='accordion__container'>
            {children}
          </div>
      </div>
    )
  }
}

/**
 * Component Prop Types
 */
Accordion.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  isOpen: PropTypes.bool,
  offset: PropTypes.number
}

/**
 * Component Default Props
 */
Accordion.defaultProps = {
  className: '',
  isOpen: false,
  offset: 0
}

export default Accordion
