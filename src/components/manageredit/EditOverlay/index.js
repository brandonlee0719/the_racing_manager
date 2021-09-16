import React from 'react'

import classNames from 'utils/classnames'

import BaseFluidPopup from 'components/popup/BaseFluidPopup'

import TextIconButton from 'components/buttons/TextIconButton'

import PropTypes from 'prop-types'

const EditOverlayHoc = (WrappedComponent) => {
  const EditOverlay = (props) => {
    const {
      canSave = true,
      modifier,
      onSave,
      onCancel,
      ...rest
    } = props

    const modifiedWrapperClassNames = classNames('edit-overlay__wrapper', '', modifier)

    return (
      <div className='edit-overlay'>
        <div className='row'>
          <div className='col-md-8 col-md-push-2 col-xs-12'>
            <div className={modifiedWrapperClassNames}>
              <div className='edit-overlay__container section-shadow--tile'>
                <div className='edit-overlay__dashed-border'>
                  <WrappedComponent {...rest} />
                </div>
                <div className='edit-overlay__button-group'>
                  {canSave && <TextIconButton
                    onClick={onSave}
                    className='edit-overlay__button'
                    iconModifier='check' />}
                  <TextIconButton
                    onClick={onCancel}
                    className='edit-overlay__button'
                    modifier={['secondary', 'xs', 'static-bg']}
                    iconModifier='close' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  EditOverlay.propTypes = {
    modifier: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    onSave: PropTypes.func,
    onCancel: PropTypes.func
  }

  return BaseFluidPopup(EditOverlay)
}

export default EditOverlayHoc
