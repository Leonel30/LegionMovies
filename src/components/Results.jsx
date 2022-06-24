import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";

export const Results = () => {
  let query = new URLSearchParams(window.location.search);
  let getKeyword = query.get("word");

  const [searchMovie, setSearchMovie] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=c85c9ac18b90409ccd9439f2e7ad501d&language=es-ES&query=${getKeyword}`;
    axios
      .get(endPoint)
      .then((res) => {
        const dataResults = res.data.results;

        if (dataResults.length === 0) {
          swal(<h2>No se encuentran resultados</h2>);
        }
        console.log(dataResults);
        setSearchMovie(dataResults);
      })
      .catch((error) => console.log(error));
    console.log("sigue andando");
  }, [getKeyword]);

  console.log(searchMovie);

  return (
    <>
      <h5>Resultados relacionados con: {getKeyword}</h5>
      {searchMovie.length === 0 && <h2>No hay resultados. :(</h2>}

      <div className="row">
        {searchMovie.map((oneMovies, idx) => {
          return (
            <div className="col-4" key={idx}>
              <div className="card mt-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${oneMovies.poster_path}`}
                  class="card-img-top"
                  alt="Movie"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {oneMovies.title.substring(0, 30)}...
                  </h5>
                  {/* <p className="card-text">{oneMovies.overview.substring(0,100)}...</p> */}
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
