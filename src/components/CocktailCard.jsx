import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/CocktailCard"

const CocktailCard = ({ image,
  name,
  id,
  glass,
  price,
  description,
  flavors, }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        {price && <p>Price: ${price.toFixed(2)}</p>}
        {flavors && flavors.length > 0 && (
          <p>Flavors: {flavors.join(", ")}</p>
        )}
        {description && <p className="desc">{description}</p>}
        <Link to={`/cocktail/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  )
}

export default CocktailCard