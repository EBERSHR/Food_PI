import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Styles/landingPage.css'

function Landing() {
    return (
        <div className="landingPageComponent">
            <NavLink exact to={"/home"}>
                <div className="main-button">
                    <button className="myButton">
                    </button>
                </div>
            </NavLink>
        </div>
    )
}

export default Landing