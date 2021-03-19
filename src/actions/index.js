export const GET_TRENDING = 'GET_TRENDING';
export const SEARCH_GIFS = 'SEARCH_GIFS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const APY_KEY = 'WIF9JMT06nzpfuD71KJGutCJE3OWVl1c'

export function getTrending(){
    return function (dispatch){
        return fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APY_KEY}&limit=4`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: GET_TRENDING, payload: json.data});
            })
    }
}

export function searchGifs(seachText){
    return function (dispatch){
        return fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&limit=4&q=${seachText}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: SEARCH_GIFS, payload: json.data});
            })
    }
}
export function addToFavorites(id){
    return function (dispatch){
        return fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APY_KEY}`)
            .then(response => response.json())
            .then(json => {
                dispatch({type: ADD_TO_FAVORITES, payload: json.data});
            })
    }
}