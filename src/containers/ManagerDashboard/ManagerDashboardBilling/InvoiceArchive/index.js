import React, { Component } from 'react'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module Invoice Archive
 */
import InvoiceArchive from 'components/managerdashboard/ManagerDashboardBilling/InvoiceArchive'

import {
  getUploadedfiles
} from 'actions/managerdashboardbilling/InvoiceArchive'

class InvoiceArchiveContainer extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.getUploadedfiles()
  }

  render () {
    return (
      <InvoiceArchive
        {...this.props} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    managerDashboardBilling
  } = state

  const {
    uploadedfilesdata
  } = managerDashboardBilling.invoiceArchive

  return {
    uploadedfilesdata
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUploadedfiles: () => {
      dispatch(getUploadedfiles())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceArchiveContainer)
