import React, { Component } from 'react'

import TextButton from 'components/buttons/TextButton'
import Accordion from 'components/accordion/BaseAccordion'
import Hero from 'components/parallax/Hero'
import Carousel from 'components/carousel'

import HorseBrief from 'components/horse/HorseBrief'
import HorseNumericDetails from 'components/horse/HorseNumericDetails'
import HorseDetails from 'components/horse/HorseDetails'

import HorseBigSection from 'components/horse/HorseBigSection'
import HorseSmallSection from 'components/horse/HorseSmallSection'

import { timestampToDate } from 'utils/dateutils'
import { constructStaticUrl } from 'utils/horseutils'

class HorseHeader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showDetails: false
    }

    this.handleToggleDetails = this.handleToggleDetails.bind(this)
  }

  handleToggleDetails () {
    this.setState((state) => ({
      showDetails: !state.showDetails
    }))
  }

  render () {
    const { showDetails: isOpen } = this.state

    const {
      data = {},
      leftSection,
      rightSection,
      slideSection
    } = this.props

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

    return (
      <div className='horse-header'>
        <div className='horse-header__image'>
          <Hero featuredImage={constructStaticUrl(featuredImage)} />
          <div className='horse-header__details-container visible-md-up'>
            <div className='horse-header__details-tile'>
              <div className='horse-header__details'>
                <div className='horse-header__tile-padding'>
                  <HorseBrief {...briefData} />
                </div>
                <div className='horse-header__tile-details horse-header__tile-padding section-shadow'>
                  <HorseNumericDetails data={numericData} />
                  <div className='horse-header__details-list'>
                    <HorseDetails data={detailsData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row visible-md-up'>
          <div className='horse-header__content'>
            <div className='container no-padding'>
              <HorseBigSection className='col-md-8'>
                {leftSection}
              </HorseBigSection>
              <HorseSmallSection className='col-md-4'>
                {rightSection}
              </HorseSmallSection>
            </div>
          </div>
        </div>
        <div className='hidden-md-up'>
          <div className='container'>
            <div className='horse-header__brief-info'>
              <HorseBrief {...briefData} />
              <TextButton
                text={isOpen ? 'Hide details' : 'View details'}
                className='horse-header__btn-details'
                modifier={['md', 'secondary']}
                onClick={this.handleToggleDetails}
              />
            </div>
          </div>
          <Accordion isOpen={isOpen}>
            <div className='horse-header__details horse-header__mobile-details section-shadow'>
              <div className='container'>
                <div className='row'>
                  <HorseNumericDetails data={numericData} />
                </div>
                <div className='row'>
                  <HorseDetails data={detailsData} />
                </div>
              </div>
            </div>
          </Accordion>
          {
            slideSection && (
              <HorseBigSection>
                <Carousel ref='carousel' containerClassName='horse-header__slider' showPagination>
                  {slideSection.map((slide, index) => (
                    <div className='container' key={index}>
                      {slide}
                    </div>
                  ))}
                </Carousel>
              </HorseBigSection>
            )
          }
        </div>
      </div>
    )
  }
}

export default HorseHeader
