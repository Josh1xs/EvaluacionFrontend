import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const User = {
    email: "joshua@gmail.com",
    password: "123456",
  };

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email ===  User.email &&
      password === User.password
    ) {

      alert("Inicio de sesión exitoso");

      navigate("/dashboard");

    } else {

      alert(
        "Correo o contraseña incorrectos"
      );
    }
  };

  return (

    <div className="container">

      <Card>

        <form onSubmit={handleLogin}>

          <h2>Iniciar Sesión</h2>

          <Input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <Button
            type="submit"
            text="Ingresar"
          />

          <div className="links">

            <Link to="/register">
              Crear cuenta
            </Link>

            <Link to="/recovery">
              Recuperar contraseña
            </Link>

          </div>

        </form>

      </Card>

    </div>
  );
}

export default Login;