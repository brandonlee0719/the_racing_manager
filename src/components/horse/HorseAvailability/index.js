import React from 'react'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import List from 'components/gui/List'

import classNames from 'utils/classnames'

import {
  queryBySelector
} from 'utils/domutils'

const HorseAvailability = (props) => {
  const {
    className,
    title,
    description,
    children,
    availabilityList
  } = props

  const modifiedClassNames = classNames('horse-availability', className)

  const scrollToBenefits = () => {
    queryBySelector('#benefits-section').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={title}
        titleModifier='h2'
        description={description}>
        <div>
          <List items={availabilityList} />
          {children}
          <span
            className='link link--italic horse-availability__see-benefits cursor--pointer'
            onClick={scrollToBenefits}
          >
            See benefits
          </span>
        </div>
      </TitleDescriptionSection>
    </div>
  )
}

export default HorseAvailability
