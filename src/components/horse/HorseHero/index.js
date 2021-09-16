import React from 'react'

import classNames from 'utils/classnames'

import Hero from 'components/parallax/Hero'

import { constructStaticUrl } from 'utils/horseutils'

import HorseDetailsCard from 'components/horse/HorseDetailsCard'
import HorseMobileDetailsCard from 'components/horse/HorseMobileDetailsCard'

import { timestampToDate } from 'utils/dateutils'

const HorseHero = (props) => {
  const {
    className,
    data = {}
  } = props

  const {
  name,
  age,
  color,
  gender,
  owner = {},
  runs,
  wins,
  places,
  trainer = {},
  style,
  foalingDate,
  sire = {},
  dam = {},
  featuredImage
  } = data

  const { slug } = owner

  const briefData = {
    name,
    age,
    color,
    gender,
    owner,
    slug,
  }

  const numericData = [{
    title: 'Runs',
    value: runs
  }, {
    title: 'Wins',
    value: wins
  }, {
    title: 'Places',
    value: places
  }, {
    title: 'OR',
    value: null
  }]

  const detailsData = [{
    title: 'Trainer',
    value: trainer.name
  }, {
    title: 'Prev Trainers',
    value: null
  }, {
    title: 'Breeder',
    value: null
  }, {
    title: 'Style',
    value: style
  }, {
    title: 'Foaling Date',
    value: timestampToDate(foalingDate, 'D MMMM YYYY'),
    isHidden: age >= 3
  }, {
    title: 'Sire',
    value: sire.name
  }, {
    title: 'Dam',
    value: dam.name
  }, {
    title: 'Dam Sire',
    value: dam.sireName
  }, {
    title: 'Prize Money',
    value: null
  }]

  const modifiedClassNames = classNames('horse-hero', className)

  return (
    <div className={modifiedClassNames}>
      <Hero
        className='horse-hero__parallax-image'
        featuredImage={constructStaticUrl(featuredImage)} />
      <div className='horse-hero__card-container'>
        <div className='horse-hero__card visible-md-up'>
          <HorseDetailsCard
            briefData={briefData}
            numericData={numericData}
            detailsData={detailsData} />
        </div>
      </div>
      <div className='horse-hero__mobile-card hidden-md-up'>
        <HorseMobileDetailsCard
          briefData={briefData}
          numericData={numericData}
          detailsData={detailsData} />
      </div>
    </div>
  )
}

export default HorseHero
