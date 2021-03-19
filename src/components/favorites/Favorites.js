import React from "react";
import {connect} from "react-redux";
import {getTrending} from "../../actions";
import Gif from "../gif/gif";


function Favorites (props) {
    if(props.favorites.length === 0){
        props.getTrending();
    }
    let gifs = props.favorites
    return (
        <section className="row">
            <div className="d-flex flex-column justify-content-evenly mt-4">
                <span className='ms-4 mb-4'>GIF's marcados como favoritos</span>
                <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    {
                        gifs.map(gif => <Gif
                            img={gif.images.fixed_width.webp}
                            title={gif.title}
                            url={gif.url}
                            key={gif.id}
                            id={gif.id}
                        />)
                    }
                </div>

            </div>
        </section>
    )

}


function mapStateToProps(state) {
    return {
        favorites: state.favorites
    };
}


export default connect(
    mapStateToProps,
    { getTrending }
)(Favorites);