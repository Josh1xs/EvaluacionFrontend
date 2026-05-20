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
    }

  }