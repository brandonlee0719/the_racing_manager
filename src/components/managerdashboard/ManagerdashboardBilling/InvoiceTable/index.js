import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import Table from 'components/gui/Table'

class InvoiceTable extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      title,
      data
    } = this.props
    return (
      <TitleDescriptionSection
        colorModifier='blue'
        title={title}
      >
        <Table
          {...data}
          delete={true}
          sortable={['File name', 'Data of upload']}/>
      </TitleDescriptionSection>
    )
  }
}

InvoiceTable.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object
}

export default InvoiceTable
