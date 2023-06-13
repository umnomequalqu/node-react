import {createBrowserRouter} from "react-router-dom"
import Registrar from "./components/pages/Registrar"
import Root from "./components/pages/Root"
import ProdutosForm from "./components/pages/ProdutosForm"
import Produtos from "./components/pages/Produtos"

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
        },
        {
          path: 'produtos',
          element: <Produtos/>
        }
      ]
    },
  ])