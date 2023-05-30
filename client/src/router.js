import {createBrowserRouter} from "react-router-dom"
import Registrar from "./components/pages/Registrar"
import Root from "./components/pages/Root"

export const router = createBrowserRouter ([
    {
      path: '/',
      element: <Root/>,
      children:[
        {
          path: '/cadastro',
          element: <h1>Sou a rota de cadastro</h1>
        },
        {
            path:'/register',
            element: <Registrar/>
        }
      ]
    },
  ])