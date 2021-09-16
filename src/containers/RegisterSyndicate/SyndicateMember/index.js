import React, { PureComponent } from 'react'

import _ from 'lodash'

import { connect } from 'react-redux'

import SyndicateAddMemberForm from 'components/syndicate/SyndicateAddMemberForm'

import SyndicateAddMemberCard from 'components/syndicate/SyndicateAddMemberCard'

import SyndicateMemberCard from 'components/syndicate/SyndicateMemberCard'

import {
  updateForm,
  updateFormError,
  resetForm,
  submitFormData
} from 'actions/registerSyndicate/AddMemberForm'

import {setMembersCount} from 'actions/registerSyndicate/syndicateMember'

import { addMemberFormValidators } from 'utils/validation/AddMemberForm'

class SyndicateMemberContainer extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      status: '',
      dataKey: null
    }
  }

  componentWillMount () {
    this.setState({ status: this.props.status, dataKey: this.props.dataKey })

    let countNotEmptyString = this.getCountNotEmptyString()
    if (this.props.RegisterSyndicateInfo.step === 1 && countNotEmptyString === 5) {
      this.props.availableNextStep2()
    }
  }

  /*componentWillReceiveProps (nextProps) {
    let countNotEmptyString = this.getCountNotEmptyString(nextProps.AddMemberFormInfo.values)
    if (this.props.RegisterSyndicateInfo.step === 1 && countNotEmptyString === 5) {
      this.props.availableNextStep2()
    }
  }*/

  changeMemberStatus (status) {
    this.setState({status: status})
  }

  getCountNotEmptyString (formInfo) {
    let countNotEmptyString = 0
    for (let key in formInfo) {
      if (typeof formInfo[key] !== 'undefined' && formInfo[key] !== '') {
        countNotEmptyString++
      }
    }

    return countNotEmptyString
  }

  closeAddMemberForm () {
    let countNotEmptyString = this.getCountNotEmptyString(this.props.AddMemberFormInfo.values)
    if (countNotEmptyString < 5) {
      this.changeMemberStatus('addCard')
      this.props.clearForm(this.state.dataKey)
    } else {
      this.changeMemberStatus('memberCard')
    }
  }

  saveAddMemberForm () {
    this.changeMemberStatus('memberCard')
  }

  editMemberCard () {
    this.changeMemberStatus('addForm')
  }

  deleteMemberCard () {
    this.changeMemberStatus('addCard')
    this.props.clearForm(this.state.dataKey)
    this.props.setMembersCount(this.props.RegisterSyndicateInfo.syndicateCount - 1)
  }

  render () {
    return (
      <div>
        {this.state.status === 'addCard' ? <SyndicateAddMemberCard onClick={() => this.changeMemberStatus('addForm')} /> : null}
        {this.state.status === 'addForm' ? <SyndicateAddMemberForm {...this.props} dataKey={this.state.dataKey} closeForm={() => this.closeAddMemberForm()} saveForm={() => this.saveAddMemberForm()} /> : null}
        {this.state.status === 'memberCard' ? <SyndicateMemberCard {...this.props} deleteCard={() => this.deleteMemberCard()} editCard={() => this.editMemberCard()} /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let syndicateMembers = state.registerSyndicate.syndicateMembers
  let condition = !_.isEmpty(syndicateMembers.membersData.data) && typeof syndicateMembers.membersData.data[ownProps.dataKey] !== 'undefined'
  return {
    AddMemberFormInfo: {
      values: {
        firstname: condition ? syndicateMembers.membersData.data[ownProps.dataKey].firstname : '',
        surname: condition ? syndicateMembers.membersData.data[ownProps.dataKey].surname : '',
        email: condition ? syndicateMembers.membersData.data[ownProps.dataKey].email : '',
        addressline1: condition ? syndicateMembers.membersData.data[ownProps.dataKey].addressline1 : '',
        addressline2: condition ? syndicateMembers.membersData.data[ownProps.dataKey].addressline2 : '',
        postcode: condition ? syndicateMembers.membersData.data[ownProps.dataKey].postcode : '',
        distribution: condition ? syndicateMembers.membersData.data[ownProps.dataKey].distribution : '',
      },
      errors: syndicateMembers.membersData.errors,
      validators: addMemberFormValidators
    },
    RegisterSyndicateInfo: {
      syndicateCount: syndicateMembers.membersInfo.membersCount,
      step: syndicateMembers.membersInfo.step
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addMemberFormActions: {
      update: (dataKey, name, value) => {
        dispatch(updateForm(dataKey, name, value))
      },
      updateErrors: (errors, name) => {
        dispatch(updateFormError(errors, name))
      },
      submitFormData: (dataKey, data) => {
        dispatch(submitFormData(dataKey, data))
      }
    },
    clearForm: (dataKey) => {
      dispatch(resetForm(dataKey))
    },
    setMembersCount: (count) => {
      dispatch(setMembersCount(count))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyndicateMemberContainer)
