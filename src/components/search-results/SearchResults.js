import React from "react";
import { connect } from "react-redux";
import Gif from "../gif/gif";


function SearchResults ({ searchResults }) {
    return (
        <section className="row">
            <div className="d-flex flex-column justify-content-evenly mt-4">
                <span className='ms-4 mb-4'>Resultados de busqueda</span>
                <div className="d-flex flex-row justify-content-evenly flex-wrap">
                    {
                        searchResults.map(gif => <Gif
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
        searchResults: state.searchResults
    };
}


export default connect(
    mapStateToProps,
    null
)(SearchResults);