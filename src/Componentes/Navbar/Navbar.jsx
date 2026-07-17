import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Context/AuthContext";


const NavBar = () => {
const { user, logout } = useAuth();
console.log(user);

const { getCartQuantity } = useCart();

const totalItems = getCartQuantity();

  
    return (

        <nav className={styles.navbar}>

            <Link to="/">
                Inicio
            </Link>

            <Link to="/productos">
                Productos
            </Link>

            <Link to="/carrito">
                🛒 Carrito ({totalItems})
            </Link>


            {
            user ? (

                <>

                {
                user.rol === "admin" && (

                    <>
                    <Link to="/GestionProductos">
                        Gestión de Productos
                    </Link>

                    <Link to="/GestionCupones">
                        Gestión de Cupones
                    </Link>
                    </>
                )
                }


                <span>
                    Hola, {user.email}
                </span>


                <button onClick={logout}>
                    Cerrar Sesión
                </button>


                </>

            ) : (

                <Link to="/login">
                    Login
                </Link>

            )
            }


        </nav>

    );

};


export default NavBar;