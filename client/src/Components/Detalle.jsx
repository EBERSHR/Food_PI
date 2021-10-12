import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getRecipesById, quitRecipesById } from '../Redux/Actions';

import '../Styles/detalle.css';

const Detalle = () => {

    let { id } = useParams();
    const dispatch = useDispatch();
    const recipedetalle = useSelector(store => store.recipeId);
    console.log('Detalle del id:::', recipedetalle)
    const { name, image, resume, level, score, types, steps } = recipedetalle;

    useEffect(() => {
        dispatch(getRecipesById(id));
        return () => { dispatch(quitRecipesById()) };
    }, [dispatch, id]);

    return (
        <div className="detalleComponent">
            <h1>{name}</h1>
            <div className="row">
                <div>Nivel : {level}</div>
                <div>Puntuación : {score}</div>
            </div>
            <div className="row">
                <img className="detalleImage" src={image} alt={name} />
                <div>

                    {steps === 'string' ? steps.map((stps, index) => {
                        return (
                            <div key={index}>
                                <div className="row">
                                    {stps.number}
                                    {' '}
                                    {stps.step}
                                </div>
                                <br />
                            </div>
                        )
                    }) : <div>
                        <div className="row">
                            {steps}
                        </div>
                        <br />
                    </div>
                    }

                </div>
            </div>
            <div>Tipo : {types}</div>
            <p>{resume}</p>
        </div>
    );
}

export default Detalle;
