import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';
import {loader as LandingLoader} from './pages/Landing';
import {loader as SingleCocktailLoader} from './pages/Cocktail';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: LandingLoader,
        element: <Landing />,
        errorElement: <SinglePageError />
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: SingleCocktailLoader
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;
