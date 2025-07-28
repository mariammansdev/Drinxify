
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const cockTailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const Loader = async () => {
  const searchQuery = 'margarita';
  const res = await axios.get(`${cockTailUrl}${searchQuery}`);
  const data = res.data.drinks;

  return { drinks: data ? data : [], searchQuery }
}
const Landing = () => {
  const { drinks, searchQuery } = useLoaderData();
  console.log(drinks, searchQuery);
  return (
    <>
      <h1>Landing </h1>
    </>
  );
};
export default Landing;
