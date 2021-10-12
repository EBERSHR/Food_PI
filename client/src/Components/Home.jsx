import React from 'react'
import Recipes from './Recipes';
// import Search from './Search'
import '../Styles/home.css';

function Home() {
    return (
        <div>
            <br />
            <h1>RECETAS</h1>
                <div className="main-home">

                    {/* <div className="area-busqueda">
                        <Search />    
                    </div> */}

                    <div className="area-pokemon">
                        <Recipes />
                    </div>
                </div>
                
        </div>
    )
}

export default Home