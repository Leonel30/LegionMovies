import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { user, password } = formState;

  const handlerOnChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (email === "" || password === "") {
      swal(<h2>"los casillas no pueden estar vacias"</h2>);
      console.log("los casillas no pueden estar vacias");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      console.log("formato de correo invalido");
      swal(<h2>formato de correo invalido</h2>);
      return;
    }
    if (email !== "challenge@alkemy.org" && password !== "react") {
      console.log("credenciales invalidas");
      swal(<h2>credenciales invalidas</h2>);
      return;
    }
    console.log("Bienvenido!");

    // post se coloca la url donde me va a validar el usario y contraseña //
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        console.log(res.data);
        swal({
          title: "Bienvenido",
          text: "Credenciales autorizadas",
          icon: "success",
        });
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        navigate("/listado", { replace: true });
      });
  };
  let token = localStorage.getItem("token");
  return (
    <>
      {token && <Navigate to="/listado" replace={true} />}
      <h2 className="container col-4">Formulario Login</h2>
      <form onSubmit={handlerSubmit} className="container col-4 mt-3">
        <label>
          <span>Ingrese Usuario</span>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="email"
            value={user}
            onChange={handlerOnChange}
          />
        </label>
        <br />
        <label>
          <span>Ingrese Contraseña</span>
          <input
            className="form-control mt-2"
            type="password"
            name="password"
            placeholder=" introduzca password"
            value={password}
            onChange={handlerOnChange}
          />
        </label>
        <br />
        <button className=" btn btn-primary mt-2" type="submit">
          {" "}
          Ingresar
        </button>
      </form>
    </>
  );
};
