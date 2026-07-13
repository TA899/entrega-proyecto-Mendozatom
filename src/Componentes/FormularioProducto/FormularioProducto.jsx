import React from 'react';

export function FormularioProducto({
    datosForm,
    manejarCambio,
    manejarEnvio,
    manejarCambioImagen,
    loading,
    modoEdicion
}) {

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '24rem',
    margin: '3rem auto',
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    gap: '16px'
};

return (

    <form style={formStyle} onSubmit={manejarEnvio}>

        <h3>Agregar Nuevo Producto</h3>

        <div>
            <label>Nombre del Producto:</label>

            <input
                type="text"
                placeholder="Ej: Teclado Mecánico"
                name="nombre"
                value={datosForm.nombre}
                onChange={manejarCambio}
            />
        </div>

        <div>
            <label>Precio: $</label>

            <input
                type="number"
                placeholder="Ej: 95"
                name="precio"
                value={datosForm.precio}
                onChange={manejarCambio}
            />
        </div>

        <div>
            <label>Stock:</label>

            <input
                type="number"
                placeholder="Ej: 5"
                name="stock"
                value={datosForm.stock}
                onChange={manejarCambio}
            />
        </div>

        <div>
            <label>Imagen:</label>

            <input
                type="file"
                onChange={manejarCambioImagen}
            />
        </div>

       <div>
            <label>Categoria:</label>

            <input
                type="text"
                placeholder="Ej: Bebidas"
                name="categoria"
                value={datosForm.categoria}
                onChange={manejarCambio}
            />
        </div>

   <div>
            <label>id:</label>

            <input
                type="number"
                placeholder="Ej: 5"
                name="id"
                value={datosForm.id}
                onChange={manejarCambio}
            />
 </div>

 
   <div>
            <label>descripcion:</label>

            <input
                type="text"
                placeholder="Ej: Bebida energizante"
                name="descripcion"
                value={datosForm.descripcion}
                onChange={manejarCambio}
            />
 </div>



     <button type="submit" disabled={loading}>

   {loading
    ? "Procesando..."
    : modoEdicion
        ? "Actualizar Producto"
        : "Guardar Producto"}

</button>

    </form>

);

} export default FormularioProducto;