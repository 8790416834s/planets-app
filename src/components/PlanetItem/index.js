import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {description, name, imageUrl} = planetDetails

  return (
    <div className="slider-container">
      <div className="list-item">
        <img src={imageUrl} alt={`planet ${name}`} className="carousel-img" />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default PlanetItem
