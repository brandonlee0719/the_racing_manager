/**
 * @module react
 */
import React, { Component } from 'react'

/**
 *  @module baseClassNames
 */
import classNames from 'utils/classnames'

/**
 *  @module BASE_URL
 */
import { ROOT_PATH } from 'api/ServiceTypes'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  @module hasTextSelection
 */
import { hasTextSelection } from 'utils/domutils'

/**
 *  @name BaseTileHoc
 *  @description Higher order component to wrap an extra class for base tiles.
 *  @param  {Component} WrappedComponent
 *  @return {Component}
 */
const BaseTileHoc = WrappedComponent => {
  /**
   *  @class
   *  @name BaseTile
   *  @extends {Component}
   */
  class BaseTile extends Component {
    /**
     *  @constructor
     */
    constructor (props) {
      super(props)
    }

    render () {
      const {
        className,
        onClick,
        id,
        rootPath
      } = this.props

      // Remove props not needed for wrapped component
      const modifiedProps = omit(this.props, ['rootPath', 'onClick', 'className'])

      // Modified classNames
      const modifiedClassNames = classNames('base-tile__content', className)

      // If there is a supplied root path, use that otherwise default to the ROOT_PATH
      const checkedRootPath = rootPath === '' ? rootPath : ROOT_PATH

      /**
       *  addIdToOnClick
       *  @description Will add the id to the onClick function parameter.
       */
      const addIdToOnClick = () => {
        if (onClick && !hasTextSelection()) { // Prevent the popup from triggering a click if there is text being highlighted
          onClick(id)
        }
      }

      return (
        <div className='base-tile' style={{...this.props.style}} onClick={addIdToOnClick}>
          <WrappedComponent
            {...modifiedProps}
            rootPath={ checkedRootPath }
            className={`section-shadow--tile ${modifiedClassNames}`} />
        </div>
      )
    }
  }

  return BaseTile
}

/**
 *  @module BaseTileHoc
 */
export default BaseTileHoc
