import React, {Component} from 'react'
import StatisticsTableHOC from '../StatisticsTableHOC'
import {connect} from 'react-redux'
import {fetchHorseStatisticsEntries} from 'actions/horse'
import HorseTable from 'components/horse/HorseStatisticsTable'

const tableColumns = [
  'DATE',
  'TIME',
  'COURSE',
  'RACE',
  'BEST'
]

const commentGenerator = (row) => {
  return row.COMMENT
}

class HorseStatisticsEntries extends Component {
  componentDidMount () {
    const {
      fetchHorseStatisticsEntries,
      match: {params: {slug}}
    } = this.props
    fetchHorseStatisticsEntries(slug)
  }

  render () {
    const {entries} = this.props

    return (
      <HorseTable
        title='Entries'
        firstColumns={tableColumns}
        commentGenerator={commentGenerator}
        data={entries} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    entries: state.horse.horseInfo.statisticsEntries
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHorseStatisticsEntries: (slug) => {
      dispatch(fetchHorseStatisticsEntries(slug))
    }
  }
}

export default StatisticsTableHOC(connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseStatisticsEntries))
