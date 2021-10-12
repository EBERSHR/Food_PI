import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, setFilters } from '../Redux/Actions';
import '../Styles/recipes.css'
// import NameSearch from './NameSearch';
import PaginatorCard from './PaginatorCard';

const Recipes = () => {

    const recetas = useSelector(state => state.recipes);
    const tipos = useSelector(state => state.types);
    const dispatch = useDispatch();

    const limite = 4;
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(limite);
    const [paginado, setPaginado] = useState([]);

    const pagination = () => {
        setPaginado(
            recetas.slice(page, limit)
        )
    }

    const handleBackwards = () => {
        setPage(page - limite)
        setLimit(limit - limite)
        if (page < 0 && limit < limite) {
            setPage(0);
            setLimit(limite);
        }
        pagination();
    }

    const handleForewards = () => {
        if (limit < recetas.length) {
            setPage(limit)
            setLimit(limit + limite)
        }
        pagination();
    }

    if (!pagination) {
        pagination();
    }

    const handleFilterChange = (e) => {
        console.log(e.target.value);
        switch (e.target.value) {
            // Filtrar Asendente      
            case "1":
                recetas.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });
                dispatch(setFilters(recetas))
                setPaginado(
                    recetas.slice(0, 4)
                )
                break;

            // Filtar Descendente    
            case "2":
                recetas.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                });
                dispatch(setFilters(recetas))
                setPaginado(
                    recetas.slice(0, 4)
                )
                break;

            // Filtrar por Puntuaciòn
            case "3":
                recetas.sort((a, b) => {
                    if (a.score < b.score) return -1;
                    if (a.score > b.score) return 1;
                    return 0;
                });

                console.log("Puntuaciòn:", recetas);
                dispatch(setFilters(recetas))
                setPaginado(
                    recetas.slice(0, 4)
                )
            //             // let f = paginado;
            //             // setPaginado([]);
            //             // f.sort((a, b) => {
            //             //     if (a.strenght < b.strenght) return -1;
            //             //     if (a.strenght > b.strenght) return 1;
            //             //     return 0;
            //             // });
            //             // setPaginado(f);
            //             // history.push('/home');
            //             break;
            //         // Filtrar por Pokemones Existentes    
            //         case "4":
            //             dispatch(getPokemones())
            //             recetas.forEach(element => {
            //                 if (typeof element.id === 'string') {
            //                     existentes.push(element);
            //                 } else {
            //                     creados.push(element);
            //                 }
            //             });
            //             console.log("Creados:", existentes);
            //             dispatch(setFilters(existentes))
            //             break;
            //         // Filtrar por Pokemones Creados
            //         case "5":
            //             dispatch(getPokemones())
            //             recetas.forEach(element => {
            //                 if (typeof element.id === 'string') {
            //                     existentes.push(element);
            //                 } else {
            //                     creados.push(element);
            //                 }
            //             });
            //             console.log("Existentes:", creados);
            //             dispatch(setFilters(creados))
            //             history.push('/home');
            //             break;
            // Todos lo Pokemones
            case 6:
                dispatch(getRecipes())
                setPaginado([]);
                setPaginado(
                    recetas.slice(0, 4)
                )
                break;

            default:
                break;
        }
    }

    const handleOnTypes = (e) => {
        const typeFilter = recetas.filter(filtro => filtro.types.includes(e.target.value.toLowerCase()));
        dispatch(setFilters(typeFilter))
        setPaginado(
            typeFilter.slice(0, 4)
        )
    }

    return (
        <div className="recipesComponent">

            <select onClick={e => handleOnTypes(e)}>
                {
                    tipos.map(t => {
                        return (
                            <option>{t.name}</option>
                        )
                    })
                }
            </select>

            <div className="button-pagination">
                <input className="back" type="button" value="<<<" onClick={handleBackwards} />
                <input className="forward" type="button" value=">>>" onClick={handleForewards} />
            </div>
            <select onChange={e => { handleFilterChange(e) }}>
                <option value={-1}>Selecciòn de Filtros</option>
                <option value={1} >Ordenar Asendente</option>
                <option value={2} >Ordenar Descendente</option>
                <option value={3} >Filtrar por Puntuación</option>
                <option value={4} >Pokemones Existentes</option>
                <option value={5} >Nuevo Pokemones Creados</option>
                <option value={6} >Todas las Recetas</option>
            </select>
            <div className="paginator">
                {
                    paginado.map((re, index) => {
                        return (
                            <PaginatorCard
                                key={index}
                                id={re.id}
                                name={re.name}
                                image={re.image}
                                tipo={re.types}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Recipes;
