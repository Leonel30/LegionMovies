import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const MovieDetail = () => {
  let token = localStorage.getItem("token");

  const [detail, setDetail] = useState([]);
  let query = new URLSearchParams(window.location.search);
  let id = query.get("movieID");

  useEffect(() => {
    const urlDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=c85c9ac18b90409ccd9439f2e7ad501d&language=es-ES`;
    axios
      .get(urlDetail)
      .then((res) => {
        const data = res.data;
        setDetail(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  console.log(detail);
  let generos = detail.genres;
  console.log(generos);
  /* let generos2= [{name:1},{name:2},{name:3}] */

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row">
        <div className="col-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
            class="card-img-top"
            alt="Movie"
          />
        </div>
        <div className="col-8">
          <h5>Titulo:{detail.title}</h5>
          <h5>Fecha Estreno:{detail.release_date}</h5>
          <h5>Reseña:</h5>
          <p>{detail.overview}</p>
          <h5>Géneros:</h5>
          <ul>
            {/*   {   
                  generos.map((one, idx) => {
                    return <li key={idx} >{one.name}</li>
                  })
                } */}
          </ul>
        </div>
      </div>
    </>
  );
};
