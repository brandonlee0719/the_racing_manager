/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module title
 */
import { BROWSE_HORSES as title } from 'data/titles'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

/**
 *  @module HorseCardGallery
 */
import HorseCardGallery from 'components/horse/HorseCardGallery'

/**
 *  @module HorseSearchAndFilterBar
 */
import HorseSearchAndFilterBar from 'containers/SearchAndFilter/HorseSearchBar'

/**
 *  @module HorseSearchFilterPanel
 */
import HorseSearchFilterPanel from 'containers/SearchAndFilter/HorseSearchFilterPanel'

/**
 *  @module debounce
 */
import debounce from 'utils/debounce'

/**
 *  @module classNames
 */
import classNames from 'classnames'

import {
  requestFilteredHorses,
  requestSearchFiltersIfNeeded
} from 'actions/browsehorses'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

export class BrowseHorses extends Component {
  constructor (props) {
    super(props)

    this.submitSearch = this.submitSearch.bind(this)
    this.handleSearch = this.handleSearch.bind(this)

    this.debouncedSubmit = debounce(this.submitSearch, 300)
  }

  componentDidMount () {
    this.props.requestSearchFiltersIfNeeded()
  }

  handleSearch () {
    this.debouncedSubmit()
  }

  submitSearch () {
    this.props.requestFilteredHorses()
  }

  render () {
    const {
      results,
      fetchingHorses
    } = this.props

    const modifiedClassGalleryCols = classNames('browse-horses__grid', 'col-xs-12')

    return (
      <View title={title}>
        <div className='browse-horses'>
          <ViewHeader />
          <HorseSearchAndFilterBar
            onUpdate={this.handleSearch}
            placeholder='Search horses, trainer or syndicates' />
          <div className='container'>
            <HorseSearchFilterPanel onUpdate={this.handleSearch}/>
            <div className={modifiedClassGalleryCols}>
              <HorseCardGallery
                data={results}
              />
            </div>
          </div>
          <AjaxLoader isVisible={fetchingHorses} />
        </div>
      </View>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => ({
  ...state.browseHorses
})

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestFilteredHorses: () => {
      return dispatch(requestFilteredHorses())
    },
    requestSearchFiltersIfNeeded: () => {
      return dispatch(requestSearchFiltersIfNeeded())
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseHorses))
