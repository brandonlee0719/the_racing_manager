import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import SlimPictureUpload from 'components/input/SlimPictureUpload'

import EditOverlay from 'components/manageredit/EditOverlay'

const ImageEdit = (props) => {
  const {
    className,
    title,
    description,
    handleChange
  } = props

  const modifiedClassNames = classNames('text-edit', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={title}
        colorModifier='blue'
        description={description}>
      </TitleDescriptionSection>
      <SlimPictureUpload
        uploadLabel='Update Image'
        secondaryLabel='Back to editor'
        handleChange={handleChange}/>
    </div>
  )
}

ImageEdit.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string
}

export default EditOverlay(ImageEdit)
