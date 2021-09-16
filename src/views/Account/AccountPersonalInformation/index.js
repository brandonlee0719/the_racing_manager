import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import PersonalInformationFormContainer from 'containers/Account/PersonalInformationFormContainer'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

class AccountPersonalInformation extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      isSubmittingForm
    } = this.props

    return (
      <div className='account-personal-information'>
        <div className='account-personal-information__container'>
          <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
            <h2 className='uppercase'>
              Profile information
            </h2>
            <div className='account-personal-information__section'>
              <p className='small'>
                Personalise your Racing Manager profile
              </p>
            </div>
            <div className='account-personal-information__section'>
              <PersonalInformationFormContainer />
            </div>
          </div>
        </div>
        <AjaxLoader isVisible={isSubmittingForm} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    auth,
    account
  } = state

  const {
    personalInformation
  } = account

  const {
    details
  } = auth

  return {
    name: details.firstname,
    isSubmittingForm: personalInformation.isSubmitting
  }
}

export default connect(
  mapStateToProps,
  null
)(AccountPersonalInformation)
