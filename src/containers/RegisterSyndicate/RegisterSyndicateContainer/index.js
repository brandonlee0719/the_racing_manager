
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import TextEditContainer from 'containers/ManagerEdit/TextEditContainer'

import SyndicateBenefits from 'components/syndicate/SyndicateBenefits'

import TextButton from 'components/buttons/TextButton'

import PropTypes from 'prop-types'

import {
  registerRequireTitle,
  registerRequireDescription,
  registerWaitingTitle,
  registerWaitingDescription
} from 'data/syndicate'

import {submitSyndicateData} from 'actions/syndicate'

class RegisterSyndicateContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }
  }

  render () {
    const waitingData = {
      description: registerWaitingDescription,
      featuredImage: '',
      logo: ''
    }
    const requireData = {
      description: registerRequireDescription,
      featuredImage: '',
      logo: ''
    }
    return (
      <div className="register-syndicate-content">
        <div className="row">
          <div className="col-xs-12 register-requirements">
            <TextEditContainer
              title='Edit benefits'
              data={requireData}
              editLabel='update benefits'
              dataKey='benefits'
              maxLength={2000}
              submitAction={submitSyndicateData}>
              {
                ({ value }) => {
                  return (
                    <SyndicateBenefits title={registerRequireTitle} titleModifier="h2" description={registerRequireDescription} />
                  )
                }
              }
            </TextEditContainer>
            <div className="col-xs-12 requirements-content">
              <div className="col-xs-6 col-md-3">
                <Link to='/register-syndicate-name'>
                  <div className="block">
                    <div className="block-header">
                      <span>PENDING APPROVAL</span>
                    </div>
                    <div className="block-content">
                      <div className="block-body name">
                        <h6>100%</h6>
                        <h2 className="title">NAME</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xs-6 col-md-3">
                <Link to='/register-syndicate-onboarding'>
                  <div className="block">
                    <div className="block-header">
                      <span>IN PROGRESS</span>
                    </div>
                    <div className="block-content">
                      <div className="block-body horse">
                        <h6>45%</h6>
                        <h2 className="title">HORSE</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xs-6 col-md-3">
                <Link to='/register-syndicate-colours'>
                  <div className="block">
                    <div className="block-header">
                      <span>IN PROGRESS</span>
                    </div>
                    <div className="block-content">
                      <div className="block-body colours">
                        <h6>70%</h6>
                        <h2 className="title">COLOURS</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xs-6 col-md-3">
                <Link to='/register-syndicate-members'>
                  <div className="block">
                    <div className="block-header">
                      <span>COMPLETED</span>
                    </div>
                    <div className="block-content">
                      <div className="block-body members">
                        <h6>90%</h6>
                        <h2 className="title">MEMBERS</h2>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-xs-12 requirements-footer">
              <TextButton
                onClick={() => {}}
                modifier={['fluid']}
                isDisabled={false}
                text='submit application' />
            </div>
          </div>
          <div className="col-xs-12 register-waiting">
            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
              <TextEditContainer
                title='Edit benefits'
                data={waitingData}
                editLabel='update benefits'
                dataKey='benefits'
                maxLength={2000}
                submitAction={submitSyndicateData}>
                {
                  ({ value }) => {
                    return (
                      <SyndicateBenefits title={registerWaitingTitle} titleModifier="h2" description={registerWaitingDescription} />
                    )
                  }
                }
              </TextEditContainer>
              <div className="start-btn">
                <TextButton
                  onClick={() => {}}
                  modifier={['secondary', 'fluid']}
                  isDisabled={false}
                  text='START BUILDING PAGES' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterSyndicateContainer)
