import React from 'react'
import { Outlet } from 'react-router-dom'
function Root() {
    return (
        <div>
            Sou uma página principal

            <Outlet/>
        </div>
    )
}

export default Root