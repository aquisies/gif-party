import React from 'react';
import NavBar from "../navbar/NavBar";
import SearchResults from "../search-results/SearchResults";
import Trendings from "../trendings/Trendings";
import Favorites from "../favorites/Favorites";
import { Route } from "react-router-dom";

export default function App() {
    return (
        <>
            <NavBar/>
            <SearchResults />
            <hr/>
            <Route exact path='/' component={Trendings}/>
            <Route exact path='/favorites' component={Favorites}/>
        </>
    );
}
