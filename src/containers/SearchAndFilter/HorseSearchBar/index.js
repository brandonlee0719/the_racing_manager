import React, { Component } from 'react'

import { connect } from 'react-redux'

/**
 *  @module SearchAndFilterBar
 */
import SearchAndFilterBar from 'components/searchandfilter/SearchAndFilterBar'

import {
  updateHorseSeachQuery,
  updateHorseSort,
  toggleHorseFilterPanel
} from 'actions/browsehorses'

class HorseSearchFilterBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      updateSearchQuery,
      updateSort,
      query,
      sort,
      attributes,
      toggleFilter,
      resultsAmount,
      filterOpen,
      placeholder
    } = this.props

    return (
     <SearchAndFilterBar
        resultsAmount={resultsAmount}
        onFilterClick={toggleFilter}
        filterActive={filterOpen}
        placeholder={placeholder}
        selectOptions={attributes.sort}
        defaultSortValue={sort.displayName || 'relevance'}
        sortValue={sort.displayName}
        onSearchUpdate={updateSearchQuery}
        onSelectUpdate={updateSort}
        searchValue={query}
      />
    )
  }
}

const mapStateToProps = ({browseHorses}, ownProps) => {
  const {
    query,
    sort,
    attributes,
    resultsAmount,
    filterOpen
  } = browseHorses

  return {
    query,
    sort,
    attributes,
    resultsAmount,
    filterOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateSearchQuery: (query) => {
      dispatch(updateHorseSeachQuery(query))

      ownProps.onUpdate()
    },
    updateSort: (name) => {
      dispatch(updateHorseSort(name))

      ownProps.onUpdate()
    },
    toggleFilter: () => {
      dispatch(toggleHorseFilterPanel())

      ownProps.onUpdate()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HorseSearchFilterBar)
