import React, { Component } from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import { withRouter } from 'react-router-dom'

import titleize from 'titleize'

import { fetchSyndicateInfo, clearSyndicateData } from 'actions/syndicate'

import { addToastSuccess, addToastError } from 'actions/toast'

import {
  description as syndicateDesc
} from 'data/syndicate'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

import {requestToJoin} from 'actions/user'

const mapStateToProps = ({ syndicate, auth }, ownProps) => ({
  ...syndicate,
  isLoggedIn: auth.isLoggedIn
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSyndicateInfo: () => {
    const slug = ownProps.match.params.slug
    dispatch(fetchSyndicateInfo(slug))
  },
  clearSyndicateData: () => {
    return dispatch(clearSyndicateData())
  },
  addToastSuccess: (text) => {
    return dispatch(addToastSuccess(text))
  },
  requestToJoin: (syndicateName) => {
    return dispatch(requestToJoin({syndicateName}))
  }
})

const SyndicateViewHoc = (WrapperComponent) => {
  class SyndicateView extends Component {
    constructor (props) {
      super(props)
    }

    componentDidMount () {
      this.props.getSyndicateInfo()
    }

    componentWillUnmount () {
      this.props.clearSyndicateData()
    }

    render () {
      const {
        data = {},
        ...restOfProps
      } = this.props

      const {
        owner = {
          name: '-'
        },
        featuredImage = '',
        logo = '',
        description = syndicateDesc,
        ...rest
      } = data

      const syndicateProps = {
        owner,
        featuredImage,
        logo,
        description,
        ...rest
      }

      return (
        <View title={titleize(owner.name || '')} isPrefixed={false}>
          <div>
            <WrapperComponent
              data={syndicateProps}
              {...restOfProps} />
            <AjaxLoader isVisible={this.props.fetching} />
          </div>
        </View>
      )
    }
  }

  return withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(SyndicateView))
}

export default SyndicateViewHoc
