import React, {Component} from 'react'
import StatisticsTableHOC from '../StatisticsTableHOC'
import {connect} from 'react-redux'
import {fetchHorseStatisticsResults, fetchHorseStatisticsResultsDetail} from 'actions/horse'
import HorseTable from 'components/horse/HorseStatisticsTable'
import timeformLogo from 'assets/icons/timeform_logo.jpg'
import moment from 'moment'

const tableColumns = [
  'DATE',
  'COURSE',
  'RESULT',
  'BTN',
  'OR',
  'EQ',
  'JOCKEY',
  'ISP',
  'BSP',
  'IP',
  'IPS',
  'TFIG',
]

const commentGenerator = (row) => {
  return <span><img src={timeformLogo} alt='Timeform Comment' className='timeform-logo'/> {row.COMMENT}</span>
}

class HorseStatisticsResults extends Component {
  componentDidMount () {
    const {
      fetchHorseStatisticsResults,
      match: {params: {slug}}
    } = this.props
    fetchHorseStatisticsResults(slug)
  }

  render () {
    const {results, onRowClick} = this.props

    return (
      <HorseTable
        title='Results'
        firstColumns={tableColumns}
        commentGenerator={commentGenerator}
        data={results}
        onRowClick={onRowClick}/>
    )
  }
}

const tableColumnsDetail = [
  'POSITION',
  'SILK',
  'HORSENAME',
  'JOCKEY',
  'TRAINER',
  'TFR',
  'AGE',
  'ISP',
  'BHARATING',
  'TOPRATED'
]

class HorseStatisticsResultsDetail extends Component {
  componentDidMount () {
    const {
      fetchHorseStatisticsResultsDetail,
      match: {params: {slug}},
      rowData,

    } = this.props
    fetchHorseStatisticsResultsDetail(slug, rowData.DATE)
  }

  render () {
    const {
      resultsDetail,
      onRowClick,
      rowData,
      onReturnToMaster
    } = this.props

    const displayDate = moment(rowData.DATE).format('MMMM Do YYYY');

    return (
      <HorseTable
        title={`${rowData.COURSE} ${displayDate}`}
        data={resultsDetail}
        firstColumns={tableColumnsDetail}
        description={<a onClick={onReturnToMaster}>Back to results</a>}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    results: state.horse.horseInfo.statisticsResults,
    resultsDetail: state.horse.horseInfo.statisticsResultsDetail
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHorseStatisticsResults: (slug) => {
      dispatch(fetchHorseStatisticsResults(slug))
    },
    fetchHorseStatisticsResultsDetail: (slug, meetingDate) => {
      dispatch(fetchHorseStatisticsResultsDetail(slug, meetingDate))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatisticsTableHOC(HorseStatisticsResults, HorseStatisticsResultsDetail))
