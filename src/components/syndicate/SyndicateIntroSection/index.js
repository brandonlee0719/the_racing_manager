import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import SyndicateTitleDescriptionCard from 'components/syndicate/SyndicateTitleDescriptionCard'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

const SyndicateIntroSection = (props) => {
  const {
    className,
    title,
    description,
    children,
    contentClassName,
    modifier
  } = props

  const modifiedClassNames = classNames('syndicate-intro-section', className)

  const modifiedContentClassNames = classNames('syndicate-intro-section__content', contentClassName, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='syndicate-intro-section__bg wave-bg-blue'></div>
      <div className='container no-padding'>
        <SyndicateTitleDescriptionCard>
          <TitleDescriptionSection
            title={title}
            description={description}
            colorModifier='blue' />
        </SyndicateTitleDescriptionCard>
        <div className={modifiedContentClassNames}>
          {children}
        </div>
      </div>
    </div>
  )
}

SyndicateIntroSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  contentClassName: PropTypes.string,
  modifier: PropTypes.string
}

export default SyndicateIntroSection
