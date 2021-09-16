import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import Input from 'components/input/Input'

import EditOverlay from 'components/manageredit/EditOverlay'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import { toUpperCase } from 'utils/stringutils'

const FormSubmissionEdit = (props) => {
  const {
    className,
    email,
    placeholder,
    handleChange
  } = props

  const modifiedClassNames = classNames('form-submission-edit', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title='get in touch'
        titleModifier='h2'
        colorModifier='blue'
        modifier='edit'>

        <p className='tiny form-submission-edit__text'>
          What email address would you like syndicate queries to be sent to? These will only be from prospect members.
        </p>

        <Input
          value={email}
          placeholder={toUpperCase(placeholder)}
          name='form-submission-edit'
          handleChange={handleChange} />

      </TitleDescriptionSection>
    </div>
  )
}

FormSubmissionEdit.propTypes = {
  email: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
}

FormSubmissionEdit.defaultProps = {
  email: '',
  placeholder: 'email address'
}

export default EditOverlay(FormSubmissionEdit)
