import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";
import { nanoid } from "nanoid"

const CocktailList = ({drinks}) => {
    if (!drinks || drinks.length === 0) {
        return <div className='no-results'>No cocktails found</div>; 
    }
    // const formattedDrinks = drinks.map(drink => ({
    //     id: drink.idDrink,
    //     isAlcoholic: drink.strAlcoholic,
    //     category: drink.strCategory,
    //     glass: drink.strGlass,
    //     image: drink.strDrinkThumb,
    //     name: drink.strDrink,
    //     instructions: drink.strInstructions,
    //     tags: drink.strTags ? drink.strTags.split(',') : [],
    //     ingredients: [
    //         drink.strIngredient1,
    //         drink.strIngredient2,
    //         drink.strIngredient3,
    //         drink.strIngredient4,
    //         drink.strIngredient5,
    //         drink.strIngredient6,
    //         drink.strIngredient7,
    //         drink.strIngredient8,
    //         drink.strIngredient9,
    //         drink.strIngredient10
    //     ].filter(ingredient => ingredient)
    // }));

    // Example: formatNewDrinks.js

    const formattedDrinks = drinks.map(drink => ({
    id: drink.id,
    name: drink.title,
    image: drink.images?.[0] || '', // Use the first image
    price: drink.price_per_serving,
    description: drink.description,
    glass: drink.glass_type,
    flavors: drink.flavors,
    ingredients: drink.ingredients?.map(ing => ({
      id: ing.id,
      name: ing.name,
      amount: ing.amount,
      unit: ing.unit,
      image: ing.image,
    })),
    instructions: drink.instructions?.[0]?.steps?.map(step => step.step) || [],
    nutrition: drink.nutrition,
    credits: drink.credits,
  }));

  return (
    <Wrapper>
        {formattedDrinks.map(drink => (
            <CocktailCard key={drink.id} {...drink} />
        ))}
    </Wrapper>
  )
}

export default CocktailList