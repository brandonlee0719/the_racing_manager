
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import Input from 'components/input/Input'

import TextButton from 'components/buttons/TextButton'

import TextEditContainer from 'containers/ManagerEdit/TextEditContainer'

import SyndicateBenefits from 'components/syndicate/SyndicateBenefits'

import {submitSyndicateData} from 'actions/syndicate'

import {setSyndicateName, submitSyndicateName} from 'actions/registerSyndicate/syndicateName'

import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import {
  registerNameTitle,
  registerNameDescription
} from 'data/syndicate'

class RegisterSyndicateNameContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }

  }

  submitSyndicateName () {
    const token = getItem(USER_TOKEN)
    this.props.submitSyndicateName(token, this.props.syndicateName)
    .then(() => this.props.history.push('/register-syndicate'))
  }

  render () {
    const nameData = {
      description: registerNameDescription,
      featuredImage: '',
      logo: ''
    }
    return (
      <div className="register-syndicate-name-content">
        <div className="col-xs-12">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-7 name-description">
            <TextEditContainer
              title='Edit benefits'
              data={nameData}
              editLabel='update benefits'
              dataKey='benefits'
              maxLength={2000}
              submitAction={submitSyndicateData}>
              {
                ({ value }) => {
                  return (
                    <SyndicateBenefits title={registerNameTitle} titleModifier="h2" description={registerNameDescription} />
                  )
                }
              }
            </TextEditContainer>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5 name-input-section">
            <Input
              inputClassName='text-center'
              name='counter'
              handleChange={(e) => { this.props.setSyndicateName(e.currentTarget.value) }}
              handleBlur={() => {}}
              placeholder={`ENTER DESIRED NAME`} />
          </div>
        </div>
        <div className="col-xs-12 name-footer">
          <div className="name-submit-button">
            <TextButton
              onClick={() => { this.submitSyndicateName() }}
              modifier={['fluid']}
              isDisabled={false}
              text='APPLY FOR NAME' />
            <div className="comment">
              <span>This button will become active one you have selected an available name</span>
            </div>
          </div>
          <div className="footer-image">
            <span>Powered by the </span>
            <img src="/assets/images/BHA_Logo1.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    syndicateName: state.registerSyndicate.syndicateName.name,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSyndicateName: (name) => {
      dispatch(setSyndicateName(name))
    },
    submitSyndicateName: (token, name) => {
      return dispatch(submitSyndicateName(token, name))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterSyndicateNameContainer))
