import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';
export const SET_FILTER_ASCENDENT = 'SET_FILTER_ASENDENT';
export const GET_RECIPES_BY_ID = 'GET_RECIPES_BY_ID';
export const QUIT_RECIPES_BY_ID = 'QUIT_POKEMONES_BY_ID';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';

// export const CREA_NEW_TYPE = 'CREA_NEW_TYPE'; 
// export const JOIN_POKEMON = 'JOIN_POKEMON';
export const SET_FILTERS = 'SET_FILTERS';
// export const GET_PK_BY_NAME = 'GET_PK_BY_NAME';

// export function getPkByName(name) {
//     return async dispatch => {
//         return await axios.get(`http://localhost:3001/pokemons/searchName?name=${name}`)
//         .then(response => dispatch({
//             type: GET_PK_BY_NAME,
//             payload: response.data
//         }))
//     }
    
// }

export const setFilters = (payload) => {
    return {
        type: SET_FILTERS,
        payload: payload
    }
}

// export const joinPokemon = (payload) => {
//     return {
//         type: JOIN_POKEMON,
//         payload: payload
//     }
// }

// export const creaNewType = (payload) => {
//     return (dispatch) => {
//         axios.post("http://localhost:3001/types/add", payload)
//         .then(response => {
//             response = dispatch({
//                 type: CREA_NEW_TYPE,
//                 payload: payload
//             })
//         });
//     }
// }

export const getRecipes = (payload) => {
    let allRecipes = [];
    return async dispatch => {
        return  await axios.get("http://localhost:3001/recipes")
        .then(response => {
            allRecipes = response.data;
            console.log('RESPONSE.DATA::::', allRecipes);
            dispatch({
            type: GET_RECIPES,
            payload: response.data
        })
    })
    }
}


export const getRecipesById = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/recipes/${id}`)
        .then(response => dispatch(
            {
                type: GET_RECIPES_BY_ID,
                payload: response.data
            }
        ))
    }

}


export function quitRecipesById(){
    return {
                type: QUIT_RECIPES_BY_ID, 
                payload:{}
             }    
}

export function createRecipe(payload){
    return async (dispatch)=>{
        dispatch({
            type: CREATE_RECIPE
        });
        await axios.post('http://localhost:3001/recipes/add', payload)
        .then((response)=>{
            console.log("registrado correctamente");
            console.log(response);
        })
    }

}

export function getAllTypes() {
    return async dispatch => {
        return  await axios.get("http://localhost:3001/types")
        .then(response => dispatch({
            type: GET_ALL_TYPES,
            payload: response.data
        }))
    }
}