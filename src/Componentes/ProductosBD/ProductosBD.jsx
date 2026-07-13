import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';


const productosBD = () => {

    const [productos, setProductos] = useState([]);



useEffect(() => {
const prodDB = collection(db,"productos")
getDocs(prodDB).then((resp) => {
setProductos(
resp.docs.map((doc) => {
return{...doc.data(),idfirestore: doc.id}
})
);
})
}, []);


    return (
<div>  

<h1>Productos BD</h1>

<div className="lista-productos">
{/* 5. Mapeamos el estado `productos` para renderizar cada
uno */}
{productos.map(prod => (
<div key={prod.id} >
<img src={prod.imagen} alt={prod.nombre} style={{
width: '100px' }} />
<h3>{prod.nombre}</h3>
<p>Categoría: {prod.categoria}</p>
<p>Precio: ${prod.precio}</p>
<p>Stock: {prod.stock} unidades</p>
<hr />
</div>
))}
</div>
</div>
    )
}
 export default productosBD;