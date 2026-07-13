import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc
} from "firebase/firestore";

function GestionCupones() {

    const [codigo, setCodigo] = useState("");
    const [descuento, setDescuento] = useState("");
    const [cupones, setCupones] = useState([]);
    const [cuponAEditar, setCuponAEditar] = useState(null);

    const obtenerCupones = async () => {

        try {

            const respuesta = await getDocs(
                collection(db, "cupones")
            );

            const lista = respuesta.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setCupones(lista);

        } catch (error) {

            console.error(error);
            alert("Error al obtener los cupones.");

        }

    };

const agregarCupon = async (e) => {

    e.preventDefault();

  try {

    if (cuponAEditar) {

        await updateDoc(
            doc(db, "cupones", cuponAEditar.id),
            {
                codigo,
                descuento: Number(descuento)
            }
        );

        alert("Cupón actualizado correctamente.");

    } else {

        await addDoc(
            collection(db, "cupones"),
            {
                codigo,
                descuento: Number(descuento)
            }
        );

        alert("Cupón agregado correctamente.");

    }

    setCodigo("");
    setDescuento("");
    setCuponAEditar(null);

    await obtenerCupones();

} catch (error) {

    console.error(error);
    alert("Error al guardar el cupón.");

}

}


const eliminarCupon = async (id) => {

    const confirmar = window.confirm(
        "¿Desea eliminar este cupón?"
    );

    if (!confirmar) return;

    try {

        await deleteDoc(
            doc(db, "cupones", id)
        );

        await obtenerCupones();

        alert("Cupón eliminado.");

    } catch (error) {

        console.error(error);
        alert("Error al eliminar el cupón.");

    }

};


const editarCupon = (cupon) => {

    setCuponAEditar(cupon);

    setCodigo(cupon.codigo);
    setDescuento(cupon.descuento);

};



    useEffect(() => {
        obtenerCupones();
    }, []);

    return (

        <div>

            <h1>Gestión de Cupones</h1>

        <form onSubmit={agregarCupon}>

    <input
        type="text"
        placeholder="Código"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
    />

    <input
        type="number"
        placeholder="Descuento"
        value={descuento}
        onChange={(e) => setDescuento(e.target.value)}
    />

    <button type="submit">
        Agregar Cupón
    </button>

</form>




            <hr />

            <h2>Cupones existentes</h2>

            <ul>

    {cupones.map((cupon) => (

        <li key={cupon.id}>

            Código: <strong>{cupon.codigo}</strong> -
            Descuento: {cupon.descuento}%

            <button
                onClick={() => eliminarCupon(cupon.id)} style={{ marginLeft: "10px" }}>Eliminar
            </button>

            <button onClick={() => editarCupon(cupon)} style={{ marginLeft: "10px" }}> Editar
            </button>



        </li>

    ))}

</ul>
        </div>

    );

}

export default GestionCupones;