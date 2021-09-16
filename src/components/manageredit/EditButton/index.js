import React from 'react'

import TextIconButton from 'components/buttons/TextIconButton'

import classNames from 'utils/classnames'

const EditButton = (props) => {
  const {
    className,
    position,
    ...rest
  } = props

  const modifiedClassNames = classNames('edit-button', className, position)

  return (
    <div className={modifiedClassNames}>
      <TextIconButton
        className='edit-button__button'
        {...rest} />
    </div>
  )
}

export default EditButton
