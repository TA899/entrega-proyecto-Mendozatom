import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


function ProtectedRoute({ children }) {

    const { user, loading } = useAuth();


    // Mientras Firebase verifica la sesión
    if (loading) {
        return <h2>Cargando...</h2>;
    }


    // Si no hay usuario
    if (!user) {
        return <Navigate to="/login" />;
    }


    // Si existe usuario pero no es admin
    if (user.rol !== "admin") {
        return <Navigate to="/" />;
    }


    // Si todo está correcto
    return children;

}


export default ProtectedRoute;