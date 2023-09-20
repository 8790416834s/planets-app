import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props

    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className="main-heading" data-testid="planets">
        <h1 className="heading">PLANETS</h1>
        <Slider {...settings}>
          <ul className="list-container">
            {planetsList.map(each => (
              <PlanetItem planetDetails={each} key={each.id} />
            ))}
          </ul>
        </Slider>
      </div>
    )
  }
}
export default PlanetsSlider
