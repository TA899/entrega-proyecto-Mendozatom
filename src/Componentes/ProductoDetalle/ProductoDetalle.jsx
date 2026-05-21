import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductoDetalle.module.css";

function ProductoDetalle() {

   const { id } = useParams();

   const [producto, setProducto] = useState(null);

   useEffect(() => {

      fetch("/data/productos.json")
         .then((response) => response.json())
         .then((data) => {

            const productoEncontrado =
               data.find(prod => prod.id === Number(id));

            setProducto(productoEncontrado);

         });

   }, [id]);

   if (!producto) {
      return <h2>Cargando...</h2>;
   }

   return (

     <div className={style.detalle}>

   <img
      src={producto.imagen}
      alt={producto.nombre}
   />

   <div className={style.info}>

      <h1>{producto.nombre}</h1>

      <p>{producto.descripcion}</p>

      <h2 className={style.precio}>
         ${producto.precio}
      </h2>



      <button className={style.boton}>
         Agregar al carrito
      </button>

   </div>

</div>

   );

}

export default ProductoDetalle;