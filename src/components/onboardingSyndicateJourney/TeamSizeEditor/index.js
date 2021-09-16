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

class TeamSizeEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      isShownPerson: false,
      isShownPeople: false
    }

    this.isSelectedPerson = this.isSelectedPerson.bind(this)
    this.isSeletedPeople = this.isSeletedPeople.bind(this)
    this.showMorePerson = this.showMorePerson.bind(this)
    this.showMorePeople = this.showMorePeople.bind(this)
  }

  isSelectedPerson (value) {
    this.props.onSelectTeamSizeItem(value)
  }

  isSeletedPeople (value) {
    this.props.onSelectTeamSizeItem(value)
  }

  showMorePerson () {
    this.setState({
      isShownPerson: !(this.state.isShownPerson)
    })
  }

  showMorePeople () {
    this.setState({
      isShownPeople: !(this.state.isShownPeople)
    })
  }

  render () {
    return (
      <div className="horse-teamsize-card">
        <div className={ this.props.value && this.props.value.teamsize === '1' ? 'horse-teamsize-card__person-selected' : 'horse-teamsize-card__person-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="1 PERSON"
                  name="person"
                  handleChange={() => { this.isSelectedPerson('1') }}
                  value={ this.props.value && this.props.value.teamsize === '1' } />
                <TextButton
                  text={ this.state.isShownPerson ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='teamsize__more-btn'
                  onClick={() => { this.showMorePerson() }}
                />
                { this.state.isShownPerson ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
        <div className={ this.props.value && this.props.value.teamsize === '10' ? 'horse-teamsize-card__people-selected' : 'horse-teamsize-card__people-unselected' }>
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <Checkbox
                  label="2 - 1,000"
                  name="people"
                  handleChange={() => { this.isSeletedPeople('10') }}
                  value={ this.props.value && this.props.value.teamsize === '10' } />
                <TextButton
                  text={ this.state.isShownPeople ? 'Hide' : 'Show More' }
                  modifier='secondary'
                  className='teamsize__more-btn'
                  onClick={() => { this.showMorePeople() }}
                />
                { this.state.isShownPeople ? <div>{ multilineTextToJSX(onboardingDescription) }</div> : null }
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
      </div>
    )

  }
}

export default TeamSizeEditor
