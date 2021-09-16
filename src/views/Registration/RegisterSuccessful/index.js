/**
 *  @module React, PureComponent
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module titles
 */
import { REGISTRATION_SUCCESSFUL as title } from 'data/titles'

/**
 *  @module Separator
 */
import Separator from 'components/gui/Separator'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

class RegistrationSuccessful extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      location
    } = this.props

    const email = location && location.state ? location.state.email : ''

    return (
      <View title={title}>
        <div className='registration-successful'>
          <ViewHeader />
          <div className='container'>
            <div className='registration-successful__content-wrapper'>
              <div className='row'>
                <div className='col-xs-12 col-sm-8 col-md-6'>
                  <h2 className='regular uppercase registration-successful__title'>
                    registration successful
                  </h2>
                  <Separator
                    modifier='blue' />
                  <p className='extra-light'>
                    You’re now a Racing Manager Member. We have sent an email to <span className='regular'>{email}</span>. Please click the link to confirm your account.
                    <br/><br/>
                    Please check your emails for a link to access your account.
                  </p>
                </div>
              </div>
              {/*<div className='row'>
                <div className='col-xs-12 col-sm-8 col-md-6 registration-successful__bottom'>
                  <h4 className='regular'>
                    {'Haven\'t received your email?'}
                  </h4>
                  <TextButton
                    className='registration-successful__resend-button'
                    text='resend email' />
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </View>
    )
  }
}

RegistrationSuccessful.propTypes = {
  email: PropTypes.string
}

export default RegistrationSuccessful
