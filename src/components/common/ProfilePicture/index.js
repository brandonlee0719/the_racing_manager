import React from 'react'

import Image from 'components/image'

import PropTypes from 'prop-types'

const ProfilePicture = (props) => {
  const {
    src
  } = props

  return (
    <div className='profile-picture'>
      <div className='profile-picture__placeholder'>
        <Image
          imageSrc={src}
          className='profile-picture__picture' />
      </div>
    </div>
  )
}

ProfilePicture.propTypes = {
  src: PropTypes.string
}

ProfilePicture.defaultProps = {
  src: ''
}

export default ProfilePicture
