import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useLoaderData, Link, Navigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

// const singleCocktailURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// const cocktailCardQuery = (id) => {
//   return {
//     queryKey: ['cocktail', id],
//     queryFn: async () => {
//       const res = await axios.get(`${singleCocktailURL}${id}`);
//       return res.data.drinks[0];
//     },
//   }
// }
// export const loader = (queryClient) => async ({ params }) => {
//   const id = params.id;
//   await queryClient.ensureQueryData(cocktailCardQuery(id));
//   return { id };
// }
const Cocktail = () => {
  // const { data: drink } = useQuery(cocktailCardQuery(useLoaderData().id));
  const {state} = useLocation();
  const drink = state?.drink;

  if (!drink) {
    return <Navigate to='/' />;
  }

  const { image, name, id, glass, price, description, flavors, ingredients } = drink;
  // const { strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions } = drink;
  // const ingredients = Object.keys(drink)
  //   .filter(key => key.startsWith('strIngredient') && drink[key])
  //   .map(key => drink[key]);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>Back Home</Link>
        <h2>{name}</h2>
      </header>
      <div className='drink'>
        <img src={image} alt={image} className='img' />
        <div className='drink-info'>
          <p><span className='drink-data'>Price:</span> {price}</p>
          <p><span className='drink-data'>Info:</span> {description}</p>
          <p><span className='drink-data'>Glass:</span> {glass}</p>
          <p><span className='drink-data'>Ingredients:</span> {ingredients.join(', ')}</p>
          <p><span className='drink-data'>Flavors:</span> {flavors.join(', ')}</p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cocktail;
