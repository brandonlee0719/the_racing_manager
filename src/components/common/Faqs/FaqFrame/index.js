import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import classNames from 'utils/classnames'

class FaqFrame extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      title,
      children
    } = this.props

    const modifiedClassNames = classNames('faq-frame', className)

    return (
      <div className={modifiedClassNames}>
        <TitleDescriptionSection
          title={title}
          colorModifier='blue'
        >
          <ul className='faq-frame__list square'>
            {children}
          </ul>
        </TitleDescriptionSection>
      </div>
    )
  }
}

FaqFrame.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

export default FaqFrame
