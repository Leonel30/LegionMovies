import React from "react";
import { Link } from "react-router-dom";
import { Buscador } from "./Buscador";

export const Header = ({ favorites }) => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" style={{ color: "#ffff" }} to="/">
              Legion-Movies
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    style={{ color: "#ffff" }}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    style={{ color: "#ffff" }}
                    aria-current="page"
                    to="/listado"
                  >
                    List
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    style={{ color: "#ffff" }}
                    aria-current="page"
                    to="/favoritos"
                  >
                    Favorites
                  </Link>
                </li>
                <li className="nav-item mt-2 mx-5">
                  <span className="text-success">
                    {favorites.length > 0 && (
                      <span>Peliculas en favoritos:{favorites.length}</span>
                    )}
                  </span>
                </li>
              </ul>
              <Buscador />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
