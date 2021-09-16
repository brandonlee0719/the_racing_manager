import React, { PureComponent } from 'react'

import _ from 'lodash'

import { connect } from 'react-redux'

import SyndicateSlider from 'components/syndicate/SyndicateSlider'

import {
  updateForm,
  updateFormError,
  resetForm,
  submitFormData
} from 'actions/registerSyndicate/AddMemberForm'

import { addMemberFormValidators } from 'utils/validation/AddMemberForm'

import {
  registerMembersShareValidationDescription
} from 'data/syndicate'

class SyndicateSliderContainer extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      dataKey: null,
      name: '',
      defaultValue: 0,
      visibleWarningMsg: false
    }
  }

  componentWillMount () {
    let fullName = ''
    let values = this.props.MemberInfo.values
    if (typeof values.firstName !== 'undefined' && values.firstName !== '' && typeof values.surname !== 'undefined' && values.surname !== '') {
      fullName = values.firstName.toUpperCase() + ' ' + values.surname.toUpperCase()
    }

    this.setState({
      dataKey: this.props.dataKey,
      defaultValue: this.props.MemberInfo.values.distribution,
      name: fullName
    })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.distribution !== nextProps.distribution && nextProps.totalDistribution > 100) {
      this.setState({visibleWarningMsg: true})
    } else {
      this.setState({visibleWarningMsg: false})
    }
  }

  onChange () {
    var total = this.props.getTotalDistribution()
    this.props.addMemberFormActions.update()
  }

  render () {
    return (
      <div className="slider-container">
        <h3 className="syndicate-name">{this.state.name}</h3>
        {
          this.state.visibleWarningMsg
            ? <h5 className="warning-msg">{registerMembersShareValidationDescription}</h5>
            : null
        }
        <SyndicateSlider {...this.props} onChange={this.props.addMemberFormActions.update} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let syndicateMembers = state.registerSyndicate.syndicateMembers
  let condition = !_.isEmpty(syndicateMembers.membersData.data) && typeof syndicateMembers.membersData.data[ownProps.dataKey] !== 'undefined'
  let membersData = syndicateMembers.membersData.data
  return {
    MemberInfo: {
      values: {
        firstName: condition ? membersData[ownProps.dataKey].firstName : '',
        surname: condition ? membersData[ownProps.dataKey].surname : '',
        distribution: condition && typeof membersData[ownProps.dataKey].distribution !== 'undefined' ? membersData[ownProps.dataKey].distribution : 0
      },
      errors: syndicateMembers.membersData.errors,
      validators: addMemberFormValidators
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addMemberFormActions: {
      update: (dataKey, value) => {
        dispatch(updateForm(dataKey, 'distribution', value))
      },
      updateErrors: (errors, name) => {
        dispatch(updateFormError(errors, name))
      },
      submitFormData: (dataKey, data) => {
        dispatch(submitFormData(dataKey, data))
      }
    },
    clearForm: () => {
      dispatch(resetForm())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyndicateSliderContainer)
