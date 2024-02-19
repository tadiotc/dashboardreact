import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Inicio from './paginas/Inicio'
import Competencias from './paginas/Competencias'
import Tracos from './paginas/Tracos'
import Ciclos from './paginas/Ciclos'
import Coletas from './paginas/Coletas'
import Usuarios from './paginas/Usuarios'
import Planocoletas from './paginas/Planocoletas'

import { TracosProvider } from "./components/RegistrosInclusao";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Inicio/>},
      {path:"/competencia",element:<Competencias/>},
      {path:"/tracos",element:<Tracos/>},
      {path:"/ciclos",element:<Ciclos/>},
      {path:"/coletas",element:<Coletas/>},
      {path:"/usuarios",element:<Usuarios/>},
      {path:"/planocoletas",element:<Planocoletas/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TracosProvider>
      <RouterProvider router={router} />
    </TracosProvider>
  </React.StrictMode>,
)
