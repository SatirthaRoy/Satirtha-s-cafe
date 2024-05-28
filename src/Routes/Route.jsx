import React from 'react'
import App from '../App';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Our menu/Menu.jsx';
import Shop from '../Pages/Our Shop/Shop.jsx';
import SignUp from '../Pages/Login and Register/SignUp.jsx';
import Login from '../Pages/Login and Register/Login.jsx';
import Dashboard from '../Pages/Dashboard/Dashboard.jsx';
import Mycart from '../Pages/My cart/Mycart.jsx';
import Addreview from '../Pages/Add a review/Addreview.jsx';
import Private from '../Private/Private.jsx';
import Users from '../Pages/All users/Users.jsx';
import AdminRoute from '../Private/AdminRoute.jsx';
import AddItem from '../Pages/Add Item/AddItem.jsx';
import { createBrowserRouter } from 'react-router-dom';
import ManageItems from '../Pages/Manage Items/ManageItems.jsx';
import UpdateItem from '../Pages/Update Item/UpdateItem.jsx';
import Payment from '../Pages/Payment page/Payment.jsx';
import History from '../Pages/Payment history/History.jsx';
import AdminHome from '../Pages/Admin home/AdminHome.jsx';
import Userhome from '../Pages/User home/Userhome.jsx';



export const router = createBrowserRouter([
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
        path: '/dashboard/userhome',
        element: <Userhome/>
      },
      {
        path: '/dashboard/mycart',
        element: <Mycart/>
      },
      {
        path: '/dashboard/payment',
        element: <Payment/>
      },
      {
        path: '/dashboard/paymenthistory',
        element: <History/>
      },
      {
        path: '/dashboard/addreview',
        element: <Addreview/>
      },
      {
        path: '/dashboard/allusers',
        element: <AdminRoute><Users/></AdminRoute>
      },
      {
        path: '/dashboard/adminhome',
        element: <AdminRoute><AdminHome/></AdminRoute>
      },
      {
        path: '/dashboard/additem',
        element: <AdminRoute><AddItem/></AdminRoute>
      },
      {
        path: '/dashboard/manageitems',
        element: <AdminRoute><ManageItems/></AdminRoute>
      },
      {
        path: '/dashboard/updateitem/:id',
        element: <AdminRoute><UpdateItem/></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu?id=${params.id}`)
      }
    ]
  }
]);