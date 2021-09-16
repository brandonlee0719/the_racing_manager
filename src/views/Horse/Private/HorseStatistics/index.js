import React, { Component } from 'react'

import { connect } from 'react-redux'

import horseView from 'views/Horse/View'

import HorseHero from 'components/horse/HorseHero'
import HorseNavBar from 'components/horse/HorseNavBar'

// Stats containers
import HorseStatisticsContainer from 'containers/Statistics/HorseStatistics'

import HorseResults from 'containers/Statistics/HorseResults'

import HorseEntries from 'containers/Statistics/HorseEntries'

class HorseStatistics extends Component {
  render () {
    const {
      data,
    } = this.props

    return (
      <div className='horse-statistics'>
        <HorseHero
          data={data} />

        <HorseNavBar
          data={data} />

        <HorseStatisticsContainer {...this.props}/>

        <HorseEntries {...this.props}/>

        <HorseResults {...this.props}/>

      </div>
    )
  }
}

const mapStateToProps = function ({horse}) {
  return {}
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {}
}

export default horseView(connect(mapStateToProps, mapDispatchToProps)(HorseStatistics))
