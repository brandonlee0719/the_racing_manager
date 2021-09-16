import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import TextArea from 'components/input/TextArea'

import EditOverlay from 'components/manageredit/EditOverlay'

const TextEdit = (props) => {
  const {
    className,
    text,
    placeholder,
    maxLength,
    handleChange
  } = props

  const modifiedClassNames = classNames('text-edit', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={props.title}
        colorModifier='blue'>
        <TextArea
          handleChange={handleChange}
          maxLength={maxLength}
          showBar
          placeholder={placeholder}
          className='text-edit__text'
          name='text-edit-text'
          value={text} />
        </TitleDescriptionSection>
      <div className='text-edit__char-count'>
        <h6 className='extra-light'>
          Max {maxLength} characters
        </h6>
      </div>
    </div>
  )
}

TextEdit.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  handleChange: PropTypes.func,
  title: PropTypes.string
}

TextEdit.defaultProps = {
  text: '',
  maxLength: 75,
  placeholder: '',
  title: null
}

export default EditOverlay(TextEdit)
