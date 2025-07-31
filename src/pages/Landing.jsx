
import axios from "axios";
import { useLoaderData, useNavigation } from "react-router-dom";
import CocktailList from "../components/CocktailList";

const cockTailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchQuery = 'GG'; // Example search query, can be dynamic

  // Fetching cocktails based on the search query
  const res = await axios.get(`${cockTailUrl}${searchQuery}`);
  const data = res.data.drinks;

  return { drinks: data ? data : [], searchQuery }
}
const Landing = () => {
  const { drinks, searchQuery } = useLoaderData();
  
  return (
    <>
      <CocktailList drinks = {drinks} />
    </>
  );
};
export default Landing;
