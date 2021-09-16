/**
 * @module react
 */
import React, { PureComponent } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @name Message
 *  @class
 *  @extends {Component}
 *  @return {PureComponent}
 */
class Message extends PureComponent {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)

    // Set timeout cache
    this.timeout = null

    // Bind custom fns
    this.setRemoval = this.setRemoval.bind(this)
    this.removeSelf = this.removeSelf.bind(this)
  }

  componentDidMount () {
    this.setRemoval()
  }

  /**
   *  setRemoval
   */
  setRemoval () {
    this.timeout = setTimeout(() => {
      this.removeSelf()
    }, this.props.leaveTimer)
  }

  /**
   *  removeSelf
   */
  removeSelf () {
    this.props.removeToast(this.props.id)
  }

  render () {
    const {
      className,
      modifier,
      text
    } = this.props

    /**
     *  @name modifiedClassNames
     *  @type {String}
     */
    const modifiedClassNames = classNames('toast-message', className, modifier)

    return (
      <div className={modifiedClassNames} onClick={this.removeSelf}>
        <div className='toast-message__container'>
          <p className='toast-message__text text-center tiny'>
            {text}
          </p>
        </div>
      </div>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
Message.defaultProps = {
  modifier: 'info',
  className: '',
  text: '',
  leaveTimer: 2000
}

/**
 *  propTypes
 *  @type {Object}
 */
Message.propTypes = {
  modifier: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  text: PropTypes.string,
  leaveTimer: PropTypes.number,
  id: PropTypes.number,
  removeToast: PropTypes.func.isRequired
}

/**
 *  @module Message
 */
export default Message
