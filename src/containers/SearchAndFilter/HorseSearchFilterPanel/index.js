import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  Panel as FilterPanel,
  Header,
  Column
} from 'components/searchandfilter/FilterPanel'

/**
 *  @module Radio
 */
import Radio from 'components/input/Radio'

/**
 *  @module Counter
 */
import Counter from 'components/buttons/Counter'

/**
 *  @module Slider
 */
import Slider from 'components/input/Slider'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module updateHorseFilters
 */
import {
  updateHorseFilters
} from 'actions/browsehorses'

class HorseSearchFilterPanel extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      filterOpen,
      filters,
      updateOwnerShipType,
      updateYears,
      updateRacingHistory,
      updateAge,
      updateRacingType,
      updateCostMonthly,
      applyFilters,
      attributes,
      hasAttributes
    } = this.props

    // If there is no filters in the attributes then it's either fetching or isn't available.
    if (!hasAttributes) {
      return (
        null
      )
    }

    return (
      <FilterPanel
        isOpen={filterOpen}>
        <div className='row'>
          <Column
            className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>

            <Header>
              {attributes.filter['ownership.type'].displayName}
            </Header>

            {
              attributes.filter['ownership.type'].values.map((value, index) => {
                return (
                  <Radio
                    key={index}
                    label={value}
                    value={value}
                    checked={filters['ownership.type'].value === value}
                    name={attributes.filter['ownership.type'].displayName}
                    id={`${attributes.filter['ownership.type'].displayName}-${index}`}
                    onChange={() => { updateOwnerShipType(value) }}/>
                )
              })
            }
          </Column>

          <Column className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>
            <Header>
              {attributes.filter['ownership.years'].displayName}
            </Header>

            <Counter
              min={attributes.filter['ownership.years'].values.min || 0}
              max={attributes.filter['ownership.years'].values.max || Infinity}
              defaultCount={
                filters['ownership.years'].value
                ? filters['ownership.years'].value.min
                : attributes.filter['ownership.years'].default
              }
              onChange={(value) => { updateYears(value) }} />
          </Column>

          <Column className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>
            <Header>
              {attributes.filter['racingHistory'].displayName}
            </Header>

            {
              attributes.filter['racingHistory'].values.map((value, index) => {
                return (
                  <TextButton
                    key={index}
                    active={filters['racingHistory'].value === value}
                    text={value}
                    modifier={['fluid', 'secondary-navy-blue']}
                    onClick={() => { updateRacingHistory(value) }} />
                )
              })
            }
          </Column>

          <Column className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>
            <Header>
              {attributes.filter['age'].displayName}
            </Header>

            {
              attributes.filter['age'].options.map((option, index) => {
                return (
                  <TextButton
                    key={index}
                    active={filters['age'].nameValue === option.displayName}
                    text={option.displayName}
                    modifier={['fluid', 'secondary-navy-blue']}
                    onClick={() => { updateAge(option.displayName, option.values) }} />
                )
              })
            }
          </Column>

          <Column className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>
            <Header>
              {attributes.filter['racingType'].displayName}
            </Header>

            {
              attributes.filter['racingType'].values.map((value, index) => {
                return (
                  <TextButton
                    key={index}
                    active={filters['racingType'].value === value}
                    text={value}
                    modifier={['fluid', 'secondary-navy-blue']}
                    onClick={() => { updateRacingType(value) }} />
                )
              })
            }
          </Column>

          <Column className='col-xs-12 col-sm-12'>
            <div className='row'>
              <Header className='col-xs-6 text-left'>
                {attributes.filter['cost.monthly'].displayName}
              </Header>

              <Header className='uppercase regular col-xs-6 text-right'>
                {`£${filters['cost.monthly'].value.min} - £${filters['cost.monthly'].value.max}`}
              </Header>
            </div>

           <Slider
            onChange={(values) => { updateCostMonthly(values) }}
            min={attributes.filter['cost.monthly'].values.min}
            max={attributes.filter['cost.monthly'].values.max}
            defaultValue={[
              attributes.filter['cost.monthly'].values.min,
              attributes.filter['cost.monthly'].values.max
            ]}
            className='filter-panel__range-slider' />

          </Column>
        </div>

        <div className='hidden-sm-up'>
          <TextButton
            text='apply filters'
            modifier={['fluid']}
            onClick={applyFilters}
          />
        </div>
      </FilterPanel>
    )
  }
}

const mapStateToProps = ({browseHorses}, ownProps) => {
  const {
    filters,
    filterOpen,
    attributes,
    hasAttributes
  } = browseHorses

  return {
    filters,
    filterOpen,
    attributes,
    hasAttributes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateOwnerShipType: (value) => {
      dispatch(updateHorseFilters({
        name: 'ownership.type',
        value
      }))

      ownProps.onUpdate()
    },
    updateYears: (value) => {
      dispatch(updateHorseFilters({
        name: 'ownership.years',
        value: {
          min: value
        }
      }))

      ownProps.onUpdate()
    },
    updateRacingHistory: (value) => {
      dispatch(updateHorseFilters({
        name: 'racingHistory',
        value
      }))

      ownProps.onUpdate()
    },
    updateAge: (nameValue, value) => {
      dispatch(updateHorseFilters({
        name: 'age',
        value,
        nameValue
      }))

      ownProps.onUpdate()
    },
    updateRacingType: (value) => {
      dispatch(updateHorseFilters({
        name: 'racingType',
        value
      }))

      ownProps.onUpdate()
    },
    updateCostMonthly: (values) => {
      dispatch(updateHorseFilters({
        name: 'cost.monthly',
        value: {
          min: values[0],
          max: values[1]
        }
      }))

      ownProps.onUpdate()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HorseSearchFilterPanel)
