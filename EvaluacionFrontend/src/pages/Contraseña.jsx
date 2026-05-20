import { useState } from "react";

import {
    Link,
    useNavigate,
  } from "react-router-dom";
  
  import Input from "../components/Input";
  import Button from "../components/Button";
  import Card from "../components/Card";


function NuevaContraseña () {

    const navigate = useNavigate();

    const [
    newPassword,
    setNewPassword
    ] = useState("");


    const [
        confirmPassword,
        setConfirmPassword
    ] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();

        if(newPassword !== confirmPassword){
            alert("No coincide las contraseñas")
        }

        return;
    }
    
    alert(
        "Contraseña actualizada correctamente"
    )

    navigate("/")

}


return (

    <div className="container">

    <Card>

    <form onSubmit={handleSubmit}><h2>Nueva Contraseña</h2>

    <Input
            type="password"
            placeholder="Nueva contraseña"
            value={NuevaContraseña}
            onChange={(e) =>
                setNewPassword(e.target.value)
            }
          />

    <Input
            type="password"
            placeholder="Confirmar la contraseña"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

        <Button   type= "submit" text= "cambiar Contraseña"/>


    </form>
    </Card>

    </div>
)


export default NuevaContraseña;