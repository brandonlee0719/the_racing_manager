import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import Dropzone from 'react-dropzone'

import InvoiceTable from 'components/managerdashboard/ManagerdashboardBilling/InvoiceTable'

import TextButton from 'components/buttons/TextButton'

import {
  tableInvoice
} from 'data/managerdashboardbilling'

class InvoiceArchive extends PureComponent {
  constructor (props) {
    super(props)

    this.onDrop = this.onDrop.bind(this)
    this.onOpenDropzoneDialog = this.onOpenDropzoneDialog.bind(this)

    this.dropzoneRef = null
  }

  onDrop (files) {
    alert(JSON.stringify(files))
  }

  onOpenDropzoneDialog () {
    this.dropzoneRef.open()
  }

  render () {
    // const {
    //   uploadedfilesdata
    // } = this.props

    return (
      <div className="file-upload-section">
        <Dropzone
          ref={(node) => { this.dropzoneRef = node }}
          className="upload-zone"
          activeClassName="active"
          disableClick={true}
          onDrop={this.onDrop}>
          <div className="file-upload-section-header">
            <h1 className="uppercase">INVOICE ARCHIVE</h1>
            <div className="small">
              Upload files manually or drag and drop anywhere in your screen.
            </div>
            <div className="file-upload-dropzone">
              <TextButton
                className='__button'
                text='add a new invoice +'
                onClick={this.onOpenDropzoneDialog}/>
            </div>
          </div>
          <div className="uploaded-files-table">
            <div className="invoice-table">
              <h2 className="uppercase">
                Document uploads<sup>{tableInvoice.data.length}</sup>
              </h2>
              <InvoiceTable
                data={tableInvoice}/>
            </div>
            <div className="load-more-button">
              <TextButton
                text='Load more'
                modifier='secondary'
                className='manager-dashboard__more-btn'
                onClick={() => {}}
              />
            </div>
          </div>
        </Dropzone>
      </div>
    )
  }
}

InvoiceArchive.propTypes = {
  uploadedfilesdata: PropTypes.object
}

export default InvoiceArchive