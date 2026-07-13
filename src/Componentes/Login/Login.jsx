import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Inicio de sesión correcto");
                navigate("/");
            })
            .catch((error) => {
                console.error(error);

                switch (error.code) {
                    case "auth/user-not-found":
                        alert("El usuario no existe.");
                        break;

                    case "auth/wrong-password":
                        alert("Contraseña incorrecta.");
                        break;

                    case "auth/invalid-credential":
                        alert("Correo o contraseña incorrectos.");
                        break;

                    default:
                        alert(error.message);
                }
            });
    };

    return (
        <div className="container mt-5">
            <h2>Iniciar Sesión</h2>

            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">
                        Correo electrónico
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ingrese su correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Contraseña
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className="btn btn-primary" type="submit">
                    Ingresar
                </button>
            </form>

            <p className="mt-3">
                ¿No tenés una cuenta?{" "}
                <Link to="/registro">
                    Registrate aquí
                </Link>
            </p>
        </div>
    );
}

export default Login;