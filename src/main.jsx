import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Error from './Components/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://dummyjson.com/users')
      },
      {
        path: "/details/:idCategory",
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://dummyjson.com/users/${params.idCategory}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
