import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FormularioContainer from "../FormularioContainer/FormularioContainer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
   
      <Footer />
    </>
  );
}

export default Layout;