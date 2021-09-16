import React, { PureComponent } from 'react'

import MemberCardForm from 'components/forms/MemberCard'

import Icon from 'components/icon'

import {
  CardView,
  CardFrame,
  CardHeading
} from 'components/cards/FeaturedCard'

class SyndicateAddMemberForm extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      AddMemberFormInfo,
      addMemberFormActions,
      closeForm,
      saveForm,
      dataKey
    } = this.props

    return (
      <CardView className='account-card-form'>
        <CardFrame>
          <CardHeading>
            <div className='account-card-form__form-heading form__group'>
              <Icon
                onClick={() => closeForm()}
                className='account-card-form__close tiny cursor--pointer'
                modifier='close' />
            </div>
            <MemberCardForm dataKey={dataKey} {...AddMemberFormInfo} {...addMemberFormActions} saveForm={saveForm} />
          </CardHeading>
        </CardFrame>
      </CardView>
    )
  }
}

export default SyndicateAddMemberForm
