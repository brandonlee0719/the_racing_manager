import React from 'react'

import classNames from 'utils/classnames'

import HorseBrief from 'components/horse/HorseBrief'
import HorseNumericDetails from 'components/horse/HorseNumericDetails'
import HorseDetails from 'components/horse/HorseDetails'

const HorseDetailsCard = (props) => {
  const {
    className,
    briefData,
    numericData,
    detailsData
  } = props

  const modifiedClassNames = classNames('horse-details-card', className)

  return (
    <div className={modifiedClassNames}>
      <div className='horse-details-card__section'>
        <HorseBrief {...briefData} />
        <HorseNumericDetails data={numericData} />
      </div>
      <div className='horse-details-card__section section-shadow'>
        <HorseDetails data={detailsData} />
      </div>
    </div>
  )
}

export default HorseDetailsCard
