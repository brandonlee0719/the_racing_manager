import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import TextButton from 'components/buttons/TextButton'

import _ from 'lodash'

class Table extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      sortDir: '',
      sortNum: null,
    }

    this.onSortChange = this.onSortChange.bind(this)
  }

  onSortChange (e) {
    if (e === this.state.sortNum) {
      if (this.state.sortDir === 'asc') {
        this.setState({
          sortNum: e,
          sortDir: 'desc'
        })
      } else if (this.state.sortDir === 'desc') {
        this.setState({
          sortNum: e,
          sortDir: 'asc'
        })
      }
    } else {
      this.setState({
        sortNum: e,
        sortDir: 'asc'
      })
    }
  }

  render () {
    const { titles, className, modifier, data, sortable, showDataDetails } = this.props

    const modifiedClassNames = classNames('table', className, modifier)

    let dirImage = this.state.sortDir === 'asc' ? <i className="fa fa-sort-asc" aria-hidden="true"></i>
      : <i className="fa fa-sort-desc" aria-hidden="true"></i>

    let temp = data

    let array = _.orderBy(temp, [this.state.sortNum], [this.state.sortDir])

    return (
      <div className={modifiedClassNames}>
        <table className='table__el'>
          <thead className='table__head'>
          <tr className='table__row'>
            {titles.map((title, index) => (
              title === sortable[index] ? <td key={index} className='table__cell'>
                <a onClick={() => this.onSortChange(index)}>{title}</a> { index === this.state.sortNum ? dirImage : <i className="fa fa-sort" aria-hidden="true"></i>
              }
              </td> : <td className='table__cell'>{title}</td>))}
            { this.props.delete ? <td className='table__cell' /> : null }
          </tr>
          </thead>
          <tbody className='table__body'>
          {array.map((row, index) => (
            <tr key={index} className='table__row table__row-normal'>
              {row.map((col, index) => (
                <td key={index} className='table__cell' onClick={showDataDetails !== null ? showDataDetails : null}>
                  {col}
                </td>
              ))}
                { this.props.delete ? <TextButton
                  text='DELETE'
                  modifier='secondary'
                  className='manager-dashboard__more-btn'
                  onClick={() => {}}
                /> : null
                }
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
}

Table.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  children: PropTypes.any,
  sortable: PropTypes.array
}

Table.defaultProps = {
  className: '',
  modifier: '',
  data: [],
  titles: [],
  sortable: []
}

export default Table