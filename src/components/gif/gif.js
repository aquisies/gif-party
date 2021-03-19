import React from "react";
import {addToFavorites} from "../../actions";
import { connect } from 'react-redux'


function Gif({title, img, url, id, addToFavorites}){
    console.log(addToFavorites);
    function handleClick(e) {
        e.preventDefault();
        let id = e.target.id;
        addToFavorites(id);
        alert('Gif agregado a favoritos!');
    }

    return(
        <div className="card" style={{width:'18rem'}}>
            <img src={img} className="card-img-top" alt="..." height='250rem'/>
                <div className="card-body">
                    <h5 className="card-title"><small>{title}</small></h5>
                    <p className="card-text"><small>URL: <a href={url} target='_blank'>{url}</a></small></p>
                    <a id={id} onClick={handleClick} className="btn btn-primary">Agregar a favoritos</a>
                </div>
        </div>
    )

}

export default connect(
    null,
    { addToFavorites }
    )(Gif)