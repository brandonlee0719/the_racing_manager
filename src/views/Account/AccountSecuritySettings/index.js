import React, { PureComponent } from 'react'

import TextButton from 'components/buttons/TextButton'

import ResetPasswordForm from 'containers/Account/ResetPasswordForm'

import FadeIn from 'components/animation/FadeIn'

class AccountSecuritySettings extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      showForm: false
    }

    this.showResetPassword = this.showResetPassword.bind(this)
    this.hideResetPassword = this.hideResetPassword.bind(this)
  }

  showResetPassword () {
    this.setState({
      showForm: true
    })
  }

  hideResetPassword () {
    this.setState({
      showForm: false
    })
  }

  render () {
    const {
      showForm
    } = this.state

    return (
      <div className='account-security-settings'>
        <div className='account-security-settings__container'>
          <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
            <h2 className='uppercase'>
              Security settings
            </h2>
            <div className='account-security-settings__section'>
              <p className='small'>
                Change your security settings
              </p>
            </div>
            <FadeIn loc={showForm}>
              {
                !showForm
                ? (
                    <div className='account-security-settings__section'>
                      <div>
                        <TextButton
                          onClick={this.showResetPassword}
                          text={'change password'} />
                      </div>

                      <div className='account-security-settings__section'>
                        <h6 className='italic uppercase link account-security-settings__cta-text cursor--pointer'>
                          deactivate account
                        </h6>
                      </div>
                    </div>
                )
                : (
                  <div className='account-security-settings__section'>
                    <ResetPasswordForm
                      onFormCancel={this.hideResetPassword} />
                  </div>
                )
              }
            </FadeIn>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountSecuritySettings
