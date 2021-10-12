import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { createRecipe } from '../Redux/Actions'; 

function FormularioControlado() {

    const tipos = useSelector(state => state.types);

    const [receta, setReceta] = useState({types: []});
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setReceta(
            {
                ...receta,
                [e.target.name]: e.target.value
            }
        )
        console.log(receta)
    }

    const handleOnChangeSelect = (e) => {
        if (receta.types.includes(e.target.value)) {
            setReceta({
                ...receta,
                types: receta.types.filter(tp => tp !== e.target.value)
            })
        } else {
            setReceta({
                ...receta,
                types: [...receta.types, e.target.value]
            })
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(createRecipe(receta));
        console.log(receta)
    }

    return (
        <div>
            <form onSubmit={e => { handleOnSubmit(e) }}>
                <input type="text" placeholder="Nombre de la receta" name="nombre" onChange={e => { handleOnChange(e) }} />
                <input type="text" placeholder="Resumen de la Receta" name="resumen" onChange={e => { handleOnChange(e) }} />
                <input type="text" placeholder="Puntuación" name="puntuacion" onChange={e => { handleOnChange(e) }} />
                <input type="text" placeholder="Nivel" name="nivel" onChange={e => { handleOnChange(e) }} />
                <input type="text" placeholder="Pasos" name="pasos" onChange={e => { handleOnChange(e) }} />
                <input type="text" placeholder="Imagen" name="image" onChange={e => { handleOnChange(e) }} />
                <select name="tipos" onChange={handleOnChangeSelect} multiple  >
                    {
                        tipos.map(element => {
                            return (
                                <option key={element.id} value={element.id}>{element.name}</option>
                            )
                        })

                    }
                </select>
                <input type="submit" />
            </form>
        </div>
    )
}

export default FormularioControlado;
