import { useState } from "react";

import {
    Link,
    useNavigate,
  } from "react-router-dom";
  
  import Input from "../components/Input";
  import Button from "../components/Button";
  import Card from "../components/Card";



function RecuperarContraseña (){

    const navigate = useNavigate();

    const [email, setEmail] = useState("")

    const handleRecovery = (e) => {

        e.preventDefault();

        if( email === "joshua@gmail.com"){

            alert("Se envio el codigo a tu correo")

            navigate("/password-code")

        }

        else {
            alert ("Codigo incorrecto")
        }
    };


    return (
        
        <div  className="container">

        <Card>

        <form onSubmit={handleRecovery}><h2>Recuperar Contraseña</h2>

        <Input   type= "email" placeholder= "correo" value={email}   onChange={(e) => setEmail (e.target.value)} />

        <Button   type= "submit" text= "enviar codigo">

        </Button>

        </form>
        </Card>
        </div>
    )
    

}


export default RecuperarContraseña;