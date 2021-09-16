import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

const SyndicateBenefits = (props) => {
  const {
    title,
    titleModifier,
    className,
    description
  } = props

  const modifiedClassNames = classNames('syndicate-benefits', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={title}
        titleModifier={titleModifier}
        description={description}
        colorModifier='blue' />
    </div>
  )
}

SyndicateBenefits.propTypes = {
  title: PropTypes.string,
  titleModifier: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.array
}

SyndicateBenefits.defaultProps = {
  title: 'Benefits',
  titleModifier: 'h1',
  description: `For this filly we offer the following guarantee:  If due to injury or retirement, this filly's season is cut short and will not race again, and she has not raced at least twice, we will replace her with a similar horse for the remainder of the 2017 turf season. Please note that we are unable to pay prizemoney on any replacements and the replacement will be a horse of our own choosing.`
}

export default SyndicateBenefits
