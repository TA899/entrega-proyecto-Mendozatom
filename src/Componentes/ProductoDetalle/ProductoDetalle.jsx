import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ProductoDetalle.module.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

function ProductoDetalle() {

   const { id } = useParams();

   const [producto, setProducto] = useState(null);

useEffect(() => {

   const obtenerProducto = async () => {

      try {

         const productoRef = doc(db, "productos", id);
         const respuesta = await getDoc(productoRef);

         if (respuesta.exists()) {

            setProducto({
               id: respuesta.id,
               ...respuesta.data()
            });

         } else {
            console.log("El producto no existe");
         }

      } catch (error) {
         console.error(error);
      }

   };

   obtenerProducto();

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