import {createBrowserRouter} from "react-router-dom"
import Registrar from "./components/pages/Registrar"

export const router = createBrowserRouter ([
    {
      path: '/',
      element: <h1>Sou a rota principal</h1>
    },
    {
      path: '/cadastro',
      element: <h1>Sou a rota de cadastro</h1>
    },
    {
        path:'/register',
        element: <Registrar/>
    }
  ])