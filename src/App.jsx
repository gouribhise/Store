import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';
import { ErrorElement } from './components';
import { loader as landingLoader } from './pages/Landing';
import { loader as SingleProductLoader } from './pages/SingleProduct';
import {loader as productsLoader} from './pages/Products'

import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import { loader as checkoutLoader } from './pages/Checkout';
import { action as checkoutAction } from './components/CheckoutForm';
import { store } from './store';

 const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: ErrorElement,
      },
      {
        path: 'products',
        element: <Products />,
        loader:productsLoader,
        errorElement:ErrorElement
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader:SingleProductLoader,
        errorElement:ErrorElement
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: 'about', element: <About /> },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action:loginAction(store)
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action:registerAction
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;