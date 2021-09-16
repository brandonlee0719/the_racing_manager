import React from 'react'

import BaseFluidPopup from 'components/popup/BaseFluidPopup'

import PropTypes from 'prop-types'

import Icon from 'components/icon'

const PopupWithBreadcrumbHoc = WrappedComponent => {
  const PopupWithBreadcrumb = (props) => {
    const {
      breadcrumbText,
      onClick,
      ...rest
    } = props

    return (
      <div className='popup-with-breadcrumb'>
        <div className='popup-with-breadcrumb__wrapper cursor--pointer' onClick={onClick}>
          <div className='container'>
            <Icon
              className='popup-with-breadcrumb__breadcrumb-icon'
              modifier='leftarrow' />
            <h5 className='uppercase popup-with-breadcrumb__breadcrumb-text'>
              {breadcrumbText}
            </h5>
          </div>
        </div>
        <WrappedComponent {...rest} />
      </div>
    )
  }

  PopupWithBreadcrumb.propTypes = {
    onClick: PropTypes.func,
    breadcrumbText: PropTypes.string
  }

  PopupWithBreadcrumb.defaultProps = {
    breadcrumbText: 'Back'
  }

  return BaseFluidPopup(PopupWithBreadcrumb)
}

export default PopupWithBreadcrumbHoc
