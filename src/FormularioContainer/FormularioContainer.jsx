import { useState } from "react";
import FormularioProducto  from "../FormularioProducto/FormularioProducto";


function FormularioContainer() {

const apikey = 'e311ba8a45f81a5acc69f4089410425a';

const [imagenFile, setImagenFile] = useState(null);

const [datosForm, setDatosForm] = useState({
    nombre: '',
    precio: '',
    stock: ''
});

const manejarCambio = (evento) => {

    const { name, value } = evento.target;

    setDatosForm({
        ...datosForm,
        [name]: value
    });

};

const manejarCambioImagen = (evento) => {

   setImagenFile(evento.target.files[0]);

};

const manejarEnvio = async (evento) => {

    evento.preventDefault();

    setLoading(true);

    if (!imagenFile) {

        alert("Seleccioná una imagen");

        setLoading(false);

        return;
    }

    const formData = new FormData();

    formData.append('image', imagenFile);

    try {

        console.log("Subiendo imagen...");

        const respuestaImgbb = await fetch(
            `https://api.imgbb.com/1/upload?key=${apikey}`,
            {
                method: 'POST',
                body: formData
            }
        );

        const datosImgbb = await respuestaImgbb.json();

        if (datosImgbb.success) {

            const productoCompleto = {

                ...datosForm,
                urlImagen: datosImgbb.data.url

            };

            console.log("Producto completo:");
            console.log(productoCompleto);

            alert("Producto cargado correctamente");

        } else {

            throw new Error("Error al subir imagen");

        }

    } catch(error) {

        console.error(error);

        alert("Hubo un error");

    } finally {

        setLoading(false);

    }

};

const [loading,setLoading] = useState(false);

return (
<div>
   <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
      loading={loading}  
   />
</div>
);

}

export default FormularioContainer;