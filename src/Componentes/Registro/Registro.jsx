import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/config";


function Registro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { signup } = useAuth();


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const resultado = await signup(
                email,
                password
            );


            await setDoc(
                doc(db, "usuarios", resultado.user.uid),
                {
                    email: email,
                    rol: "user"
                }
            );


            alert("Usuario creado correctamente.");

            navigate("/");


        } catch (error) {

            console.error(error);


            if (error.code === "auth/email-already-in-use") {

                const respuesta = window.confirm(
                    "Ese correo ya está registrado. ¿Desea iniciar sesión?"
                );


                if (respuesta) {
                    navigate("/login");
                } else {
                    navigate("/");
                }


            } else if (error.code === "auth/weak-password") {

                setError(
                    "La contraseña debe tener al menos 6 caracteres."
                );


            } else if (error.code === "auth/invalid-email") {

                setError(
                    "El correo electrónico no es válido."
                );


            } else {

                setError(
                    "Ocurrió un error al registrar el usuario."
                );

            }

        }

    };


    return (

        <div className="container mt-5">

            <h2>Crear una cuenta</h2>


            <form onSubmit={handleSubmit}>


                <div className="mb-3">

                    <label className="form-label">
                        Correo electrónico
                    </label>


                    <input
                        type="email"
                        className="form-control"
                        placeholder="Ingrese su correo"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
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
                        placeholder="Mínimo 6 caracteres"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />

                </div>



                {error && (

                    <div className="alert alert-danger">
                        {error}
                    </div>

                )}



                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Registrarse
                </button>


            </form>

        </div>

    );

}


export default Registro;