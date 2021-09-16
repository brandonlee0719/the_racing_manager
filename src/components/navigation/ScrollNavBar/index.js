import React, { Component } from 'react'
import history from 'utils/locationutils'

import DropDown from 'components/DropDown'

// const SyndicateDropDown = () => (
//   <div className='scroll-nav-bar__dropdown-container'>
//     <ul>
//       <li>test</li>
//     </ul>
//   </div>
// )

const SyndicateDropDown = () => (<span></span>)

class ScrollNavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollDirection: 'down',
      scrollY: 0,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentWillMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextState.scrollY > this.state.scrollY && nextState.scrollDirection === 'up') {
      this.setState({scrollDirection: 'down'})
    } else if (nextState.scrollY < this.state.scrollY && nextState.scrollDirection === 'down') {
      this.setState({scrollDirection: 'up'})
    }
  }

  render () {
    const {scrollDirection} = this.state
    const {data = {}} = this.props
    const {name, horses = [], slug} = data

    return (
      <div className={'scroll-nav-bar scroll-nav-bar__container scroll-nav-bar__' + scrollDirection}>
        <ul className='scroll-nav-bar__links'>
          <li onClick={() => history.push(`/syndicate/${slug}`)}><DropDown RenderDropDown={SyndicateDropDown}><b>{name}</b></DropDown></li>
          {horses.map((horse, index) => {
            return <li onClick={() => history.push(`/horse/${horse.slug}`)} key={'scroll-nav-bar-' + index}>{horse.name}</li>
          })}
        </ul>
      </div>
    )
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    this.setState({
      scrollY: window.scrollY
    })
  }
}

export default ScrollNavBar
