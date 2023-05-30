import React from 'react'
import { Outlet,NavLink } from 'react-router-dom';
import './Navbar.css'
function Root() {
    return (
        <div>
            <nav>
                <div>
                <NavLink 
                    to='/cadastro'
                    className={({isActive})=>
                        isActive ? 'link-clicado' : ''
                    }
                >
                    Cadastro de Produtos
                </NavLink>
                <NavLink 
                to='/register'
                className={({isActive})=>
                        isActive ? 'link-clicado' : ''
                    }
                    >
                    Criar conta
                </NavLink>
                <NavLink  
                to='/login'
                className={({isActive})=>
                        isActive ? 'link-clicado' : ''
                    }
                >
                    Logar
                </NavLink>
                </div>
                <div>

                </div>
            </nav>
            <div className="conteudo">
                <Outlet/>
            </div>
        </div>
    )
}

export default Root