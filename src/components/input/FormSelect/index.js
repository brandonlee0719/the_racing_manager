/**
*  @module react
*/
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module classNames
*/
import classNames from 'utils/classnames'

/**
*  @module InputLine
*/
import InputLine from 'components/input/InputLine'

/**
 *  @module BaseAccordion
 */
import Accordion from 'components/accordion/BaseAccordion'

/**
 *  @module InputError
 */
import InputError from 'components/input/InputError'

/**
 *  @class
 *  @extends {Component}
 */
const FormSelect = props => {
  /**
   *  @const
   */
  const {
    name,
    value,
    error,
    handleBlur,
    handleFocus,
    handleChange,
    inputClassName,
    inputLineClassName,
    disabled,
    children,
    defaultValue
  } = props

  /**
   *  hasError
   *  @const
   *  @type {Boolean}
   */
  const hasError = error && !!error.length

  // Class names for the container
  const modifiedClassName = classNames('select')

  // Class names for the input line
  const inputLineClassNames = classNames('select__line', inputLineClassName)

  // Class names for the input
  const inputClassNames = classNames('select__select', inputClassName, {
    'default': !value
  })

  return (
    <div className={modifiedClassName}>
      <select
        disabled={disabled}
        className={inputClassNames}
        name={name}
        value={value || defaultValue}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
      >
          {children}
      </select>
      {
        !disabled
        ? (
            <InputLine error={hasError} className={inputLineClassNames} />
          )
        : null
      }
      <Accordion
        className='input__accordion'
        isOpen={hasError}>
        <InputError
          className='micro'
          errors={error} />
      </Accordion>
    </div>
  )
}

/**
 *  defaultProps
 *  @type {Object}
 */
FormSelect.defaultProps = {
  disabled: false
}

/**
 *  propTypes
 *  @type {Object}
 */
FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  error: PropTypes.array,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  inputLineClassName: PropTypes.string,
  disabled: PropTypes.bool
}

/**
 *  @module FormSelect
 */
export default FormSelect
