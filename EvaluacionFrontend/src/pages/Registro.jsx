import { useState } from "react";

import {
    Link,
    useNavigate,
  } from "react-router-dom";
  
  import Input from "../components/Input";
  import Button from "../components/Button";
  import Card from "../components/Card";

function Register () {


    const navigate = useNavigate();


    const [name, setName] = useState("")

    const [lastname, setLastName] = useState("")

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")


    const handleRegister = (e) => {

        e.preventeDefault();


        const user = {
            name,lastname,email,password
        };


        console.log(user)


        alert("Usuario registrado correctamente")


        navigate("/login")

    }

    return(
        <div className="container">
        <Card >

        <form onSubmit={handleRegister}>
            <h2>Crear Cuenta</h2>


            <Input type="text"  placeholder= "Nombre" value={name} onChange={(e) => setName(e.target.value)} />

            <Input type="text"  placeholder= "Apellido" value={lastname} onChange={(e) => setLastName(e.target.value)} />

            <Input type="email"  placeholder= "Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <Input type="text"  placeholder= "Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        </form>

        <Button  type= "submit" text= "Registrarse" />
     
        <div  className="links">
                <Link to = "/" >
                Ya tengo cuenta 
                </Link>
        </div>
        </Card>
        </div>
    );

}


export default Register;