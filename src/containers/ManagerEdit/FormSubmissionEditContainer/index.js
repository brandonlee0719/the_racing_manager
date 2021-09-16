import React, { Component } from 'react'

import { connect } from 'react-redux'

import FormSubmissionEdit from 'components/manageredit/FormSubmissionEdit'

import EditButton from 'components/manageredit/EditButton'

import PropTypes from 'prop-types'

class FormSubmissionEditContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }

    this.saveQuote = this.saveQuote.bind(this)
    this.cancelQuote = this.cancelQuote.bind(this)
    this.showEditPopup = this.showEditPopup.bind(this)
    this.hideEditPopup = this.hideEditPopup.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

  showEditPopup () {
    this.setState({
      showEdit: true
    })
  }

  hideEditPopup () {
    this.setState({
      showEdit: false
    })
  }

  saveQuote () {
    // Save quote!
    this.hideEditPopup()
  }

  cancelQuote () {
    // Cancel quote!
    this.setState({
      value: ''
    }, () => {
      this.hideEditPopup()
    })
  }

  updateValue (e) {
    if (e && e.target) {
      this.setState({
        value: e.target.value
      })
    }
  }

  render () {
    const {
      showEdit,
      value
    } = this.state

    const {
      children: Component
    } = this.props

    let newProps = !showEdit ? { value } : {}

    return (
      <div>
        <EditButton
          position={['absolute', 'right']}
          onClick={this.showEditPopup}
          title='update contact'
          iconModifier='update' />
        <FormSubmissionEdit
          handleChange={this.updateValue}
          email={value}
          onSave={this.saveQuote}
          onCancel={this.cancelQuote}
          isOpen={showEdit} />
        <Component {...newProps} />
      </div>
    )
  }
}

FormSubmissionEditContainer.propTypes = {
  children: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSubmissionEditContainer)
