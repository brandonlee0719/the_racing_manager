import React from 'react'

import Carousel from 'components/carousel'

import HorseCard from 'components/horse/HorseCard'

import PropTypes from 'prop-types'

import { constructStaticUrl, calcPercent } from 'utils/horseutils'

import { roundNumberWithoutZeros } from 'utils/number'

const SyndicateHorseCarousel = (props) => {
  const {
    horses
  } = props

  const showArrows = (horses.length >= 4)

  return (
    <Carousel
      containerClassName='syndicate-horse-carousel'
      cellAlign='left'
      cellSpacing={30}
      slideWidth={'266px'}
      showArrows={showArrows}
      nextArrowModifier={['right', 'nobg', 'red', 'bottom']}
      prevArrowModifier={['left', 'nobg', 'red', 'bottom']}
      breakPoints={{
        480: {
          slideWidth: 1,
          cellAlign: 'center'
        }
      }}>
      {
        horses.map((horse, index) => {
          return (
            <HorseCard
              isActive
              key={index}
              src={constructStaticUrl(horse.thumbnailImage)}
              title={horse.name}
              color={horse.syndColor}
              subtitle={`${horse.age}yo ${horse.gender}`}
              stats={[{
                name: 'runs',
                value: horse.runs
              }, {
                name: 'wins',
                value: horse.wins
              }, {
                name: 'places',
                value: horse.places
              }, {
                name: 'OR',
                value: '-'
              }]}
              info={[{
                name: 'Trainer name',
                value: horse.trainer.name
              }, {
                name: 'Syndicate name',
                value: horse.syndName
              }, {
                name: 'Manager',
                value: horse.owner.name
              }, {
                name: 'Ownership',
                value: `${roundNumberWithoutZeros(calcPercent(horse.shares.owned, horse.shares.total))}%`
              }]}
              extra={{
                title: '12% available',
                text: '1.5% minimum purchase'
              }}
              isMember={false}
              bottomUrl={`/horse/${horse.slug}`}
              className='syndicate-horse-carousel__slide' />
          )
        })
      }
    </Carousel>
  )
}

SyndicateHorseCarousel.propTypes = {
  horses: PropTypes.array
}

export default SyndicateHorseCarousel
