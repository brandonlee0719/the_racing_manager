import React from 'react'

import Carousel from 'components/carousel'

import HorseTeamMember from 'components/horse/HorseTeamMember'

import PropTypes from 'prop-types'

const HorseMemberCarousel = (props) => {
  const {
    syndicateMembers,
    type
  } = props

  const isTrainer = (type === 'trainer')

  const members = syndicateMembers.map((member, index) => (
    <HorseTeamMember
      key={index}
      image={member.image}
      name={member.name}
      role={member.role}
      description={member.description}
      hasLink={isTrainer}
      href={isTrainer ? member.link : ''}
      linkText={isTrainer ? 'more details' : ''}
      className='horse-member-carousel__member-tile'
    />
  ))

  return (
    <div className='horse-member-carousel'>
      <Carousel
        slideWidth={0.25}
        cellAlign='left'
        breakPoints={{
          400: {
            slideWidth: 1,
            cellAlign: 'center'
          },
          480: {
            slideWidth: 0.5
          },
          1199: {
            slideWidth: 0.33
          }
        }}
        showArrows
        nextArrowModifier={['right', 'nobg', 'red', 'center']}
        prevArrowModifier={['left', 'nobg', 'red', 'center']}
      >
        {members}
      </Carousel>
    </div>
  )
}

HorseMemberCarousel.propTypes = {
  type: PropTypes.string
}

HorseMemberCarousel.defaultProps = {
  type: 'member'
}

export default HorseMemberCarousel
