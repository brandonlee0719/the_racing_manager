import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import List from 'components/gui/List'

const HorseInvolvement = (props) => {
  const {
    className,
    title,
    benefits,
    description,
    ownershipYears,
    ownershipEndDate,
    percentShares,
    shares
  } = props

  const modifiedClassNames = classNames('horse-involvement', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={title}
        description={description}
        colorModifier='white'
        titleModifier='h2'
      >
        <h4 className='uppercase'>
          ownership
        </h4>
        <List items={benefits} />

        <div className='horse-involvement__section'>
          <h4 className='uppercase'>
            benefits
          </h4>
          <List items={[
            `${ownershipYears} years fixed period ownership`,
            `Ends on ${ownershipEndDate}`,
            `You own ${percentShares}% shares (${shares.owned} out of ${shares.total})`,
          ]} />
        </div>

      </TitleDescriptionSection>
    </div>
  )
}

HorseInvolvement.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  benefits: PropTypes.arrayOf(PropTypes.string),
  ownershipYears: PropTypes.number,
  ownershipEndDate: PropTypes.string,
  percentShares: PropTypes.string,
  shares: PropTypes.object
}

HorseInvolvement.defaultProps = {
  title: 'Availability',
  description: '',
  benefits: [],
  shares: {}
}

export default HorseInvolvement
