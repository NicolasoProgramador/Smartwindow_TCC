import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './pages/Header.jsx'
import Home from './pages/Home.jsx'
import Funcionamento from './pages/Funcionamento.jsx'
import Integrantes from './pages/Integrantes.jsx'
import Bibliografia from './pages/Bibliografia.jsx'
import Materiais from './pages/Materiais.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Jogo from './pages/Jogo.jsx'


const router = createBrowserRouter([
  {
   path: "/",
   element: <Home />
  },
 
  {
   path: "/integrantes",
   element: <Integrantes />
  },
 
  {
   path: "/materiais",
   element: <Materiais />
  },
 
  {
   path: "/funcionamento",
   element: <Funcionamento />
  },
 
  {
   path: "/bibliografias",
   element: <Bibliografia />
  },

  {
    path: "/jogo",
    element: <Jogo />
   },



 ])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-offwhite'>
      <RouterProvider router = {router} />
    </div>
    </>
  )
}

export default App

 
