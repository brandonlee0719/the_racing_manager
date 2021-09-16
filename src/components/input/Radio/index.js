import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import Accordion from 'components/accordion/BaseAccordion'
import InputError from 'components/input/InputError'

const Radio = props => {
  const {
    name,
    value,
    error,
    showError,
    checked,
    onChange,
    className,
    modifier,
    label,
    id
  } = props

  const hasError = showError && error && !!error.length

  const modifiedClassNames = classNames('radio', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <label htmlFor={id} className='radio__label'>
        <input
          className='radio__input'
          type='radio'
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => { onChange(e) }}
          />
        <span className='radio__button'></span>
        <h5 className='radio__label__text'>{label}</h5>
      </label>

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

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool
}

Radio.defaultProps = {
  checked: false
}

export default Radio
