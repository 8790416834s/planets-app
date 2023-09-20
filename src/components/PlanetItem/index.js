import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, name, imageUrl} = planetDetails

  return (
    <li className="slider-container">
      <img src={imageUrl} alt={name} className="carousel-img" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default PlanetItem
