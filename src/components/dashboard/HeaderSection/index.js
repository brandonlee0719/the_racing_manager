/**
 *  @module React
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module HorseCard
 */
import HorseCard from 'components/horse/HorseCard'

/**
 *  @module Carousel
 */
import Carousel from 'components/carousel'

/**
 *  @module constructStaticUrl
 */
import { constructStaticUrl, calcPercent } from 'utils/horseutils'

/**
 *  @module roundNumberWithoutZeros
 */
import { roundNumberWithoutZeros } from 'utils/number'

/**
 *  @module Smallloader
 */
import Smallloader from 'components/gui/Loaders/Smallloader'

/**
 * dummy fn
 */
import { Link } from 'react-router-dom'

const noop = () => {}

/**
 *  @class
 *  @name HeaderSection
 *  @extends {PureComponent}
 */
class HeaderSection extends PureComponent {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      horseActiveIndex: 0,
      currentSyndIndex: 0,
      carouselData: {
        syndNames: [],
        syndHorses: [],
        length: 0
      }
    }

    // bind custom fns
    this.updateHorseActiveIndex = this.updateHorseActiveIndex.bind(this)
    this.updateNameActiveIndex = this.updateNameActiveIndex.bind(this)
    this.formatHorseData = this.formatHorseData.bind(this)
  }

  componentDidMount () {
    this.formatHorseData(this.props.data)
  }

  componentWillReceiveProps ({ data }) {
    this.formatHorseData(data)
  }

  /**
   *  updateHorseActiveIndex
   *  @description Will update the horse pagination to the correct slide.
   *  @param  {Number} index
   */
  updateHorseActiveIndex (index) {
    const {
      carouselData
    } = this.state

    // Get the horse syndicate name from the horses array with the given index.
    const {
      syndName
    } = carouselData.syndHorses[index]

    // Get the index of the syndicate name in the syndNames array
    // This will map to the correct carousel index.
    const nameActiveIndex = carouselData.syndNames.map(({name}) => name).indexOf(syndName)

    // Tell the name carousel to go to the correct index.
    if (this.refs.carousel) {
      this.refs.carousel.goToSlide(nameActiveIndex, false)
    }

    this.setState({
      horseActiveIndex: index,
      currentSyndIndex: nameActiveIndex
    })
  }

  /**
   *  updateNameActiveIndex
   *  @description Will update the horse slider position to the correct slide depending on syndicate chosen.
   *  @param  {Number} index
   */
  updateNameActiveIndex (index) {
    const {
      carouselData
    } = this.state

    const {
      name
    } = carouselData.syndNames[index]

    // Get the first index of the horse depending on the name of the syndicate.
    const horseActiveIndex = carouselData.syndHorses.map(({syndName}) => syndName).indexOf(name)

    if (this.refs.horseCarousel) {
      this.refs.horseCarousel.goToSlide(horseActiveIndex, false)
    }

    this.setState({
      horseActiveIndex,
      currentSyndIndex: index
    })
  }

  /**
   *  formatMessagesDate
   *  @description Will create formatted data for use on the carousels.
   *  @return {Object}
   */
  formatHorseData (data) {
    const carouselData = data.reduce((obj, syndicate, index) => {
      const { horses } = syndicate

      // Push data for the syndicate names carousel
      obj.syndNames.push({
        name: syndicate.name,
        length: horses.length
      })

      // Push an array of all horses in each syndicate, used for the horse card carousel.
      obj.syndHorses.push(...horses.map(horse => ({
        syndName: syndicate.name,
        syndSlug: syndicate.slug,
        syndColor: syndicate.color,
        syndIndex: index, // Used to determine which horse cards to highlight
        ...horse
      })))

      // Update the length of the overall horses for pagination buttons.
      obj.length += horses.length

      return obj
    }, {
      syndNames: [],
      syndHorses: [],
      length: 0
    })

    this.setState({
      carouselData
    })
  }

  render () {
    const {
      className,
      modifier,
      title,
      headerButtonText,
      isFetching
    } = this.props

    const {
      currentSyndIndex,
      carouselData
    } = this.state

    /**
     *  Class names for the container
     *  @type {String}
     */
    const modifiedClassNames = classNames('dashboard-header', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='dashboard-header__heading row-no-margin dashboard-header__section'>
          <div className='col-xs-8 col-sm-6 align-middle'>
            <h1 className='uppercase'>
              {title}
            </h1>
          </div>
          <div className='col-xs-4 col-sm-6 align-middle'>
            {/* Depending on screen width (mobile or desktop) show the correct button */}
            <Link to='/browse-horses'>
              <TextButton
                className='dashboard-header__header-button visible-sm-up'
                onClick={noop}
                modifier='xs'
                text={headerButtonText}/>
              <TextButton
                className='dashboard-header__header-button hidden-sm-up'
                onClick={noop}
                modifier='xs'
                text='+'/>
            </Link>
          </div>
        </div>
        <div className='dashboard-header__items-carousel'>
          <Carousel
            containerClassName='dashboard-header__section'
            ref='carousel'
            showArrows
            arrowModifier={['middle']}
            slideWidth={'266px'}
            breakPoints={{
              480: {
                slideWidth: 1
              }
            }}
            afterSlide={ index => { this.updateNameActiveIndex(index) }}
            cellAlign='left'
            cellSpacing={30}>
            {
              carouselData.syndNames.map(({name, length}, index) => {
                return (
                  <h2
                    key={index}>
                    {name}<sup className='small'>{length}</sup>
                  </h2>
                )
              })
            }
          </Carousel>
        </div>
        <div className='dashboard-header__items-list wave-bg--faded section-shadow--carousel'>
          <Carousel
            ref='horseCarousel'
            containerClassName='dashboard-header__section'
            afterSlide={index => { this.updateHorseActiveIndex(index) }}
            cellAlign='left'
            cellSpacing={10}
            slideWidth={'266px'}
            showArrows
            showPagination
            paginationClassName='hidden-sm-up'
            nextArrowClassName='visible-sm-up'
            prevArrowClassName='visible-sm-up'
            nextArrowModifier={['right', 'nobg', 'white', 'bottom']}
            prevArrowModifier={['left', 'nobg', 'white', 'bottom']}
            breakPoints={{
              480: {
                slideWidth: 1
              }
            }}>
            {
              carouselData.syndHorses.map((horse, index) => {
                return (
                  <HorseCard
                    isActive={horse.syndIndex === currentSyndIndex}
                    key={index}
                    src={constructStaticUrl(horse.thumbnailImage)}
                    title={horse.name}
                    color={horse.syndColor}
                    subtitle={`${horse.age}yo ${horse.gender}`} // Needs to have the STYLE too!
                    stats={[{
                      name: 'runs',
                      value: horse.runs
                    }, {
                      name: 'wins',
                      value: horse.wins
                    }, {
                      name: 'places',
                      value: horse.places
                    }, {
                      name: 'OR',
                      value: '-'
                    }]}
                    info={[{
                      name: 'Trainer name',
                      value: horse.trainer.name
                    }, {
                      name: 'Syndicate name',
                      value: horse.syndName
                    }, {
                      name: 'Manager',
                      value: horse.owner.name
                    // }, {
                    //   name: 'Ownership',
                    //   value: `${roundNumberWithoutZeros(calcPercent(horse.shares.owned, horse.shares.total))}%`
                    }]}
                    extra={{
                      url: `/horse/${horse.slug}`
                    }}
                    bottomUrl={`/syndicate/${horse.syndSlug}`}
                    className='dashboard-header__slide-item' />
                )
              })
            }
          </Carousel>
          <div className='absolute-center'>
            <Smallloader isVisible={isFetching} />
          </div>
        </div>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
HeaderSection.propTypes = {
  title: PropTypes.string,
  headerButtonText: PropTypes.string,
  data: PropTypes.array,
  isFetching: PropTypes.bool
}

/**
 *  defaultProps
 *  @type {Object}
 */
HeaderSection.defaultProps = {
  title: 'my horses',
  headerButtonText: '+ add another horse',
  data: [],
  isFetching: false
}

/**
 *  @module HeaderSection
 */
export default HeaderSection
