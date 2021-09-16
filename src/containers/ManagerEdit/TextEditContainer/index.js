import React, { Component } from 'react'

import { connect } from 'react-redux'

import TextEdit from 'components/manageredit/TextEdit'

import EditButton from 'components/manageredit/EditButton'

import processMediaPayload from 'utils/mediapayload'

import {showEditOptions} from 'utils/managerutils'

import PropTypes from 'prop-types'

class TextEditContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }

    this.showEditPopup = this.showEditPopup.bind(this)
    this.cancelQuote = this.cancelQuote.bind(this)
    this.updateValue = this.updateValue.bind(this)
    this.saveQuote = this.saveQuote.bind(this)
    this.hideEditPopup = this.hideEditPopup.bind(this)
  }

  showEditPopup () {
    const {data, dataKey} = this.props
    this.setState({
      showEdit: true,
      value: data[dataKey]
    })
  }

  hideEditPopup () {
    this.setState({
      showEdit: false
    })
  }

  cancelQuote () {
    const {data, dataKey} = this.props
    this.setState({
      value: data[dataKey]
    }, () => {
      this.hideEditPopup()
    })
  }

  saveQuote () {
    const {submitUpdate, dataKey} = this.props
    const {value} = this.state
    submitUpdate({[dataKey]: value})
      .then(this.hideEditPopup)
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
      title = null,
      editLabel = 'update description',
      children: Component,
      placeholder,
      maxLength = 2000,
      modifier,
      buttonModifier
    } = this.props

    if (!showEditOptions()) { // Child passes stright through
      return <Component />
    }

    return (
      <div style={{position: 'relative'}}>
        <EditButton
          onClick={this.showEditPopup}
          title={editLabel}
          position='absolute'
          modifier={buttonModifier}
          iconModifier='update' />
        <TextEdit
          title={title}
          handleChange={this.updateValue}
          text={value}
          placeholder={placeholder}
          onSave={this.saveQuote}
          onCancel={this.cancelQuote}
          isOpen={showEdit}
          maxLength={maxLength}
          className={modifier}/>
        <Component />
      </div>
    )
  }
}

TextEditContainer.propTypes = {
  children: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    placeholder: ownProps.placeholder
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitUpdate: (values) => {
      return dispatch(ownProps.submitAction(ownProps.data.slug, processMediaPayload(values)))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextEditContainer)
