import { useState } from 'react'; 
import { Link } from 'react-router-dom';

export function Item({ id, nombre, precio, stock,imagen }) { 
  const [cantidad, setCantidad] = useState(0); 
  const incrementar = () => { 
    if (cantidad < stock) { 
      setCantidad(cantidad + 1); 
    } 
  }; 
 
  const decrementar = () => { 
    if (cantidad > 1) { 
      setCantidad(cantidad - 1); 
    } 
  }; 
 
  const agregarAlCarrito = () => { 
      alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`); 
  } 
 
const [marcarComoFavorito, setMarcarComoFavorito] = useState(false); 
const SetMarcarComoFavorito = () => { 
  setMarcarComoFavorito(!marcarComoFavorito); 
};


  return ( 
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: 
'8px', textAlign: 'center' }}> 
    
      <h3>{nombre}</h3> 

 <img
   src={imagen}
   alt={nombre}
   width="200"
/>



      <p>Precio: ${precio}</p> 
      <p>Stock disponible: {stock}</p> 

      <span onClick={SetMarcarComoFavorito} 
style={{ fontSize: '24px'}} 
> {marcarComoFavorito ? '⭐' : '☆'} 
</span> 
         
 
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 
'center', margin: '10px 0' }}> 
<button onClick={decrementar}>-</button> 
<p style={{ margin: '0 10px' }}>{cantidad}</p> 
<button onClick={incrementar}>+</button> 
</div> 
<button onClick={agregarAlCarrito}>Agregar al Carrito</button> 
<Link to={`/producto/${id}`}>
   <button>Ver Detalles</button>
</Link>
</div> 

); 
}