
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const cockTailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
const apileagueUrl = 'https://api.apileague.com/search-drinks';
const apiKey = import.meta.env.VITE_API_LEAGUE_SEARCH_DRINKS;

const searchCocktailQuery = (query) => {
  return {
    queryKey: ['cocktails', query],
    queryFn: async () => {
      const res = await axios.get(`${apileagueUrl}`, {
        params: {
          alcohol: false
        },
        headers: {
          'x-api-key': apiKey
        }
      });
      return res.data.drinks || [];
    },
  }
}

export const loader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);
  const isFilter = url.search.includes('filter');
  const filterParams = url.searchParams.get('filter');
  const searchParams = url.searchParams.get('search');
  let searchQuery = '', query = '';

  if (isFilter) {
    query = `filter.php?${filterParams}`
  }
  else if (searchParams) {
    query = `search.php?s=${searchParams}`
  }
  await queryClient.ensureQueryData(searchCocktailQuery(query));
  searchQuery = searchParams || filterParams;
  return {query, searchQuery, isFilter};
}

const Landing = () => {
  const { query, searchQuery, isFilter } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(searchCocktailQuery(query))

  if (!Array.isArray(drinks)) {
    return (
      <>
        <h1>No Data Found</h1>
        <Navigate to ='/' />
      </>
    )
  }
  if (isLoading) {
    return <div className='loading' />;
  }
  return (
    <>
      <SearchForm searchQuery={searchQuery} isFilter={isFilter} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
