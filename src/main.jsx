import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import swal from 'sweetalert';

import App from './App.jsx'
import 'animate.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Componet/HomePage/Home.jsx';
import Error from './Componet/Auth/Error.jsx';
import Banner from './Componet/HomePage/Banner.jsx';
import Navbar from './Componet/Navbar.jsx';
import HeightRate from './Componet/HomePage/HeightRate.jsx';
import AddReview from './Componet/HomePage/AddReview.jsx';
import Login from './Componet/Login/Login.jsx';
import Registar from './Componet/Login/Registar.jsx';
import AuthProvider from './Componet/Auth/AuthProvider.jsx';
import Privet from './Componet/Auth/Privet.jsx';
import Footer from './Componet/HomePage/Footer.jsx';
import AllReview from './Componet/AllReview/AllReview.jsx';
import Details from './Componet/HomePage/Details.jsx';
import UpeventAdd from './Componet/UpCEvent/UpeventAdd.jsx';
import UpdateReview from './Componet/AllReview/UpdateReview.jsx';
import UpdateEvent from './Componet/UpCEvent/UpdateEvent.jsx';
import AddLike from './Componet/MoreLike/AddLike.jsx';
import MyreView from './Componet/MoreLike/MyreView/MyreView.jsx';
import Watchlist from './Componet/WatchLish/Watchlist.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Navbar></Navbar>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch('https://game-review-server-swart.vercel.app/addreview')
      },
      {
        path: "addreview",
        element:<Privet><AddReview></AddReview></Privet>,
 
      },
      {
        path: "allreview",
        element:<Privet><AllReview></AllReview></Privet>,
        loader:()=>fetch('https://game-review-server-swart.vercel.app/addreview')
      },
      {
        path: "login",
        element:<Login></Login>
      },
      {
        path: "rejistar",
        element:<Registar></Registar>
      },
      {
        path: "myreview",
        element:<Privet><MyreView></MyreView></Privet>
      },
      {
        path: "watchList",
        element:<Privet><Watchlist></Watchlist></Privet>
      },
      {
        path: "review/details/:id",
        element:<Privet><Details></Details></Privet>,
        loader:({params})=>fetch(`https://game-review-server-swart.vercel.app/revdetails/${params.id}`)
      },
      {
        path: "update/review/:id",
        element:<UpdateReview></UpdateReview>,
        loader:({params})=>fetch(`https://game-review-server-swart.vercel.app/revdetails/${params.id}`)
      },
      {
        path: "/update/event/:id",
        element:<UpdateEvent></UpdateEvent>,
        loader:({params})=>fetch(`https://game-review-server-swart.vercel.app/addevent/${params.id}`)
      },
      {
        path: "addEvent",
        element:<UpeventAdd></UpeventAdd>
       
      },
      {
        path: "addMore",
        element:<AddLike></AddLike>
       
      },

    ]
  },
  
    {
      path: "/",
      element: <h2>footer</h2>
    },

 

]);
createRoot(document.getElementById('root')).render(
<AuthProvider>
<StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
</AuthProvider>
)
