import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import List from 'components/gui/List'

const SyndicateInvolvement = (props) => {
  const {
    className,
    title,
    titleModifier,
    benefits,
    description
  } = props

  const modifiedClassNames = classNames('syndicate-involvement', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={title}
        description={description}
        colorModifier='white'
        titleModifier={titleModifier}
      >
        <List items={benefits} />
      </TitleDescriptionSection>
    </div>
  )
}

SyndicateInvolvement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  titleModifier: PropTypes.string,
  description: PropTypes.string,
  benefits: PropTypes.arrayOf(PropTypes.string)
}

SyndicateInvolvement.defaultProps = {
  title: 'Benefits',
  titleModifier: 'h2',
  description: '',
  benefits: []
}

export default SyndicateInvolvement
