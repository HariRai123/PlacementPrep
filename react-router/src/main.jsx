import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Layout from './Layout'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
const router =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
     {
      index:true,
      element:<Home/>
     },
     {
      path:"about",
      element:<About/>
     }, 
     {
      path:"contact",
      element:<Contact/>
     },
     {
      path:'user/:userid',
      element:<User/>
     },
     {
      path:'github',
      loader: githubInfoLoader,
      element:<Github/>
     }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
