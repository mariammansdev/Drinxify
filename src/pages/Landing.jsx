
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const cockTailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';

const searchCocktailQuery = (query) => {
  return {
    queryKey: ['cocktails', query],
    queryFn: async () => {
      const res = await axios.get(`${cockTailUrl}${query || 'search.php?s=a'}`);
      return res.data.drinks || [];
    },
  }
}

export const loader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);
  const filter = url.search.includes('filter');
  const filterParams = (filter && url.search);
  const searchParams = url.searchParams.get('search');
  let searchQuery = '';

  if (filter) {
    searchQuery = `filter.php?${filterParams}`
  }
  else if (searchParams) {
    searchQuery = `search.php?s=${searchParams}`
  }
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
