import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
 
function Dashboard() {
  const navigate = useNavigate();
 
  const logout = () => {
    navigate("/");
  };
 
  return (
    <div className="container">
      <Card>
        <div className="dashboard-header">
          <h1 className="title">¡Bienvenido al Dashboard!</h1>
 
          <button
            className="logout-btn"
            onClick={logout}
          >
            Salir
          </button>
        </div>
      </Card>
    </div>
  );
}
 
export default Dashboard;