import {
    CREA_NEW_TYPE,
    GET_ALL_TYPES,
    GET_RECIPES_BY_ID, JOIN_POKEMON, QUIT_RECIPES_BY_ID,
    SET_FILTERS, GET_PK_BY_NAME, CREATE_RECIPE, GET_RECIPES, SET_FILTER_ASCENDENT
} from '../Actions';



const initialState = {

    recipes: [],
    recipeId: {},
    ascendent: [],
    types: [],
    idName: {}
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

        case GET_RECIPES_BY_ID:
            return{
                ...state,
                recipeId: action.payload
            }

        case QUIT_RECIPES_BY_ID:
            return {
                ...state,
                recipeId: action.payload
            } 

        case CREATE_RECIPE:
            return {
                state
                // pokemones: [...state.pokemones, action.payload]
            }
        case GET_ALL_TYPES:
            console.log(action.payload);
            return {
                ...state,
                types: action.payload
            }
        case SET_FILTER_ASCENDENT:
            return {
                ...state,
                ascendent: action.payload
            }
        // case CREA_NEW_TYPE:
        //     return {
        //     }
        // case JOIN_POKEMON:
        //     return {
        //         ...state,
        //         pokemones: [action.payload, ...state.pokemones]
        //     }    
        case SET_FILTERS:
            return {
                ...state, 
                pokemones: action.payload
            }    
        //     case GET_PK_BY_NAME:
        //         return{
        //             ...state,
        //             idName: action.payload
        //         }

        default: return state
    }
}