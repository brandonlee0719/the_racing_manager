import React, { Component } from 'react'

import TextButton from 'components/buttons/TextButton'

import { Link } from 'react-router-dom'

class SyndicateNew extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="new-syndicate">
        <h2 className="uppercase">
          Create a new syndicate
        </h2>
        <div className="underline" />
        <div className="small-group">
          <p className="small">
            Interested in creating and managing a new syndicate? In
            partnership with the <span>British Horseracing Authority</span> and
            <span> Wetherbys, The Racing Manager</span> makes the whole registration
            process very simple.
          </p>
        </div>
        <div className="new-syndicate-btn">
          <Link to='/create-new-syndicate'>
            <TextButton
              text="CREATE A NEW SYNDICATE"
              className="syndicate__button"
              onClick={() => {}}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default SyndicateNew
