import { useNavigate } from "react-router-dom";

import Card from "../components/Card"


function Dashbaord () {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }
};


return (
    <div className="container">

    <Card>

    <h1 className="title">Bienvenido al Dashboard</h1>
    <button className="logout-btn" onClick={logout}>Salir</button>
    </Card>

    </div>
)


export default Dashbaord;