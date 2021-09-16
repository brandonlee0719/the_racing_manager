import React, {Component} from 'react'
import StatisticsTableHOC from '../StatisticsTableHOC'
import {connect} from 'react-redux'
import {fetchHorseStatistics} from 'actions/horse'
import HorseTable from 'components/horse/HorseStatisticsTable'

class HorseStatistics extends Component {
  componentDidMount () {
    const {
      fetchHorseStatistics,
      match: {params: {slug}}
    } = this.props
    fetchHorseStatistics(slug)
  }

  render () {
    const {statistics} = this.props

    return (
      <HorseTable
        title='Ranking'
        data={statistics} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    statistics: state.horse.horseInfo.statisticsRanking
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHorseStatistics: (slug) => {
      dispatch(fetchHorseStatistics(slug))
    }
  }
}

export default StatisticsTableHOC(connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseStatistics))
