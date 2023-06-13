import {createBrowserRouter} from "react-router-dom"
import Registrar from "./components/pages/Registrar"
import Root from "./components/pages/Root"
import ProdutosForm from "./components/pages/ProdutosForm"

export const router = createBrowserRouter ([
    {
      path: '/',
      element: <Root/>,
      children:[
        {
          path: 'cadastro',
          element: <ProdutosForm/>
        },
        {
            path:'register',
            element: <Registrar/>
        }
      ]
    },
  ])