import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

const Table = props => {
  const { titles, data, className, modifier, showDataDetails } = props

  const modifiedClassNames = classNames('table', className, modifier)
  const commentIndex = titles.indexOf('comment')
  const countTitle = titles.length - 1
  return (
    <div className={modifiedClassNames}>
      <table className='table__el result_table'>
        <thead className='table__head'>
        <tr className='table__row'>
          {titles.map((title, index) => (
            (index !== commentIndex)
            ? <td key={index} className='table__cell'>
                {title}
              </td>
              : null
          ))}
        </tr>
        </thead>
        <tbody className='table__body'>
        {data.map((row, index) => (
          [<tr key={index} className='table__row table__row-normal'>
            {row.map((col, index) => (
              (index !== commentIndex)
              ? <td key={index} className='table__cell' onClick={showDataDetails !== null ? showDataDetails : null}>
                  {col === null || col === '' ? '-' : col}
                </td>
                : null
            ))}
          </tr>,
          <tr className="comment-tr">
            <td className="comment-td" colSpan={countTitle}>
              <div className="comment-content">
                {row[commentIndex]}
              </div>
            </td>
          </tr>]
        ))}
        </tbody>
      </table>
    </div>
  )
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
}

Table.defaultProps = {
  className: '',
  modifier: '',
  data: [],
  titles: []
}

export default Table
