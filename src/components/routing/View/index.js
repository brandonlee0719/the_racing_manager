import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'

import { SITE_NAME as prefix } from 'data/titles'

const View = props => {
  const { title, notPrefixed, children: Component } = props

  const prefixedTitle = `${prefix} - ${title}`
  const documentTitle = !notPrefixed ? prefixedTitle : title

  return (
    <DocumentTitle title={documentTitle}>
      {Component}
    </DocumentTitle>
  )
}

View.propTypes = {
  title: PropTypes.string.isRequired,
  notPrefixed: PropTypes.bool,
  children: PropTypes.any
}

View.defaultProps = {
  title: '',
  notPrefixed: false
}

export default View
