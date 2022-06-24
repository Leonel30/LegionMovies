import React from "react";

import { Link } from "react-router-dom";

export const Favoritos = ({ favorites, addOrRemoveFevourite }) => {
  return (
    <>
      <h2>Seccion de Favoritos</h2>
      <div className="row">
        {favorites.length === 0 && (
          <h5 className="col-12 ">No tienes peliculas agregadas a Favoritos</h5>
        )}
        {favorites.map((oneMovies, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card mt-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${oneMovies.imgURL}`}
                  class="card-img-top"
                  alt="Movie"
                />
                <button
                  className="favourite-btn"
                  onClick={addOrRemoveFevourite}
                  movie-ID={oneMovies.idMovie}
                >
                  🖤
                </button>
                <div className="card-body">
                  <h5 className="card-title">
                    {oneMovies.title.substring(0, 30)}...
                  </h5>
                  <p className="card-text">
                    {oneMovies.overview.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/moviedetail?movieID=${oneMovies.idMovie}`}
                    className="btn btn-primary"
                  >
                    Ver Detalle
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
