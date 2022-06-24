import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "@sweetalert/with-react";
import axios from "axios";

export const Listado = ({ addOrRemoveFevourite }) => {
  console.log(addOrRemoveFevourite);
  const [moviesList, setMoviesList] = useState([]);
  const endPoint =
    "https://api.themoviedb.org/3/discover/movie?api_key=c85c9ac18b90409ccd9439f2e7ad501d&language=es-ES&page=1";
  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data.results;
        setMoviesList(apiData);
      })
      .catch((error) => {
        swal({
          title: "Error!!",
          text: "Hubo un error al intentar cargar los datos, por favor intenta más tarde.",
          icon: "warning",
        });
        console.log(error);
      });
  }, [setMoviesList]);
  console.log(moviesList);
  let token = localStorage.getItem("token");

  return (
    <>
      {!token && <Navigate to="/" replace={true} />}
      <div className="row">
        {moviesList.map((oneMovies, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card mt-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${oneMovies.poster_path}`}
                  class="card-img-top"
                  alt="Movie"
                />
                <button
                  className="favourite-btn"
                  onClick={addOrRemoveFevourite}
                  movie-ID={oneMovies.id}
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
                    to={`/moviedetail?movieID=${oneMovies.id}`}
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
