import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import FormularioContainer from "../FormularioContainer/FormularioContainer";


export function ItemListContainer({ Mensaje }) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });

  }, []);

  return (

    <div>

      <h1 >
        {Mensaje}
      </h1>

      <div >
        <ItemList productos={productos} />
      </div>

       <FormularioContainer />
    

    </div>
     
     

  );

}