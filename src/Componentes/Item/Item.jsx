import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import style from './Item.module.css';
import { useCart } from '../../Context/CartContext';



export function Item({ id, nombre, precio, stock, imagen }) { 

const contexto = useCart();

console.log(contexto);
console.log(Object.keys(contexto));

const { addToCart } = contexto;

  const [cantidad, setCantidad] = useState(1); 


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

      addToCart(
        {
          id,
          nombre,
          precio,
          imagen
        },
        cantidad
      );

      alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  }; 


  const [marcarComoFavorito, setMarcarComoFavorito] = useState(false); 


  const SetMarcarComoFavorito = () => { 
    setMarcarComoFavorito(!marcarComoFavorito);
  };


  return ( 
    <div className={style.card}>

      <img
        src={imagen}
        alt={nombre}
        className={style.imagen}
      />

      <h3 className={style.nombre}>
        {nombre}
      </h3>

      <p className={style.precio}>
        ${precio}
      </p>

      <p className={style.stock}>
        Stock disponible: {stock}
      </p>

      <span
        onClick={SetMarcarComoFavorito}
        className={style.favorito}
      >
        {marcarComoFavorito ? '⭐' : '☆'}
      </span>


      <div className={style.contador}>

        <button onClick={decrementar}>
          -
        </button>

        <p>{cantidad}</p>

        <button onClick={incrementar}>
          +
        </button>

      </div>


      <button
        className={style.boton}
        onClick={agregarAlCarrito}
      >
        Agregar al carrito
      </button>


      <Link to={`/producto/${id}`}>
        <button className={style.detalles}>
          Ver detalles
        </button>
      </Link>

    </div>
  ); 
}