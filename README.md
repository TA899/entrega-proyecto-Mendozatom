# Guía para la Pre-entrega



# Requerimientos

---

## 1. Estructura y Layout

- El proyecto debe tener una estructura de carpetas organizada.
- Debe contar con un componente `Layout.jsx` que contenga:
  - `Header.jsx`
  - `NavBar`
  - `Footer.jsx`

Todo con una apariencia consistente y funcional.  
(Ejercicio de Clase 3)

- El footer debe incluir:
  - Información de la empresa
  - Tarjetas de al menos 3 personas

(Ejercicio de Clase 5)

---

## 2. Catálogo de productos con datos de una API

La aplicación debe tener un componente como `ItemListContainer.jsx`
(o una página que cumpla esa función) que cargue la información de productos desde un archivo local `productos.json` utilizando:

- `useEffect`
- `fetch`

Los productos deben renderizarse utilizando un componente reutilizable `Item.jsx`, que reciba los datos mediante `props`.

(Ejercicio de Clase 4, adaptado con `useState` de Clase 4 y `useEffect` de Clase 5)

### Además:

- Incorporar el formulario de la Clase 6 debajo de los productos.

---

## 3. Sistema de ruteo

La navegación debe ser gestionada mediante `react-router-dom`.

### Deben existir, como mínimo, las siguientes rutas:

| Ruta | Descripción |
|------|-------------|
| `/` | Vista principal o de bienvenida |
| `/productos` | Catálogo de productos |
| `/producto/:id` | Vista de detalle de un único producto |
| `/carrito` | Vista del carrito de compras |

### Importante

El `NavBar` debe utilizar el componente `<Link>` para permitir una navegación fluida sin recargas de página.

(Clase 7)

---

## 4. Funcionalidad del carrito con Context API

⚠️ Esto no entra en la Pre-Entrega ⚠️

---

## 5. Alojamiento online

La página debe estar subida a:

- Netlify
- Vercel
- GitHub Pages

Además, se debe compartir:

- URL pública del proyecto
- Link al repositorio de GitHub

---

## 🌐 Aplicación desplegada

### Requisitos

- La app debe estar subida a **Netlify**
- Debe ser accesible mediante una URL pública

### Ejemplo

```txt
https://mi-tienda-react.netlify.app
```

---

# Entrega

La entrega debe incluir:

- Repositorio de GitHub
- URL pública del proyecto desplegado
- Proyecto funcionando correctamente
- Navegación entre rutas
- Renderizado dinámico de productos desde `productos.json`
