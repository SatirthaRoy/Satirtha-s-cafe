import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Menu from './Pages/Our menu/Menu.jsx';
import Shop from './Pages/Our Shop/Shop.jsx';
import SignUp from './Pages/Login and Register/SignUp.jsx';
import Login from './Pages/Login and Register/Login.jsx';
import Provider from './Provider/Provider.jsx';

// tan stack
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Mycart from './Pages/My cart/Mycart.jsx';
import Addreview from './Pages/Add a review/Addreview.jsx';
import Private from './Private/Private.jsx';
import Users from './Pages/All users/Users.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/shop/:category',
        element: <Shop/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <SignUp/>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Private><Dashboard/></Private>,
    children: [
      {
        path: '/dashboard/mycart',
        element: <Mycart/>
      },
      {
        path: '/dashboard/addreview',
        element: <Addreview/>
      },
      {
        path: '/dashboard/allusers',
        element: <Users/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router}/>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
