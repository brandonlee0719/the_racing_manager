import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import HorseBrief from 'components/horse/HorseBrief'
import HorseNumericDetails from 'components/horse/HorseNumericDetails'
import HorseDetails from 'components/horse/HorseDetails'

import TextButton from 'components/buttons/TextButton'
import Accordion from 'components/accordion/BaseAccordion'

class HorseMobileDetailsCard extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.handleToggleDetails = this.handleToggleDetails.bind(this)
  }

  handleToggleDetails () {
    this.setState(({isOpen}) => ({
      isOpen: !isOpen
    }))
  }

  render () {
    const {
      isOpen
    } = this.state

    const {
      className,
      briefData,
      numericData,
      detailsData
    } = this.props

    const modifiedClassNames = classNames('horse-mobile-details-card', className)

    return (
      <div className={modifiedClassNames}>
        <div className='horse-mobile-details-card__section'>
          <div className='container'>
            <HorseBrief {...briefData} />
            <HorseNumericDetails data={numericData} />
            <TextButton
              className='horse-mobile-details-card__cta'
              text={isOpen ? 'Hide details' : 'View details'}
              modifier={['md', 'secondary']}
              onClick={this.handleToggleDetails}
            />
          </div>
        </div>
        <Accordion isOpen={isOpen}>
          <div className='horse-mobile-details-card__section section-shadow'>
            <div className='container'>
              <HorseDetails data={detailsData} />
            </div>
          </div>
        </Accordion>
      </div>
    )
  }
}

export default HorseMobileDetailsCard
