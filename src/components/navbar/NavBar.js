import React, {useState} from "react";
import { searchGifs } from '../../actions/index';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";


function NavBar({ searchGifs }){
    const [searchText, setSearchText] = useState('');

    function handleSubmit (e){
        e.preventDefault();
    }

    function handleClick(e){
        e.preventDefault();
        searchGifs(searchText);
    }

    function handleChange(e) {
        let text = e.target.value;
        setSearchText(text);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink exact to='/' className="navbar-brand">GIF Party</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" exact to="/" activeClassName='active'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" exact to="/favorites" activeClassName='active'>Favoritos</NavLink>
                        </li>
                    </ul>
                </div>
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        value={searchText}
                        aria-label="Search"
                        onChange={handleChange}
                    />
                    <button onClick={handleClick} className="btn btn-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default connect(
    null,
    { searchGifs }
)(NavBar)