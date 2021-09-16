
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import _ from 'lodash'

import TextButton from 'components/buttons/TextButton'

import Counter from 'components/buttons/Counter'

import TextEditContainer from 'containers/ManagerEdit/TextEditContainer'

import SyndicateBenefits from 'components/syndicate/SyndicateBenefits'

import SyndicateSaveMemberForm from 'components/syndicate/SyndicateSaveMemberForm'

import SyndicateSlider from 'containers/RegisterSyndicate/SyndicateSliderContainer'

import SyndicateMemberStepState from 'components/syndicate/SyndicateMemberStepState'

import SyndicateMember from 'containers/RegisterSyndicate/SyndicateMember'

import {submitSyndicateData} from 'actions/syndicate'

import {setMembersCount, setStepStatus, resetSyndicateMemberState} from 'actions/registerSyndicate/syndicateMember'

import {registerSyndicateMembersData, updateSyndicateMembersDistribution, resetSyndicateMemberData} from 'actions/registerSyndicate/AddMemberForm'

import {
  registerMembersTitle,
  registerMembersDescription,
  registerDistributionTitle,
  registerDistributionDescription,
  registerConfirmTitle,
  registerConfirmDescription
} from 'data/syndicate'

class RegisterSyndicateMembersContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      stepStatus: 1,
      availableNextStep2: null,
      value: ''
    }

  }

  componentWillUnmount () {
    this.setState({ stepStatus: 1 })
  }

  setMembersCount (value) {
    this.props.setMembersCount(value)
    if (this.props.MembersInfo.membersCount < value) {
      this.setState({availableNextStep2: false})
    }
  }

  proceedToStep3 () {
    let that = this
    let slug = that.props.syndicateName.slug
    let data = _.values(that.props.MembersData)
    let dbData = that.props.DBMembersData
    if (dbData.length === 0) {
      that.props.registerSyndicateMembersData(slug, JSON.stringify({owners: data}))
      that.setStepStatus(3)
    } else {
      _.forEach(data, function (member) {
        let dbMember = _.filter(dbData, ['email', member.email])
        that.props.updateSyndicateMembersDistribution(slug, JSON.stringify({userId: dbMember._id, shareDistribution: member.distribution}))
      })
      this.setStepStatus(3)
    }
  }

  setStepStatus (step) {
    this.props.setStepStatus(step)
  }

  getTotalDistribution () {
    var membersData = this.props.MembersData
    var totalDistribution = 0;
    for (var key in membersData) {
      totalDistribution += membersData[key].distribution
    }
    return totalDistribution
  }

  availableNextStep2 () {
    this.setState({availableNextStep2: true})
  }

  resetMemberInfo () {
    this.props.resetSyndicateMemberData()
    this.props.resetSyndicateMemberState()
    .then(() => this.props.history.push('/register-syndicate'))
  }

  step1 () {
    const membersData = {
      description: registerMembersDescription,
      featuredImage: '',
      logo: ''
    }
    let SyndicateMembers = []
    for (var i = 1; i <= this.props.MembersInfo.membersCount; i++) {
      SyndicateMembers.push(
        <div className='col-xs-6 col-sm-4 col-md-3 add-member' key={i}>
          <SyndicateMember availableNextStep2={() => { this.availableNextStep2() }} dataKey={i} status='addCard' />
        </div>
      );
    }
    return (
      <div className="register-syndicate-members-content step1">
        <div className="row members-content">
          <div className="col-xs-8 left">
            <div className="col-xs-12 members-description">
              <TextEditContainer
                title='Edit benefits'
                data={membersData}
                editLabel='update benefits'
                dataKey='benefits'
                maxLength={2000}
                submitAction={submitSyndicateData}>
                {
                  ({ value }) => {
                    return (
                      <SyndicateBenefits title={registerMembersTitle} titleModifier="h2" description={registerMembersDescription} />
                    )
                  }
                }
              </TextEditContainer>
            </div>
            <div className="col-xs-12 members-counter">
              <Counter
                min={0}
                max={12}
                defaultCount={this.props.MembersInfo.membersCount}
                onChange={(value) => this.setMembersCount(value)} />
            </div>
          </div>
          <div className="col-xs-4 right">
            <SyndicateMemberStepState />
          </div>
          <div className="col-xs-12 members-detail">
            <div className="title">
              <h2>TELL US MORE</h2>
            </div>
            <div className='add-members__section'>
              <div className='row'>
                  { SyndicateMembers }
              </div>
            </div>
          </div>
        </div>
        <div className="members-footer">
          <TextButton
            onClick={() => { this.setStepStatus(2) }}
            modifier={['fluid']}
            isDisabled={this.props.MembersInfo.membersCount === 0 || _.size(this.props.MembersData) !== this.props.MembersInfo.membersCount/* || !this.state.availableNextStep2*/}
            text='proceed to step 2' />
          <h6 className="btn-comment">SAVE AND CONTINUE LATER</h6>
        </div>
      </div>
    )
  }

  step2 () {
    const distributionData = {
      description: registerDistributionDescription,
      featuredImage: '',
      logo: ''
    }
    let SyndicateSliders = []
    for (var i = 1; i <= this.props.MembersInfo.membersCount; i++) {
      SyndicateSliders.push(
        <div className='col-xs-12 slider-content' key={i}>
          <SyndicateSlider dataKey={i} distribution={this.props.MembersData[i].distribution} totalDistribution={this.getTotalDistribution()} />
        </div>
      );
    }
    return (
      <div className="register-syndicate-members-content step2">
        <div className="row members-content">
          <div className="col-xs-8 left">
            <div className="col-xs-12 members-description">
              <TextEditContainer
                title='Edit benefits'
                data={distributionData}
                editLabel='update benefits'
                dataKey='benefits'
                maxLength={2000}
                submitAction={submitSyndicateData}>
                {
                  ({ value }) => {
                    return (
                      <SyndicateBenefits title={registerDistributionTitle} titleModifier="h2" description={registerDistributionDescription} />
                    )
                  }
                }
              </TextEditContainer>
            </div>
            <div className="col-xs-12 slider-section">
              {SyndicateSliders}
            </div>
          </div>
          <div className="col-xs-4 right">
            <SyndicateMemberStepState stepState='2' />
          </div>
        </div>
        <div className="members-footer">
          <TextButton
            onClick={() => { this.proceedToStep3() }}
            modifier={['fluid']}
            isDisabled={this.getTotalDistribution() !== 100}
            text='proceed to step 3' />
          <h6 className="btn-comment">SAVE AND CONTINUE LATER</h6>
        </div>
      </div>
    )
  }

  step3 () {
    const confirmData = {
      description: registerConfirmDescription,
      featuredImage: '',
      logo: ''
    }
    let SyndicateMembers = []
    for (var i = 1; i <= this.props.MembersInfo.membersCount; i++) {
      SyndicateMembers.push(
        <div className='col-xs-6 col-sm-4 col-md-3 add-member' key={i}>
          <SyndicateMember dataKey={i} status='memberCard' />
        </div>
      );
    }
    return (
      <div className="register-syndicate-members-content step3">
        <div className="row members-content">
          <div className="col-xs-8 left">
            <div className="col-xs-12 members-description">
              <TextEditContainer
                title='Edit benefits'
                data={confirmData}
                editLabel='update benefits'
                dataKey='benefits'
                maxLength={2000}
                submitAction={submitSyndicateData}>
                {
                  ({ value }) => {
                    return (
                      <SyndicateBenefits title={registerConfirmTitle} titleModifier="h2" description={registerConfirmDescription} />
                    )
                  }
                }
              </TextEditContainer>
            </div>
          </div>
          <div className="col-xs-4 right">
            <SyndicateMemberStepState stepState='3' />
          </div>
          <div className="col-xs-12 members-detail">
            <div className='add-members__section'>
              <div className='row'>
                { SyndicateMembers }
              </div>
            </div>
            <div className="distribution-btn">
              <a onClick={ () => { this.setStepStatus(2) }}><h6>EDIT SHARES ATTRIBUTION</h6></a>
            </div>
          </div>
        </div>
        <div className="members-footer">
          <SyndicateSaveMemberForm resetMemberInfo={() => this.resetMemberInfo()} />
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.props.MembersInfo.step === 1 ? this.step1() : null}
        {this.props.MembersInfo.step === 2 ? this.step2() : null}
        {this.props.MembersInfo.step === 3 ? this.step3() : null}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // MembersInfo: state.registerSyndicate.syndicateMembers,
    // MembersData: state.registerSyndicate.membersFormData.membersData
    syndicateName: state.registerSyndicate.syndicateName,
    MembersInfo: state.registerSyndicate.syndicateMembers.membersInfo,
    MembersData: state.registerSyndicate.syndicateMembers.membersData.data,
    DBMembersData: state.registerSyndicate.syndicateMembers.membersData.db
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setStepStatus: (step) => {
      dispatch(setStepStatus(step))
    },
    setMembersCount: (count) => {
      dispatch(setMembersCount(count))
    },
    registerSyndicateMembersData: (slug, data) => {
      return dispatch(registerSyndicateMembersData(slug, data))
    },
    updateSyndicateMembersDistribution: (slug, data) => {
      return dispatch(updateSyndicateMembersDistribution(slug, data))
    },
    resetSyndicateMemberData: () => {
      return dispatch(resetSyndicateMemberData())
    },
    resetSyndicateMemberState: () => {
      return dispatch(resetSyndicateMemberState())
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterSyndicateMembersContainer))
