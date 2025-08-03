
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData, useNavigation, useSearchParams } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const cockTailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ['cocktails', searchTerm],
    queryFn: async () => {
      const res = await axios.get(`${cockTailUrl}${searchTerm}`);
      return res.data.drinks || [];
    },
  }
}

export const loader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams.get('search') || 'a';
  const searchQuery = searchParams;


  await queryClient.ensureQueryData(searchCocktailQuery(searchQuery));

  return { searchQuery }
}

const Landing = () => {
  const { searchQuery } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(searchCocktailQuery(searchQuery))

  if (isLoading) {
    return <div className='loading' />;
  }
  return (
    <>
      <SearchForm searchQuery={searchQuery} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
