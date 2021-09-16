import React, { Component } from 'react'

import { connect } from 'react-redux'

import CardImageEdit from 'components/manageredit/CardImageEdit'

import processMediaPayload from 'utils/mediapayload'

class CardImageEditContainer extends Component {
  constructor (props) {
    super(props)

    this.saveImage = this.saveImage.bind(this)
  }

  saveImage (image) {
    const {submitUpdate, dataKey} = this.props
    submitUpdate({[dataKey]: image})
      .then(this.hideEditPopup)
  }

  render () {
    return (
      <CardImageEdit
        {...this.props}
        handleChange={this.saveImage}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
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
)(CardImageEditContainer)
