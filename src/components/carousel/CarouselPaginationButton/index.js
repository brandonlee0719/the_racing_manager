/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @class
 *  @name CarouselPaginationButton
 *  @extends {Component}
 */
class CarouselPaginationButton extends Component {
  constructor (props) {
    super(props)

    // Bind custom fns
    this.renderButtons = this.renderButtons.bind(this)
  }

  /**
   *  renderButtons
   *  @description Will take a length of buttons and return buttons.
   *  @return {Array}
   */
  renderButtons () {
    const {
      activeIndex,
      length
    } = this.props

    let buttons = []

    for (let i = 0, len = length; i < len; i++) {
      // Add base class name and an active modifier if the button is the currentActiveIndex.
      let modifiedClassNames = classNames('carousel-pagination__btn', '', {
        'active': (activeIndex === i)
      })

      buttons.push(<div key={i} className={modifiedClassNames} />)
    }

    return buttons
  }

  render () {
    const {
      className
    } = this.props

    const modifiedClassNames = classNames('carousel-pagination', className)

    return (
      <ul className={modifiedClassNames}>
        {this.renderButtons()}
      </ul>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
CarouselPaginationButton.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  activeIndex: PropTypes.number,
  length: PropTypes.number
}

/**
 *  defaultProps
 *  @type {Object}
 */
CarouselPaginationButton.defaultProps = {
  activeIndex: -1,
  length: 0
}

/**
 *  @module CarouselPaginationButton
 */
export default CarouselPaginationButton
