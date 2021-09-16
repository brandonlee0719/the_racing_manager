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

class OwnerShipTypeEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isShownOwned: false,
      isShownLeased: false
    }

    this.isSeletedOwned = this.isSeletedOwned.bind(this)
    this.isSeletedLeased = this.isSeletedLeased.bind(this)
    this.showMoreOwned = this.showMoreOwned.bind(this)
    this.showMoreLeased = this.showMoreLeased.bind(this)
  }

  isSeletedOwned (value) {
    this.props.onSelectOwnerShipTypeItem(value)
  }

  isSeletedLeased (value) {
    this.props.onSelectOwnerShipTypeItem(value)
  }

  showMoreOwned () {
    this.setState({
      isShownOwned: !(this.state.isShownOwned)
    })
  }

  showMoreLeased () {
    this.setState({
      isShownLeased: !(this.state.isShownLeased)
    })
  }

  render () {
    return (
      <div className="horse-ownership-card">
        <div className={ this.props.value && this.props.value.ownershipType === 'owned' ? 'horse-ownership-card__owned-selected' : 'horse-ownership-card__owned-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="OWNED"
                  name="owned"
                  handleChange={() => { this.isSeletedOwned('owned') }}
                  value={ (this.props.value && this.props.value.ownershipType) === 'owned' } />
                <TextButton
                  text={ this.state.isShownOwned ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='ownership__more-btn'
                  onClick={() => { this.showMoreOwned() }}
                />
                { this.state.isShownOwned ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
        <div className={(this.props.value && this.props.value.ownershipType) === 'leased' ? 'horse-ownership-card__leased-selected' : 'horse-ownership-card__leased-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="LEASED"
                  name="leased"
                  handleChange={() => { this.isSeletedLeased('leased') }}
                  value={ (this.props.value && this.props.value.ownershipType) === 'leased' } />
                <TextButton
                  text={ this.state.isShownLeased ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='ownership__more-btn'
                  onClick={() => { this.showMoreLeased() }}
                />
                { this.state.isShownLeased ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
      </div>
    )

  }
}

export default OwnerShipTypeEditor
