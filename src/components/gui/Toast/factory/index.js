/**
 * @module react
 */
import React, { PureComponent } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Message
 */
import { Message } from 'components/gui/Toast'

/**
 * @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module FadeShift
 */
import { FadeShift } from 'components/animation'

/**
 *  @name Factory
 *  @class
 *  @extends {Component}
 */
class Factory extends PureComponent {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)
  }

  render () {
    /**
     *  @const
     */
    const {
      className,
      modifier,
      removeToast,
      toasts
    } = this.props

    /**
     *  @name modifiedClassNames
     *  @type {String}
     */
    const modifiedClassNames = classNames('toast-factory', className, modifier, {
      'has-no-toasts': (toasts.length <= 0)
    })

    return (
      <div className={modifiedClassNames}>
        <FadeShift>
          {
            toasts.map(({ toastType, text, id }) => {
              return <Message key={id} modifier={toastType} text={text} id={id} removeToast={removeToast}/>
            })
          }
        </FadeShift>
      </div>
    )
  }
}

/**
 * defaultProps
 *  @type {Object}
 */
Factory.defaultProps = {
  modifier: '',
  className: ''
}

/**
 *  propTypes
 *  @type {Object}
 */
Factory.propTypes = {
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  removeToast: PropTypes.func.isRequired
}

/**
 *  @module Factory
 */
export default Factory
