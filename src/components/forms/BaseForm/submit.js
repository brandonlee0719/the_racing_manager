/**
*  @module react
*/
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  disAllowedPropTypes
 *  @const
 *  @description The props to be removed from sending to passed in component
 *  @type {Array}
 */
const disAllowedPropTypes = ['component', 'validate']

/**
 *  @class
 *  @extends {Component}
 */
class Submit extends Component {
  /**
   *  @constructor
   *  @param  {Object} props
   *  @return {Void}
   */
  constructor (props) {
    super(props)

    this.mapChildren = this.mapChildren.bind(this)
  }

  /**
   *  [mapChildren
   *  @param  {Array} children
   *  @return {Array}
   */
  mapChildren (children) {
    return React.Children.count(children) ? React.Children.map(children, child => child) : []
  }

  render () {
    /**
     *  @const
     */
    const { isFormValid, submit } = this.context

    /**
     *  @const
     */
    const { component, children } = this.props

    /**
     *  @const
     *  @type {Component}
     */
    const Presentation = component

    /**
     *  allowedProps
     *  @type {Object}
     */
    const allowedProps = omit(this.props, disAllowedPropTypes)

    return (
      <Presentation
        {...allowedProps}
        isDisabled={!isFormValid()}
        onClick={submit} >
        {this.mapChildren(children)}
      </Presentation>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
Submit.propTypes = {
  component: PropTypes.func.isRequired
}

/**
 *  contextTypes
 *  @type {Object}
 */
Submit.contextTypes = {
  isFormValid: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default Submit
