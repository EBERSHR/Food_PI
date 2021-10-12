import React from 'react'
import { NavLink } from 'react-router-dom';

import '../Styles/navBar.css';

function NavBar() {
    return (
        <div className="main-navbar">
                <NavLink exact to="/home">Home</NavLink>
                <NavLink exact to="/crear">Crear Pokemon </NavLink>
        </div>
    )
}

export default NavBar