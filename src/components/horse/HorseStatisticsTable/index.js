import React from 'react'
import moment from 'moment'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

const dateFormatter = (row) => {
  const momentDate = moment(row.DATE)
  return momentDate.format('MMMM Do YYYY')
}

const timeFormatter = (row) => {
  const momentTime = moment(row.TIME)
  return momentTime.format('h:mma')
}

const silkFormatter = (row) => {
  return <img className='silk' src={`https://images.timeform.com/silks/${row.SILKCODE}.png`} />
}

const formatKeys = {
  DATE: dateFormatter,
  TIME: timeFormatter,
  SILK: silkFormatter
}



const ResultsTableContainer = (props) => {
  const {
    title,
    data,
    showDataDetails,
    firstColumns,
    commentGenerator,
    onRowClick,
    description
  } = props

  if (!data) {
    return null
  }

  let columns = []

  if (firstColumns) {
    columns = firstColumns
  } else {
    for (let row of data) {
      for (let field in row) {
        if (!columns.includes(field)) {
          columns.push(field)
        }
      }
    }
  }

  let tbody = data.map((row, rowIndex) => {
    let cols = []
    for (let i = 0; i < columns.length; i++) {
      let fieldData = formatKeys[columns[i]] ? formatKeys[columns[i]](row) : row[columns[i]]
      cols.push(<td className="table__cell">{fieldData}</td>)
    }
    return [
      <tr key={`${rowIndex}COL`} className="table__row table__row-normal" onClick={onRowClick ? () => onRowClick(row) : null}>{cols}</tr>,
      (commentGenerator && <tr key={`${rowIndex}COLCOMMENT`} className="comment-tr"><td colSpan={firstColumns.length} className="comment-td"><div className="comment-content">{commentGenerator(row)}</div></td></tr>)
    ]
  })

  return (
    <TitleDescriptionSection
      colorModifier='blue'
      title={title}
      description={description}>
      <div className='table'>
        <table className='table__el'>
          <thead className='table__head table__head__left'>
            <tr className='table__row'>
              {columns.map((column, colIndex) => (
                <th key={`${colIndex}COL`}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tbody}
          </tbody>
        </table>
      </div>
    </TitleDescriptionSection>
  )
}

export default ResultsTableContainer
