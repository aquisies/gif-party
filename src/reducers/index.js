import * as actions from '../actions/index';

const initialState = {
    trendings: [],
    searchResults:[],
    favorites: []

}

export default function rootReducer (state = initialState, action){
    switch (action.type) {
        case actions.GET_TRENDING:
            return {
                ...state,
                trendings: action.payload
            }
        case actions.SEARCH_GIFS:
            return {
                ...state,
                searchResults: action.payload
            }
        case actions.ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.concat(action.payload)
            }
        default:
            return state
    }
}



