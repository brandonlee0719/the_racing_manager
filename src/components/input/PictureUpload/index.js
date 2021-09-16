import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import ProfilePicture from 'components/common/ProfilePicture'

import processFileUpload from 'utils/processfileupload'

import { generatethumbnailFromFiles } from 'utils/imageutils'

import PropTypes from 'prop-types'

import isDev from 'isdev'

const ALLOWED_FILE_TYPES = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg']

class PictureUpload extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      previousSrc: props.src || '',
      thumbnailSrc: props.src || ''
    }

    this.mounted = false

    this.addPhoto = this.addPhoto.bind(this)
    this.removePhoto = this.removePhoto.bind(this)
    this.clearFileInputValue = this.clearFileInputValue.bind(this)
    this.setThumbnail = this.setThumbnail.bind(this)
  }

  componentDidMount () {
    this.mounted = true
  }

  componentWillUnmount () {
    this.mounted = false
  }

  componentWillReceiveProps ({ src }) {
    if (typeof src !== 'string' || src === this.props.src) {
      return false
    }

    this.setThumbnail(src)
  }

  setThumbnail (src) {
    this.setState({
      thumbnailSrc: src
    })
  }

  addPhoto (e) {
    const {
      handleChange
    } = this.props

    processFileUpload(e, this.props.allowedFileTypes)
    .then(files => {
      // Add to redux or something
      handleChange && handleChange(files[0])

      return generatethumbnailFromFiles(files)
    })
    .then(thumbnails => {
      if (this.mounted) {
        this.setThumbnail(thumbnails[0])
      }
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
    if (this.mounted) {
      this.setThumbnail(this.state.previousSrc)
    }
  }

  clearFileInputValue () {
    if (this.attachmentRef) {
      this.attachmentRef.value = ''
    }
  }

  render () {
    const {
      className
    } = this.props

    const {
      thumbnailSrc
    } = this.state

    const modifiedClassNames = classNames('picture-upload', className)

    return (
      <div className={modifiedClassNames}>
        <ProfilePicture
          src={thumbnailSrc} />

        <div className='picture-upload__section'>
          <div className='picture-upload__upload cursor--pointer'>
            <h6 className='italic uppercase link'>
              update
            </h6>
            <input
              onChange={this.addPhoto}
              className='picture-upload__file-upload'
              type='file'
              ref={ref => { this.attachmentRef = ref }} />
          </div>
          <span className='picture-upload__upload-text picture-upload__upload-text--center link'>|</span>
          <h6 className='italic uppercase link picture-upload__upload-text cursor--pointer' onClick={this.removePhoto}>
            remove
          </h6>
        </div>
      </div>
    )
  }
}

PictureUpload.propTypes = {
  allowedFileTypes: PropTypes.array,
  className: PropTypes.string,
  handleChange: PropTypes.func
}

PictureUpload.defaultProps = {
  allowedFileTypes: ALLOWED_FILE_TYPES
}

export default PictureUpload
