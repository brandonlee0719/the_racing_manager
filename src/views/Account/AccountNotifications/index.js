import React, { PureComponent } from 'react'

import Checkbox from 'components/input/Checkbox'

import TextButton from 'components/buttons/TextButton'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

import { getAccountNotification, updateAccountNotification } from 'api/Services'

import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

class AccountNotifications extends PureComponent {
  constructor (props) {
    super(props)

    // USE FORM COMPONENT INSTEAD, THIS IS ONLY FOR DEMO
    this.state = {
      email: false,
      text: false,
      apple: false,
      submitting: false,
      error: null,
      resultmessage: false
    }

    this.toggleEmail = this.toggleEmail.bind(this)
    this.toggleText = this.toggleText.bind(this)
    this.toggleNotification = this.toggleNotification.bind(this)
  }

  componentWillMount () {
    const token = getItem(USER_TOKEN)

    this.getAccountNotification(token)
  }

  getAccountNotification (token) {
    this.setState({
      submitting: true
    })
    return getAccountNotification(token)
    .then((result) => {
      this.setState({ email: result.email, text: result.text, apple: result.apple, submitting: false })
    })
    .catch(() => {
      this.setState({ error: 'Failed the setup' })
    })
  }

  updateAccountNotification (data, token) {
    this.setState({
      submitting: true
    })
    return updateAccountNotification(data, token)
    .then((result) => {
      this.setState({ submitting: false, resultmessage: true })
    })
    .catch(() => {
      this.setState({ error: 'Failed the setup'})
    })
  }

  toggleEmail () {
    this.setState(({email}) => ({
      email: !email
    }))
  }

  toggleText () {
    this.setState(({text}) => ({
      text: !text
    }))
  }

  toggleNotification () {
    this.setState(({apple}) => ({
      apple: !apple
    }))
  }

  render () {
    const {
      email,
      text,
      apple,
      submitting,
      resultmessage
    } = this.state

    const token = getItem(USER_TOKEN)

    return (
      <div className='account-notifications'>
        <div className='account-notifications__container'>
          <div className='row'>
            <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
              <h2 className='uppercase'>
                Notifications
              </h2>
              <div className='account-notifications__section'>
                <p className='small'>
                  Choose how you prefer to be kept abreast of your racing news
                </p>
              </div>
              <div className='account-notifications__section account-notifications__section--lg'>
                <div className='row-sm'>
                  {
                    /*
                      This should be extracted to a redux aware container when integrating with server.
                     */
                  }
                  <div className='col-xs-12 col-sm-4 align-middle form__group'>
                    <Checkbox
                      value={email}
                      handleChange={this.toggleEmail}
                      label='Email'
                      name='email' />
                  </div>
                  <div className='col-xs-12 col-sm-4 align-middle form__group'>
                    <Checkbox
                      value={text}
                      handleChange={this.toggleText}
                      label='Text'
                      name='text' />
                  </div>
                  <div className='col-xs-12 col-sm-4 align-middle form__group'>
                    <Checkbox
                      value={apple}
                      handleChange={this.toggleNotification}
                      label={<span>Apple push notification</span>}
                      name='notification' />
                  </div>
                </div>
              </div>
              <AjaxLoader isVisible={submitting} />
              { resultmessage ? <span className="result-message">The account notification set successfully!</span> : null }
              <div className='account-notifications__section'>
                <TextButton
                  text='save changes'
                  onClick={() => this.updateAccountNotification({ email: email, text: text, apple: apple }, token)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountNotifications
