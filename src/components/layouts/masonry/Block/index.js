import React, { Component } from 'react'

import classNames from 'classnames'

/**
 *  @class
 *  @name Block
 *  @extends {Component}
 */
class Block extends Component {
  constructor (props) {
    super(props)

    // Set the default style
    this.defaultStyle = {
      position: `absolute`,
      boxSizing: `border-box`
    }

    // Set the tile outside when initial render
    this.posStyle = {
      /*
        top: '-9999px',
        left: '-99999px'
      */
    }

    // Cache the div element
    this.divElement = null

    // Default to false for the block being placed
    this.placed = false
  }

  componentDidUpdate () {
    if (this.placed || !this.props.parent || this.props['data-xkey']) {
      return
    }

    // Flag that the Block has been placed
    this.placed = true

    this.handleImageUpdate()
  }

  handleImageUpdate () {
    const {
      parent
    } = this.props

    requestAnimationFrame(() => {
      if (!this.divElement) {
        return
      }

      const images = Array.prototype.slice.call(this.divElement.querySelectorAll(`img`))
      const handleImages = (images.length > 0) && parent.props.updateOnImagesLoad

      if (handleImages) {
        images.forEach(
            (img) => img.addEventListener(`load`, parent.update, false)
        )
      }

      if (this.props.height !== this.divElement.clientHeight) {
        parent.update()
      }
    })
  }

  render () {
    const { width, height, measured, parent, style, className, ...rest } = this.props
    const maxColumns = this.props.parent.columns
    const columns = Math.min(width || 1, maxColumns)

    style.width = Math.floor(columns * this.props.parent.containerWidth / maxColumns)

   /*
    const modifiedClasses = classNames({
      'xblock': measured
    }, className)
    */

    const modifiedClasses = classNames(className)

    return (
      <div data-width={ columns }
        { ...rest }
        style={ { ...this.posStyle, ...style, ...this.defaultStyle } }
        className={`xblock ${modifiedClasses}`}
        ref = { (x) => { this.divElement = x } }>
        { this.props.children }
      </div>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
Block.defaultProps = {
  width: 1,
  measured: false
}

/**
 *  @module Block
 */
export default Block
