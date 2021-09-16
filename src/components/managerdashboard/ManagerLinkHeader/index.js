import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class LinkHeader extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="manager-dashboard__section">

        <div className="manager-dashboard">
          <Link to="/manager-dashboard/style">
            <span className="link">STYLING</span>
          </Link>
        </div>

        <div className="manager-dashboard">
          <Link to="/manager-dashboard/people">
            <span className="link">PEOPLE</span>
          </Link>
        </div>

        <div className="manager-dashboard">
          <Link to ="/manager-dashboard/billing">
            <span className="link">BILLING</span>
          </Link>
        </div>
      </div>
    )
  }
}