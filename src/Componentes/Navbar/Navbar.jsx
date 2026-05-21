import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/carrito">Carrito</Link>
    </nav>
  )
}

export default NavBar