/**
 *  @module react
 */
import React, { PureComponent } from 'react'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

/**
 *  @module title
 */
import { ONBOAEDING_SYNDICATE_JOURNEY as title } from 'data/titles'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import {
  onboardingDescription,
  onboardingOptionDescription
} from 'data/syndicate'

import {multilineTextToJSX} from 'utils/textutils'

/**
 *  @module Counter
 */
import HorseCounter from 'components/buttons/Counter'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

import {
  horseNumbers,
  getSeletedHorse,
  getSelectedHorseNameEditor,
  getSelectHorseName,
  getDurationValue,
  getOwnerShipTypeValue,
  getTeamSizeValue,
  RegisterHorsesInSyndicate
} from 'actions/registerSyndicate/onboardingSyndicateJourney'

import HorseNameEditor from 'components/onboardingSyndicateJourney/HorseNameEditor'

import DurationEditor from 'components/onboardingSyndicateJourney/DurationEditor'

import OwnerShipTypeEditor from 'components/onboardingSyndicateJourney/OwnerShipTypeEditor'

import TeamSizeEditor from 'components/onboardingSyndicateJourney/TeamSizeEditor'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

/**
 * @name OnboardingSyndicateJourney
 * @class
 * @extends PureComponent
 */

class OnboardingSyndicateJourney extends PureComponent {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)

    this.state = {
      selectedHorseNum: null
    }

    this.horseNumbers = this.horseNumbers.bind(this)
    this.horseNameEdit = this.horseNameEdit.bind(this)
    this.onRegisterClick = this.onRegisterClick.bind(this)
    this.resultMessages = this.resultMessages.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    nextProps.selectedHorse && this.setState({ selectedHorseNum: nextProps.selectedHorse })
  }

  onRegisterClick () {
    this.props.RegisterHorses(this.props.horses)
    .then(() => this.props.history.push('/register-syndicate'))
  }

  horseNumbers (value) {
    this.props.horseNumbers(value)
  }

  resultMessages () {
    if (this.props.horseCondition === 'failed') {
      return <span className="failed-message">This horse exist in other syndciate. Please select the other horse.</span>
    } else if (this.props.horseCondition === 'success') {
      return <span className="success-message">The horse was selected successfully!</span>
    }
  }


  horseNameEdit (val) {
    let horseNum = []
    for (var i = 1; i <= val; i++) {
      horseNum.push(
        <div className="horse-name-editor" key={i}>
          <HorseNameEditor
            selectHorseNameEditor={this.props.selectHorseNameEditor}
            selectHorseName={this.props.selectHorseName}
            value={this.props.currentValues && this.props.currentValues[this.props.selectedHorse - 1]}
            onClickHorse={this.props.onClickHorse}
            horseName={this.props.horseName}
            datakey={i} />
          <div className="message">{this.resultMessages()}</div>
        </div>
      )
    }
    return horseNum
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    const {
      horseCount,
      isSubmitting
    } = this.props

    const horseNameEdit = this.horseNameEdit(horseCount)

    return (
      <View title={title}>
        <div className="onboarding-syndicate-journey">
          <div className="onboarding-syndicate-journey__header">
            <ViewHeader
              title={`horses`} />
          </div>
          <div className="container onboarding-syndicate-journey__section">
            <div className="syndicate-horses-number">
              <TitleDescriptionSection
                title='how many horses?'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)}
                >
                <div className="horses-counter">
                  <HorseCounter
                    defaultCount={this.props.horseCount}
                    onChange={(value) => this.horseNumbers(value)}/>
                </div>
              </TitleDescriptionSection>
            </div>
            <div className="syndicate-horses-tell">
              <TitleDescriptionSection
                title='tell us more'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)} />
              { horseNameEdit }
            </div>
            <div className="syndicate-horses-duration">
              <TitleDescriptionSection
                title='run duration'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)}>
                <p>What is the team's running duration?</p>
              </TitleDescriptionSection>
              <DurationEditor
                onSelectDurationItem={this.props.onSelectDurationItem}
                selectedHorse={this.state.selectedHorseNum}
                value={this.props.horses && this.props.horses[this.state.selectedHorseNum - 1]} />
            </div>
            <div className="syndicate-horses-ownership-type">
              <TitleDescriptionSection
                title='ownership type'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)}>
                <p>Do you own or lease it?</p>
              </TitleDescriptionSection>
              <OwnerShipTypeEditor
                onSelectOwnerShipTypeItem={this.props.onSelectOwnerShipTypeItem}
                selectedHorse={this.state.selectedHorseNum}
                value={this.props.horses && this.props.horses[this.state.selectedHorseNum - 1]} />
            </div>
            <div className="syndicate-horses-team-size">
              <TitleDescriptionSection
                title='team size'
                titleModifier='h2'
                colorModifier='blue'
                description={multilineTextToJSX(onboardingDescription)}>
                <p>Including you,how many people will be involved?</p>
              </TitleDescriptionSection>
              <TeamSizeEditor
                onSelectTeamSizeItem={this.props.onSelectTeamSizeItem}
                selectedHorse={this.state.selectedHorseNum}
                value={this.props.horses && this.props.horses[this.state.selectedHorseNum - 1]} />
            </div>
            <AjaxLoader isVisible={isSubmitting} />
          </div>
          <div className="syndicate-horses-option">
            <div className="syndicate-horses-option__header">
              <TitleDescriptionSection
                title='your best option'
                titleModifier='h1'
                colorModifier='blue' >
                <div className="logo-image" style={{ backgroundImage: `url(/assets/images/logo.svg)` }}></div>
                <p>RECOMMEND</p>
              </TitleDescriptionSection>
            </div>
            <div className="syndicate-horses-option__content" style={{ backgroundImage: `url(/assets/images/wave.svg)` }}>
              <div className="content-left">
                <TitleDescriptionSection
                  title='racing ownership'
                  titleModifier='h2'
                  colorModifier='blue'
                  description='1-20 People'>
                  <div className="description">
                    <span className="description-content">{ onboardingOptionDescription }</span>
                    <span className="description-read-more">READ MORE</span>
                    <TextButton
                      modifier='fluid'
                      onClick={this.onRegisterClick}
                      text='CONTINUE APPLICATION' />
                    </div>
                </TitleDescriptionSection>
              </div>
              <div className="content-right" style={{ backgroundImage: `url(/assets/images/onboarding-horse.png)` }}></div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    registerSyndicate
  } = state

  const {
    onboardingSyndicateJourney
  } = registerSyndicate

  const {
    horseCount,
    currentValues,
    selectedHorse,
    horses,
    horseName,
    horseCondition,
    isSubmitting
  } = onboardingSyndicateJourney

  return {
    horseCount,
    currentValues,
    selectedHorse,
    horses,
    horseName,
    horseCondition,
    isSubmitting
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    horseNumbers: (value) => {
      dispatch(horseNumbers(value))
    },
    onClickHorse: (value) => {
      dispatch(getSeletedHorse(value))
    },
    selectHorseNameEditor: (value, token) => {
      dispatch(getSelectedHorseNameEditor(value, token))
    },
    selectHorseName: (value, token) => {
      dispatch(getSelectHorseName(value, token))
    },
    onSelectDurationItem: (value) => {
      dispatch(getDurationValue(value))
    },
    onSelectOwnerShipTypeItem: (value) => {
      dispatch(getOwnerShipTypeValue(value))
    },
    onSelectTeamSizeItem: (value) => {
      dispatch(getTeamSizeValue(value))
    },
    RegisterHorses: (value) => {
      return dispatch(RegisterHorsesInSyndicate(value))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(OnboardingSyndicateJourney))
