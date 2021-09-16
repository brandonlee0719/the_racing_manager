import React, { PureComponent } from 'react'

import processFileUpload from 'utils/processfileupload'

import PropTypes from 'prop-types'

import isDev from 'isdev'

const ALLOWED_FILE_TYPES = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg']

class SlimPictureUpload extends PureComponent {
  constructor (props) {
    super(props)

    this.addPhoto = this.addPhoto.bind(this)
    this.removePhoto = this.removePhoto.bind(this)
    this.clearFileInputValue = this.clearFileInputValue.bind(this)
  }

  addPhoto (e) {
    const {
      handleChange
    } = this.props

    processFileUpload(e, this.props.allowedFileTypes)
      .then(files => {
        handleChange && handleChange(files[0])
      })
      .catch(error => {
        if (isDev) {
          console && console.error(error)
        }
      })
  }

  removePhoto () {
    // Call on redux to clear the thumbnail
    const {
      handleChange
    } = this.props

    handleChange && handleChange('')

    this.clearFileInputValue()

    // Set the previous src to the new src
  }

  clearFileInputValue () {
    if (this.attachmentRef) {
      this.attachmentRef.value = ''
    }
  }

  render () {
    const {
      uploadLabel,
      secondaryLabel,
      onSecondaryClick
    } = this.props

    return (
      <div className="slim-picture-upload__section">
        <div className="slim-picture-upload__upload cursor--pointer">
          <input
            onChange={this.addPhoto}
            className='slim-picture-upload__file-upload'
            type='file'
            ref={ref => { this.attachmentRef = ref }} />
          <h6 className="slim-picture-upload__upload-text italic uppercase link">{uploadLabel}</h6>
        </div>
        <span className="slim-picture-upload__upload-text slim-picture-upload__upload-text--center link">|</span>
        <h6 className="slim-picture-upload__upload-text italic uppercase link" onClick={onSecondaryClick}>{secondaryLabel}</h6>
      </div>
    )
  }
}

SlimPictureUpload.propTypes = {
  allowedFileTypes: PropTypes.array,
  className: PropTypes.string,
  handleChange: PropTypes.func
}

SlimPictureUpload.defaultProps = {
  allowedFileTypes: ALLOWED_FILE_TYPES
}

export default SlimPictureUpload
