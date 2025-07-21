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



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,

    children: [
      {
        index: true,
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
