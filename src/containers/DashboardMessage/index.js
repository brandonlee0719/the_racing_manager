import React, { Component } from 'react'

import { connect } from 'react-redux'

import SubmitFeedPost from 'components/dashboard/SubmitFeedPost'

import MessageInput from 'components/dashboard/MessageInput'

import { getItem } from 'utils/storageutils'

import { USER_TOKEN } from 'data/consts'

import AjaxLoader from 'components/gui/Loaders/Ajaxloader'

import {
  updateMessageReceiver,
  updateMessageSender,
  getHorseInformation,
  getUserInformation,
  postHorseMessage
} from 'actions/dashboard'

const token = getItem(USER_TOKEN)

/**
 *  @class
 *  @name MemberDashboard
 *  @extends {Component}
 */
class DashboardMessage extends Component {
  constructor (props) {
    super(props)

    this.postMessageFeed = this.postMessageFeed.bind(this)
  }

  componentDidMount () {
    this.props.horseInformation(token)
    this.props.userInformation()
  }

  postMessageFeed (data) {
    if (this.props.sender === '') {
      return (this.props.receiver && this.props.receiver.map((item) => this.props.postHorseMessage(item.id, undefined, data, token)))
    } else {
      return (this.props.receiver && this.props.receiver.map((item) => this.props.postHorseMessage(item.id, this.props.sender.id, data, token)))
    }
  }

  render () {
    let searchHorses = this.props.horseInfo && this.props.horseInfo.map((row) => (
      {
        label: row.name,
        value: row._id
      }
    ))

    let searchUser = this.props.userInfo && this.props.userInfo.map((row) => (
        {
          label: `${row.firstname}_${row.surname}`,
          value: row._id
        }
      ))

    return (
      <div>
        <div className='msg-input to'>
          <div className="input-label">
            <h5>TO</h5>
          </div>
          <MessageInput
            name='receiver'
            onSubmit={ () => {} }
            handleSelectName={ (data) => { this.props.updateMessageReceiver(data) } }
            placeholder='HORSE NAME'
            searchNames={searchHorses}
            multi={true}
          />
        </div>
        <div className='msg-input from'>
          <div className="input-label">
            <h5>FROM</h5>
          </div>
          <MessageInput
            name='sender'
            onSubmit={ () => {} }
            handleSelectName={  (data) => { this.props.updateMessageSender(data) }  }
            placeholder='NOT SELECTED'
            searchNames={searchUser}
            multi={false}
          />
        </div>
        <SubmitFeedPost
          // posted={posted}
          submitFeedUpdate={(data) => { this.postMessageFeed(data) }}
          reducerName='dashboardFeedPost'
        />
        <AjaxLoader isVisible={this.props.isPosting} />
        { this.props.showMessage ? <div className="result-message"><p>The messages were posted successfully!</p></div> : null }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    dashboard
  } = state

  const {
    message
  } = dashboard

  return {
    sender: message.sender || '',
    receiver: message.receiver || '',
    horseInfo: message.horseInfo || [],
    userInfo: message.userInfo || [],
    isPosting: message.isPosting || false,
    showMessage: message.showMessage || false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postHorseMessage: (horseId, userId, data, token) => {
      return dispatch(postHorseMessage(horseId, userId, data, token))
    },
    updateMessageSender: (data) => {
      return dispatch(updateMessageSender(data))
    },
    updateMessageReceiver: (data) => {
      return dispatch(updateMessageReceiver(data))
    },
    horseInformation: (token) => {
      return dispatch(getHorseInformation(token))
    },
    userInformation: () => {
      return dispatch(getUserInformation())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardMessage)
