import {createBrowserrouter} from "react-router-dom"
export const router = createBrowserRouter([
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
        element: <h1>Registrar</h1>
    }
  ])