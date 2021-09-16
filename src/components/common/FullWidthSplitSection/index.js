import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

const FullWidthSplitSection = (props) => {
  const {
    className,
    leftComponent,
    rightComponent,
    modifier,
    children,
    leftClassName,
    rightClassName
  } = props

  const modifiedClassNames = classNames('full-width-split-section', className, modifier)

  const modifiedLeftClassNames = classNames('full-width-split-section__left col-md-8 col-xs-12', leftClassName)

  const modifiedRightClassNames = classNames('full-width-split-section__right col-md-4 col-xs-12', rightClassName)

  return (
    <div className={modifiedClassNames}>
      <div className='full-width-split-section__wrapper'>
        <div className='full-width-split-section__content container no-padding'>
          <div className={modifiedLeftClassNames}>
            {leftComponent}
          </div>

          <div className={modifiedRightClassNames}>
            {rightComponent}
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

FullWidthSplitSection.propTypes = {
  className: PropTypes.string,
  leftComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]),
  rightComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]),
  modifier: PropTypes.string,
  leftClassName: PropTypes.string,
  rightClassName: PropTypes.string
}

FullWidthSplitSection.defaultProps = {
  modifier: 'blue'
}

export default FullWidthSplitSection
