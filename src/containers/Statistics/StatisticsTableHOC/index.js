import React, {Component} from 'react'
import './StatisticsTable.scss'

import { CSSTransitionGroup } from 'react-transition-group'

const StatisticsTableHOC = (MasterComponent, DetailComponent = null) => (
  class StatisticsTable extends Component {
    constructor (props) {
      super(props)
      this.state = {
        showDetail: false,
        rowData: null,
        height: undefined,
        unique: 'STATS_CONTAINER_' + Math.round(Math.random() * 10000000)
      }
      this.toggleDetail = this.toggleDetail.bind(this)
      this.updateHeight = this.updateHeight.bind(this)
    }

    toggleDetail (row) {
      this.setState({showDetail: !this.state.showDetail, rowData: row})
    }

    updateHeight () {
      if (this.refContainer) {
        if (this.refContainer.offsetHeight !== this.state.height) {
          this.setState({height: this.refContainer.offsetHeight})
        }
      }
    }

    componentDidMount () {
      this.updateHeight()
    }

    componentDidUpdate () {
      this.updateHeight()
    }

    render () {
      const {
        showDetail,
        rowData,
        height,
        unique
      } = this.state

      const variableHeightStyles = {
        height
      }

      return (
        <div className="container relative statistics-table">
          <div className="row">
            <div className="col statistics-table__variable-height" style={variableHeightStyles}>
              {DetailComponent
                ? <CSSTransitionGroup
                  transitionName="stats-transition"
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}>
                  {!showDetail
                    ? <div key='master' ref={(ref) => { this.refContainer = ref }}><MasterComponent onRowClick={this.toggleDetail} {...this.props}/></div>
                    : <div key='detail' ref={(ref) => { this.refContainer = ref }}><DetailComponent onReturnToMaster={this.toggleDetail} {...this.props} rowData={rowData}/></div>
                  }
                </CSSTransitionGroup>
                : <MasterComponent {...this.props}/>
              }
            </div>
          </div>
        </div>
      )
    }
  }
)

export default StatisticsTableHOC
