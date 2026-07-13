import { useEffect, useState } from "react";
import style from "./Footer.module.css";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

function Footer()
{

const [personas,setPersonas] = useState([])
const [cargando,setCargando] = useState(true)
const [error,setError] = useState(null);
     
    useEffect(() => {
    const equipoDB = collection(db,"equipo")
    getDocs(equipoDB).then((resp) => {
    setPersonas(
    resp.docs.map((doc) => {
    return{...doc.data()}
    })
    ); setCargando(false)
    })
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

                <p>{persona.linkedinURL}</p>

                <p>{persona.puesto}</p>

            </div>

        ))}

    </div>
           )
}export default Footer;