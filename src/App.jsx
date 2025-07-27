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
import {Loader as LandingLoader} from './pages/Landing'


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

      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />

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
