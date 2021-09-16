/**
*  @module react
*/
import React, { Component } from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

import _ from 'lodash'

import VirtualizedSelect from 'react-virtualized-select'

import 'react-select/dist/react-select.css'

import 'react-virtualized/styles.css'

import 'react-virtualized-select/styles.css'

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
class MessageInput extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  handleChange (selectValue) {
    this.setState({ selectValue })
    let data = null
    if (this.props.name === 'receiver') {
      data = _.map(selectValue, function (val) {
        return ({ name: val.label, id: val.value })
      })
    } else {
      data = { name: selectValue.label, id: selectValue.value }
    }
    this.props.handleSelectName(data)
  }

  render () {
    const {
      placeholder,
      value,
      error,
      showError,
      handleSelectName,
      inputClassName,
      inputLineClassName,
      disabled,
      searchNames,
      multi
    } = this.props

    const hasError = showError && error && !!error.length

    // Class names for the container
    const modifiedClassName = classNames('input')

    // Class names for the input line
    const inputLineClassNames = classNames('input__line', inputLineClassName)

    return (

      <div className={modifiedClassName}>
        <VirtualizedSelect
          options={searchNames}
          onChange={(selectValue) => this.handleChange(selectValue)}
          value={this.state.selectValue}
          multi={multi}
          clearable={false}
          placeholder={placeholder}
        />
        {
          !disabled
            ? (
            <InputLine error={hasError} className={inputLineClassNames}/>
          )
            : null
        }
        <Accordion
          className='input__accordion'
          isOpen={hasError}>
          <InputError
            className='micro'
            errors={error}/>
        </Accordion>
      </div>
    )
  }
}

/**
 *  defaultProps
 *  @type {Object}
 */
MessageInput.defaultProps = {
  type: 'text',
  disabled: false
}

/**
 *  propTypes
 *  @type {Object}
 */
MessageInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  error: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  inputLineClassName: PropTypes.string,
  disabled: PropTypes.bool
}

/**
 *  @module MessageInput
 */
export default MessageInput
