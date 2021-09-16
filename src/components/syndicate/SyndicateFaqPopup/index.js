import React, { Component } from 'react'

import PopupWithBreadcrumb from 'components/popup/PopupWithBreadcrumb'

import SyndicateFaqs from 'components/syndicate/SyndicateFaqs'

import ContactForm from 'components/forms/Contact'

import FullWidthSplitSection from 'components/common/FullWidthSplitSection'

class SyndicateFaqPopup extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      faqs
    } = this.props

    return (
      <div className='syndicate-faq-popup'>
        <FullWidthSplitSection
          modifier='white'
          leftComponent={(
            <div className='col-xs-12 col-md-8 public-syndicate__faqs'>
              <SyndicateFaqs faqs={faqs} />
            </div>
          )}
          rightComponent={(
            <div className='public-syndicate__contact-form'>
              {/* Add in the contact form container */}
              <ContactForm
                values={{}}
                errors={{}}
                validators={() => {}}
                update={() => {}}
                updateErrors={() => {}}
                submitForm={() => {}}
                description='Any queries? Leave your message and somebody from the syndicate will get back to you as soon as possible.' />
            </div>
          )} />
      </div>
    )
  }
}

export default PopupWithBreadcrumb(SyndicateFaqPopup)
