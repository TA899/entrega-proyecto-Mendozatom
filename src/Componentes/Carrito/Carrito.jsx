// src/componentes/Carrito/Carrito.jsx

import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

function Carrito() {

    const {
        cart,
        clearCart,
        getCartTotal
    } = useCart();

    const [codigo, setCodigo] = useState("");
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);

    const aplicarCupon = async () => {

        try {

            const respuesta = await getDocs(
                collection(db, "cupones")
            );

            const cupones = respuesta.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            const cupon = cupones.find(
                c =>
                    c.codigo.toUpperCase() ===
                    codigo.toUpperCase().trim()
            );

            if (!cupon) {

                alert("Cupón inválido.");
                return;

            }

            setDescuentoAplicado(cupon.descuento);

            alert(
                `Cupón aplicado (${cupon.descuento}% de descuento)`
            );

        } catch (error) {

            console.error(error);
            alert("Error al aplicar el cupón.");

        }

    };

    if (cart.length === 0) {

        return (

            <div>

                <h1>Carrito de Compras</h1>

                <p>El carrito está vacío.</p>

            </div>

        );

    }

    return (

        <div>

            <h1>Carrito de Compras</h1>

            {cart.map(item => (

                <div key={item.id}>

                    <img
                        src={item.imagen}
                        alt={item.nombre}
                        width="120"
                    />

                    <h3>{item.nombre}</h3>

                    <p>Precio: ${item.precio}</p>

                    <p>Cantidad: {item.quantity}</p>

                    <p>
                        Subtotal: $
                        {item.precio * item.quantity}
                    </p>

                    <hr />

                </div>

            ))}

            <input
                type="text"
                placeholder="Código del cupón"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
            />

            <button onClick={aplicarCupon}>
                Aplicar cupón
            </button>

            <h2>Subtotal: ${getCartTotal()}</h2>

            <h3>Descuento: {descuentoAplicado}%</h3>

            <h2>
                Total final: $
                {(getCartTotal() * (1 - descuentoAplicado / 100)).toFixed(2)}
            </h2>

            <button onClick={clearCart}>
                Vaciar carrito
            </button>

        </div>

    );

}

export default Carrito;