import React, { Component } from 'react'

import TextButton from 'components/buttons/TextButton'

import { Link } from 'react-router-dom'

class SyndicateExisting extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="existing-syndicate">
        <h2 className="uppercase">
          I already manage a syndicate
        </h2>
        <div className="underline" />
        <div className="small-group">
          <p className="small">
            Do you currently manage a syndicate which is located in the
            UK and is a registered co-ownership entity with the British
            Horseracing Authority? If so you are elligible to list your
            syndicate with <span>The Racing Manager</span>.
          </p>
        </div>
        <div className="  existing-syndicate-btn">
          <Link to='/register-existing-syndicate'>
            <TextButton
              text="LIST MY EXISTING SYNDICATE"
              className="syndicate__button"
              onClick={() => {}}/>
          </Link>
        </div>
      </div>
    )
  }
}

export default SyndicateExisting