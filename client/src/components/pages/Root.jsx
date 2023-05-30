import React from 'react'
import { Outlet,NavLink } from 'react-router-dom';
import './Navbar.css'
function Root() {
    return (
        <div>
            <nav>
                <div>
                <NavLink to='/cadastro'>
                    Cadastro de Produtos
                </NavLink>
                <NavLink to='/register'>
                    Criar conta
                </NavLink>
                <NavLink to='/login'>
                    Logar
                </NavLink>
                </div>
                <div>

                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Root