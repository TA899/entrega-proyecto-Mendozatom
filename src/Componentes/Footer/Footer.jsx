import { useEffect, useState } from "react";
import style from "./Footer.module.css";

function Footer()
{

const [personas,setPersonas] = useState([])
const [cargando,setCargando] = useState(true)
const [error,setError] = useState(null);
     
     useEffect(() => {
        fetch("/data/nosotros.json")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setPersonas(data);
          })
          .catch((error) => {
            setError(true);
          })
          .finally(() => {
            setCargando(false);
          });
     }, []);

if (cargando) {
    return <h2>Cargando...</h2>;
}
if (error) {
    return <h2>Error: {error.message}</h2>;
}


    return ( 
       <div  className={style.contenedor}>

        {personas.map(persona => (

            <div
                className={style.tarjeta}

                key={persona.id}
            >

                <img
                    src={persona.imagen}
                    alt={persona.nombre}
                    width="100"
                />

                <h3>{persona.nombre}</h3>

                <p>{persona.email}</p>

                <p>{persona.puesto}</p>

            </div>

        ))}

    </div>
           )
}export default Footer;