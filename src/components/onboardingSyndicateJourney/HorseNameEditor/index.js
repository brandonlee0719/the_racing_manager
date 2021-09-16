import React, { Component } from 'react'

import AutoComplete from 'react-autocomplete'

import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import _ from 'lodash'

import {
  CardView,
  SpecCardFrame,
  CardHeading
} from 'components/cards/FeaturedCard'

const token = getItem(USER_TOKEN)

class HorseNameEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }

    this.changeValue = this.changeValue.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onHorseNameClick = this.onHorseNameClick.bind(this)
    this.selectHorseName = this.selectHorseName.bind(this)
    this.horseNameList = this.horseNameList.bind(this)
  }

  changeValue (value) {
    this.setState({ value: value }, function () {
      this.props.selectHorseNameEditor(this.state.value, token)
    })
  }

  onFocus () {
    this.props.onClickHorse(this.props.datakey)
  }



  onHorseNameClick () {
    this.props.onClickHorse(this.props.datakey)
  }

  selectHorseName (value) {
    this.setState({value: value}, function () {
      const horseInfo = _.filter(this.props.horseName, { horseName: value })

      this.props.selectHorseName(horseInfo[0].horseCode, token)
    })
  }

  horseNameList (value) {
    return value && value.map((item) => ({ label: item.horseName }))
  }

  render () {
    const horseNamGroup = this.horseNameList(this.props.horseName)

    return (
      <div className="horse-name-card" onClick={this.onHorseNameClick}>
        <div className="horse-name">
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <AutoComplete
                  placeholder="Enter a horse name"
                  getItemValue={(item) => item.label}
                  items={horseNamGroup}
                  renderItem={(item, isHighlighted) =>
                    <div style={{background: isHighlighted ? '#eee' : 'transparent'}}>
                      {item.label}
                    </div>
                  }
                  value={this.state.value}
                  onChange={(e) => { this.changeValue(e.currentTarget.value) }}
                  inputProps={{
                    onFocus: this.onFocus
                  }}
                  onSelect={(value) => { this.selectHorseName(value) }}
                  menuStyle={{
                    borderRadius: '3px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                    padding: '2px 0',
                    fontSize: '90%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    color: '#000',
                    overflow: 'auto',
                    maxHeight: '200px'
                  }}
                />
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
      </div>
    )

  }
}

export default HorseNameEditor
