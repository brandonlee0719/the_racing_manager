import React, { Component } from 'react'

import { connect } from 'react-redux'

import ImageEdit from 'components/manageredit/ImageEdit'

import EditButton from 'components/manageredit/EditButton'

import processMediaPayload from 'utils/mediapayload'

import {submitHorseData} from 'actions/horse'

import {showEditOptions} from 'utils/managerutils'

import PropTypes from 'prop-types'

class ImageEditContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }

    this.showEditPopup = this.showEditPopup.bind(this)
    this.cancelImage = this.cancelImage.bind(this)
    this.updateValue = this.updateValue.bind(this)
    this.saveImage = this.saveImage.bind(this)
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

  cancelImage () {
    const {data, dataKey} = this.props
    this.setState({
      value: data[dataKey]
    }, () => {
      this.hideEditPopup()
    })
  }

  saveImage (image) {
    const {submitUpdate, dataKey} = this.props
    submitUpdate({[dataKey]: image})
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
      editLabel = 'update image',
      children: Component,
      description,
      submitUpdate
    } = this.props

    if (!showEditOptions()) { // Child passes stright through
      return <Component />
    }

    return (
      <div>
        <EditButton
          onClick={this.showEditPopup}
          title={editLabel}
          position='absolute'
          iconModifier='update' />
        <ImageEdit
          title={title}
          description={description}
          handleChange={this.saveImage}
          onCancel={this.cancelImage}
          isOpen={showEdit}
          canSave={false}/>
        <Component />
      </div>
    )
  }
}

ImageEditContainer.propTypes = {
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
)(ImageEditContainer)
