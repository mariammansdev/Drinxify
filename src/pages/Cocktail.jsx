import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useLoaderData, Link, Navigate } from 'react-router-dom';

const singleCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async({params}) => {
  const id = params.id;
  const res = await axios.get(`${singleCocktailURL}${id}`);
  const drink = await res.data.drinks[0];
  return {id, drink};
}
const Cocktail = () => {
  const { drink } = useLoaderData();
  if (!drink) {
    return <Navigate to='/' />;
  }
  const { strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions } = drink;
  const ingredients = Object.keys(drink)
    .filter(key => key.startsWith('strIngredient') && drink[key])
    .map(key => drink[key]);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>Back Home</Link>
        <h2>{strDrink}</h2>
      </header>
      <div className='drink'>
        <img src={strDrinkThumb} alt={strDrink} className='img'/>
        <div className='drink-info'>
          <p><span className='drink-data'>Name:</span> {strDrink}</p>
          <p><span className='drink-data'>Category:</span> {strCategory}</p>
          <p><span className='drink-data'>Info:</span> {strAlcoholic}</p>
          <p><span className='drink-data'>Glass:</span> {strGlass}</p>
          <p><span className='drink-data'>Instructions:</span> {strInstructions}</p>
          <p><span className='drink-data'>Ingredients:</span> {ingredients.join(', ')}</p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
