import { Routes, Route } from "react-router-dom";

import ProductoDetalle  from "./ProductoDetalle/ProductoDetalle";

import Layout from "./Layout/Layout";

import { ItemListContainer } from "./ItemListContainer/ItemListContainer";

import "./index.css";

import Carrito from "./Carrito";

import { Link } from "react-router-dom";



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

      </Route>

    </Routes>

  );

}

export default App;