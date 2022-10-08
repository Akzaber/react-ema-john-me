import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import Main from './Component/Main/Main';
import Orders from './Component/Orders/Orders';
import Root from './layouts/Root';
import { shoppingAndCartLoder } from './loders/ShoppingAndCartLoder';
function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Main></Main>
        },
        {
          path: '/order',
          loader: shoppingAndCartLoder,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
    {
      path: '*',
      element: <h1>You Entered The wrong Destination 404 Not Found</h1>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
