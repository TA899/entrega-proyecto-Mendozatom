import { Routes, Route } from "react-router-dom";

import ProductoDetalle from "./Componentes/ProductoDetalle/ProductoDetalle";

import Layout from "./Componentes/Layout/Layout";

import { ItemListContainer } from "./Componentes/ItemListContainer/ItemListContainer";

import "./index.css";

import Carrito from "./Componentes/Carrito/Carrito";

import { Link } from "react-router-dom";

import GestionProductos from "./Componentes/GestionProductos/GestionProductos";

import GestionCupones from "./Componentes/GestionCupones/GestionCupones";

import Login from "./Componentes/Login/Login";

import Registro from "./Componentes/Registro/Registro";

import ProtectedRoute from "./Componentes/ProtectedRoute/ProtectedRoute";



function App() {

  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        <Route
          index
          element={
          <div>
           <h1>Inicio</h1>

            <img src="images/ofetas.png"
            alt="Inicio"
            
            
          />
          </div>
          
          }
        />

        <Route
          path="productos"
          element={
            <ItemListContainer Mensaje="Nuestros productos" />
          }
        />

<Route
   path="producto/:id"
   element={<ProductoDetalle />}
/>
    

        <Route
          path="carrito"
          element={<Carrito />}
        />

  
    
<Route
path="GestionProductos"
element={
    <ProtectedRoute>
        <GestionProductos />
    </ProtectedRoute>
}
/>

   


<Route
path="GestionCupones"
element={
    <ProtectedRoute>
        <GestionCupones />
    </ProtectedRoute>
}
/>
<Route path="/login" element={<Login />} />

<Route path="/registro" element={<Registro />} />



   </Route>

    </Routes>

  );

}

export default App;