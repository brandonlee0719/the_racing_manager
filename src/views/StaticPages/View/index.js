import React, {Component} from 'react'

import View from 'components/routing/View'

import ViewHeader from 'components/common/ViewHeader'

const StaticViewHOC = (title, Content) => (
  class StaticView extends Component {
    render () {
      return (
        <View title={title}>
          <div className="static-page">
            <ViewHeader
              title={title} />
            <div className="container relative">
              <div className="row">
                <div className="col">
                  <Content />
                </div>
              </div>
            </div>
          </div>
        </View>
      )
    }
  }
)

export default StaticViewHOC
