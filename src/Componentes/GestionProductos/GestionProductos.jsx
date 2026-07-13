// src/componentes/Gestion/Gestion.jsx
import React, { useState, useEffect } from 'react';
import FormularioProducto from '../FormularioProducto/FormularioProducto';
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const GestionProductos = () => {

    const apikey = 'e311ba8a45f81a5acc69f4089410425a';

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);

    const estadoInicialForm = {
        id: "",
        nombre: "",
        categoria: "",
        precio: "",
        stock: "",
        detalle: "",
        imagen: ""
    };

    const [datosForm, setDatosForm] = useState(estadoInicialForm);
    const [imagenFile, setImagenFile] = useState(null);

    const manejarCambio = (e) => {
        setDatosForm({
            ...datosForm,
            [e.target.name]: e.target.value
        });
    };

    const manejarCambioImagen = (e) => {
        setImagenFile(e.target.files[0]);
    };


const cargarProductos = async () => {
            const productosRef = collection(db, "productos");
            const resp = await getDocs(productosRef);

                 setProductos(
            resp.docs.map((doc) => ({
            ...doc.data(),
            idFirestore: doc.id
    }))
);
        };


    useEffect(() => {
        cargarProductos();
    }, []);

    const handleDelete = async (id) => {
        const confirmacion = window.confirm(
            "¿Está seguro de que desea eliminar este producto?"
        );

        if (confirmacion) {
            const docRef = doc(db, "productos", id);
            await deleteDoc(docRef);

            setProductos(productos.filter(prod => prod.idFirestore !== id));

            alert("Producto eliminado.");
        }
    };

    const [productoAEditar, setProductoAEditar] = useState(null);

    const manejarEditar = (producto) => {
	setProductoAEditar(producto);
    	console.log(producto);
         setDatosForm(producto);   
};

    const modoEdicion = productoAEditar !== null;

const manejarEnvio = async (evento) => {

    evento.preventDefault();

    setLoading(true);


    if (!imagenFile && !productoAEditar) {
        alert("Por favor, selecciona una imagen.");
        setLoading(false);
        return;
    }


     let urlImagen = datosForm.imagen;

    try {


        // PRIMER CAMBIO:
        // Por defecto usamos la imagen que ya tiene el producto
       



        // SEGUNDO CAMBIO:
        // Solo entramos acá si el usuario eligió una imagen nueva
        if (imagenFile) {


            const formData = new FormData();

            formData.append("image", imagenFile);


            console.log("Subiendo imagen...");


            const respuestaImgbb = await fetch(
                `https://api.imgbb.com/1/upload?key=${apikey}`,
                {
                    method: "POST",
                    body: formData
                }
            );


            const datosImgbb = await respuestaImgbb.json();


            if (datosImgbb.success) {


                // Actualizamos la URL
                urlImagen = datosImgbb.data.url;


            } else {

                throw new Error("Error al subir imagen");

            }

        }



        // TERCER CAMBIO:
        // Se arma el producto después del if
        const productoCompleto = {

            ...datosForm,
            imagen: urlImagen

        };



        console.log(
            "Enviando producto a Firebase",
            productoCompleto
        );



       if (productoAEditar) {

    const docRef = doc(
        db,
        "productos",
        productoAEditar.idFirestore
    );

    await updateDoc(
        docRef,
        productoCompleto
    );

    alert("Producto actualizado correctamente");


} else {

    const productosCollection = collection(db, "productos");


    await addDoc(
        productosCollection,
        productoCompleto
    );

    alert("Producto cargado correctamente");

}

        await cargarProductos();






        setDatosForm(estadoInicialForm);
        setImagenFile(null);
        setProductoAEditar(null);



    } catch (error) {


        console.error(error);

        alert("Hubo un error");


    } finally {


        setLoading(false);


    }

};

    return (
        <div>

            <h2>Gestión de Productos</h2>
            <hr />

            <FormularioProducto
                datosForm={datosForm}
                manejarCambio={manejarCambio}
                manejarCambioImagen={manejarCambioImagen}
                manejarEnvio={manejarEnvio}
                loading={loading}
                modoEdicion={modoEdicion}
                
            />

            <hr />

           <h3>
    {modoEdicion
        ? "Editar Producto"
        : "Agregar Nuevo Producto"}
</h3>

            <ul>
                {productos.map((prod) => (
                    <li key={prod.idFirestore}>
                        {prod.nombre} - ${prod.precio}

                        <button
                            onClick={() => handleDelete(prod.idFirestore)}
                            style={{ marginLeft: "10px" }}
                        >
                            Eliminar
                        </button>

                            <button
        onClick={() => manejarEditar(prod)}
    >
        Editar
    </button>
                        
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default GestionProductos;