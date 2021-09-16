import React, { Component } from 'react'

import Checkbox from 'components/input/Checkbox'

import TextButton from 'components/buttons/TextButton'

import {
  CardView,
  SpecCardFrame,
  CardHeading
} from 'components/cards/FeaturedCard'

import {
  onboardingDescription
} from 'data/syndicate'

import {multilineTextToJSX} from 'utils/textutils'

class DurationEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isShownFixedPeriod: false,
      isShownOpenEnded: false
    }

    this.isSeletedFixedPeriod = this.isSeletedFixedPeriod.bind(this)
    this.isSeletedOpenEndedPeriod = this.isSeletedOpenEndedPeriod.bind(this)
    this.showMoreFixedPeriod = this.showMoreFixedPeriod.bind(this)
    this.showMoreOpenEnded = this.showMoreOpenEnded.bind(this)
  }

  isSeletedFixedPeriod (value) {
    this.props.onSelectDurationItem(value)
  }

  isSeletedOpenEndedPeriod (value) {
    this.props.onSelectDurationItem(value)
  }

  showMoreFixedPeriod () {
    this.setState({
      isShownFixedPeriod: !(this.state.isShownFixedPeriod)
    })
  }

  showMoreOpenEnded () {
    this.setState({
      isShownOpenEnded: !(this.state.isShownOpenEnded)
    })
  }

  render () {
    return (
      <div className="horse-duration-card">
        <div className={ this.props.value && this.props.value.ownership.type === 'Fixed Period' ? 'horse-duration-card__fixed-selected' : 'horse-duration-card__fixed-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="FIXED PERIOD"
                  name="Fixed Period"
                  handleChange={() => { this.isSeletedFixedPeriod('Fixed Period') }}
                  value={ this.props.value && this.props.value.ownership.type === 'Fixed Period' } />
                <TextButton
                  text={ this.state.isShownFixedPeriod ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='duration__more-btn'
                  onClick={() => { this.showMoreFixedPeriod() }}
                />
                { this.state.isShownFixedPeriod ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
        <div className={ this.props.value && this.props.value.ownership.type === 'Open Ended Period' ? 'horse-duration-card__ended-selected' : 'horse-duration-card__ended-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="OPEN ENDED"
                  name="Open Ended Period"
                  handleChange={() => { this.isSeletedOpenEndedPeriod('Open Ended Period') }}
                  value={ this.props.value && this.props.value.ownership.type === 'Open Ended Period' } />
                <TextButton
                  text={ this.state.isShownOpenEnded ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='duration__more-btn'
                  onClick={() => { this.showMoreOpenEnded() }}
                />
                { this.state.isShownOpenEnded ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
      </div>
    )

  }
}

export default DurationEditor
