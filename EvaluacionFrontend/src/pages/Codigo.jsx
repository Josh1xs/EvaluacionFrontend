import { useState } from "react";

import {
    Link,
    useNavigate,
  } from "react-router-dom";
  
  import Input from "../components/Input";
  import Button from "../components/Button";
  import Card from "../components/Card";



  function CodigoContraseña () {
    const navigate = useNavigate();


    const [code, setCode] = useState("");



    const verifyCode = (e) => {
        e.preventDefault();

        if(code == "12345" ){
            alert("Codigo correcto")
        }
        else {
            alert ("Codigo incorrecto")
        }
    };

    return (

        <div className="container">

            <Card>

            <form onSubmit={verifyCode}><h2>Verificar Codigo</h2>

            <Input  type="text"   placeholder="Codigo"  value={code}  onChange={(e) => setCode(e.target.value)} />
            
            <Button    type="submit" text ="Verificar codigo"/>


            </form>
            </Card>
        </div>
    )

  }


  export default CodigoContraseña;