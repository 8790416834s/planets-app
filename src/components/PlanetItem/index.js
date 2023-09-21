import Slider from 'react-slick'

import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, name, imageUrl} = planetDetails

  return (
    <li className="slider-container">
      <Slider>
        <div>
          <img src={imageUrl} alt={name} className="carousel-img" />
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </Slider>
    </li>
  )
}
export default PlanetItem
