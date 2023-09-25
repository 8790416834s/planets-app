import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const renderPlanetItem = () => {
    const {planetsList} = props
    return (
      <div className="list-container">
        <Slider>
          {planetsList.map(each => (
            <PlanetItem planetDetails={each} key={each.id} />
          ))}
        </Slider>
      </div>
    )
  }

  return (
    <div className="main-heading" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      {renderPlanetItem()}
    </div>
  )
}
export default PlanetsSlider
