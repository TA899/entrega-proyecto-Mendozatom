import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import FormularioContainer from "../FormularioContainer/FormularioContainer";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';


export function ItemListContainer({ Mensaje }) {

  const [productos, setProductos] = useState([]);
  const [cargando, SetCargando] = useState(true);
  const [error, SetError] = useState(null);
  /*useEffect(() => {

    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });

  }, []);
*/

useEffect(() => {
const prodDB = collection(db,"productos")
getDocs(prodDB).then((resp) => {
setProductos(
resp.docs.map((doc) => {
return{...doc.data(),id:doc.id}
})
); SetCargando(false)
})
}, []);


if (cargando) return <h1>Cargando...</h1>;
if (error) return <h1>Hubo un error</h1>;


  return (

    <div>

      <h1 >
        {Mensaje}
      </h1>

      <div >
        <ItemList productos={productos} />
      </div>

   
    

    </div>
     
     

  );

}