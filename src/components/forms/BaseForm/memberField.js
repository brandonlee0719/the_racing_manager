/**
*  @module react
*/
import React, { PureComponent } from 'react'

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
 *  @extends {PureComponent}
 */
class MemberField extends PureComponent {
  /**
   *  @constructor
   *  @param  {Object} props
   */
  constructor (props) {
    super(props)

    this.state = {
      touched: false
    }

    // Bind local functions
    this.updateValue = this.updateValue.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.isValid = this.isValid.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.updateErrors = this.updateErrors.bind(this)
    this.mapChildren = this.mapChildren.bind(this)
    this.getValue = this.getValue.bind(this)
    this.getError = this.getError.bind(this)
    this.formatValue = this.formatValue.bind(this)
    this.updateValueFromInitialIfNeeded = this.updateValueFromInitialIfNeeded.bind(this)
    this.setTouchedTrue = this.setTouchedTrue.bind(this)
  }

  componentWillMount () {
    /*
      Stores a function which will remove validation if the component is removed.
      Otherwise it will validate itself
     */
    this.removeValidationFromContext = this.context.registerValidation(show => this.isValid(show))
  }

  componentDidMount () {
    this.updateValueFromInitialIfNeeded(this.context.initialValues)
  }

  componentWillUnmount () {
    // Removes the validation in the parent
    this.removeValidationFromContext()
  }

  /**
   *  updateValueFromInitialIfNeeded
   *  @description Will set the value to the initial value if applicable.
   *  @return {Void}
   */
  updateValueFromInitialIfNeeded (initialValues) {
    const {
      name
    } = this.props

    const {
      touched
    } = this.state

    if (initialValues[name] && !touched) {
      this.updateValue(initialValues[name])
    }
  }

  /**
   *  setTouchedTrue
   *  @description If the input has been changed then flag this as true
   */
  setTouchedTrue () {
    this.setState({
      touched: true
    })
  }

  /**
   *  updateValue
   *  @param  {Any} value
   *  @param {Boolean} removeErrors [Removes errors if the user is typing]
   *  @description Will let anyone listening the new values from the input
   *  @return {Void}
   */
  updateValue (value, removeErrors = false) {
    const formattedValue = this.formatValue(value)

    this.context.update(this.props.dataKey, this.props.name, formattedValue)

    /*
      After updating the value, check if it's valid
      Setting a timeout ensures the value is updated before performing a validation check
     */
    setTimeout(() => {
      if (removeErrors) {
        this.removeErrors()
      } else {
        this.isValid(true)
      }
    }, 0)
  }

  removeErrors () {
    this.updateErrors([])
  }

  /**
   *  onChange
   *  @param  {Object} event
   *  @description When the value changes, update the value in the store or parents state.
   *  @return {Void}
   */
  handleChange (event) {
    /**
     *  @const
     */
    const { target = {} } = event
    const { handleChange } = this.props

    let value

    if (typeof target.value !== 'undefined') {
      value = target.value
    } else {
      value = event
    }

    /*
    If the type is a checkbox, get the checked value instead.
     */
    if (target.type === 'checkbox') {
      value = target.checked
    }

    this.updateValue(value, true)

    handleChange && handleChange(value)

    // Flag the field has been modified
    this.setTouchedTrue()
  }

  updateErrors (newErrors = []) {
    const { name } = this.props
    const { errors = [] } = this.context
    // Prevent code from running if the component hasn't receieved correct props

    if (!errors[name]) return
    // Check to see if we actually need to update the errors in the field or not.
    if (
      // If there are new errors, update the field to show them.
      newErrors.length > 0 ||
      // If the field already has errors, but the function receives an empty array, clear the errors. Otherwise do nothing.
      (errors[name].length > 0 && newErrors.length === 0)
    ) {
      this.context.updateErrors(newErrors, name)
    }
  }

  /**
   *  isValid
   *  @param  {Boolean} showErrors
   *  @description Will loop around all validation types i.e 'name', 'password'
   *               and log messages if any errors occur
   *  @return {Boolean}
   */
  isValid (showErrors = false) {
    const { values, validators } = this.context

    // If no validators, assume the input is valid
    if (!validators) {
      return true
    }

    const errors = this.props.validate.reduce((memo, currentName) => {
      return memo.concat(validators(currentName, values))
    }, [])

    if (showErrors) {
      this.updateErrors(errors)
    }

    return !errors.length
  }

  handleBlur () {
    this.isValid(true)
    this.props.handleBlur ? this.props.handleBlur() : null
  }

  handleFocus () {
    this.props.handleFocus ? this.props.handleFocus() : null
  }

  /**
   *  [mapChildren
   *  @param  {Array} children
   *  @return {Array}
   */
  mapChildren (children) {
    return React.Children.count(children) ? React.Children.map(children, child => child) : []
  }

  /**
   *  formatValue
   *  @param  {Any} value
   *  @return {Any}
   */
  formatValue (value) {
    const { format } = this.props

    if (format) {
      return format(value)
    } else {
      return value
    }
  }

  /**
   *  getValue
   *  @param  {String} name
   *  @return {Any}      [description]
   */
  getValue (name) {
    const { values } = this.context
    return this.formatValue(values[name])
  }

  /**
   *  getError
   *  @param  {String} name
   *  @return {Array}
   */
  getError (name) {
    const { errors } = this.context
    return errors && errors[name]
  }

  render () {
    /**
     *  @const
     */
    const { component: Presentation, children, name, value: valueProp, validate, hideError } = this.props

    /**
     *  @const
     */
    const value = valueProp || this.getValue(name)

    /**
     *  error
     *  @type {Array}
     */
    const error = this.getError(name)

    /**
     *  allowedProps
     *  @type {Object}
     */
    const allowedProps = omit(this.props, disAllowedPropTypes)

    return (
      <Presentation
        {...allowedProps}
        value={value}
        error={error}
        showError={validate && validate.length && !hideError}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
        handleChange={this.handleChange}
        onBlur={this.handleBlur}
        onChange={this.handleChange} >
        {this.mapChildren(children)}
      </Presentation>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
MemberField.propTypes = {
  component: PropTypes.func.isRequired
}

/**
 *  defaultProps
 *  @type {Object}
 */
MemberField.defaultProps = {
  validate: []
}

/**
 *  contextTypes
 *  @type {Object}
 */
MemberField.contextTypes = {
  update: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  errors: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  registerValidation: PropTypes.func.isRequired,
  validators: PropTypes.func.isRequired,
  updateErrors: PropTypes.func.isRequired
}

export default MemberField
