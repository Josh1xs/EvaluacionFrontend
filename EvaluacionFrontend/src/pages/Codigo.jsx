import { useState } from "react";

import {
    Link,
    useNavigate,
  } from "react-router-dom";
  
  import Input from "../components/Input";
  import Button from "../components/Button";
  import Card from "../components/Card";



function Codigo (){

    const navigate = useNavigate();

    const [code, setCode] = useState("")

    const verifyCode = (e) => {

        e.preventDefault();

        if( code === "12345"){

            alert("Codigo correcto")

            navigate("/new-password")

        }

        else {
            alert ("Codigo incorrecto")
        }
    };


    return (
        
        <div  className="container">

        <Card>

        <form onSubmit={verifyCode}><h2>Verificar Codigo</h2>

        <Input   type= "text" placeholder= "codigo" value={code}   onChange={(e) => setCode (e.target.value)} />

        <Button   type= "submit" text= "enviar codigo">

        </Button>

        </form>
        </Card>
        </div>
    )
    

}


export default Codigo;