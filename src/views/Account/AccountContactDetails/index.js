import React, { PureComponent } from 'react'

import ContactDetailsFormContainer from 'containers/Account/ContactDetailsForm'

class AccountContactDetails extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='account-contact-details'>
        <div className='account-contact-details__container'>
          <div className='col-lg-6 col-md-8 col-sm-10 col-xs-12'>
            <h2 className='uppercase'>
              Contact details
            </h2>
            <div className='account-contact-details__section'>
              <p className='small'>
                This will allow us to keep you up to date with your horses and clubs
              </p>
            </div>
            <div className='account-contact-details__section'>
              <ContactDetailsFormContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AccountContactDetails
