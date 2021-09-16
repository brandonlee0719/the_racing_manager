import React, { Component } from 'react'

import PopupWithBreadcrumb from 'components/popup/PopupWithBreadcrumb'

import SyndicateFaqs from 'components/syndicate/SyndicateFaqs'

import ContactForm from 'components/forms/Contact'

import SyndicateInvolvement from 'components/syndicate/SyndicateInvolvement'

import FullWidthSplitSection from 'components/common/FullWidthSplitSection'

import {
  syndicateBenefitsDescription,
} from 'data/syndicate'

class SyndicateFaqPopup extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      faqs,
      data = {},
    } = this.props

    const {
      syndicateBenefits,
      name
    } = data

    console.log(name)

    return (
      <div className='syndicate-faq-popup'>
        <FullWidthSplitSection
          modifier='white'
          leftComponent={(
            <div class="title-description">
              <h1 class="title-description__title uppercase">Join Syndicate</h1>
              <hr class="separator title-description__seperator separator--blue"/>
            </div>
          )}
          rightComponent={(
            <div>
              <SyndicateInvolvement
                benefits={syndicateBenefits}
                description={
                  <div>
                    <ul class="list">
                      <li>2 years fixed period</li>
                      <li>initial cost per percent, £14,300</li>
                      <li>ongoing monthly cost per percent, £800</li>
                      <li>Total cost per percent over lifespan, £33,500</li>
                      <li>5% available</li><li>3/12 member places available</li>
                    </ul>
                  </div>} />
            </div>
          )} />
      </div>
    )
  }
}

export default PopupWithBreadcrumb(SyndicateFaqPopup)
