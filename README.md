# 🛒 Tienda React - Proyecto Integrador

Aplicación web de tienda desarrollada con **React + Vite**, enfocada en la creación de una experiencia de compra con diferentes niveles de acceso según el tipo de usuario.

El proyecto comenzó como una pre-entrega de Frontend y fue evolucionando incorporando funcionalidades adicionales como:

* Autenticación de usuarios con Firebase Authentication.
* Gestión de usuarios mediante roles.
* Panel administrativo.
* CRUD de productos.
* CRUD de cupones de descuento.
* Gestión del carrito mediante Context API.
* Persistencia de información utilizando Firebase Firestore.

---

# 🚀 Demo online

🌐 Aplicación desplegada:

https://tom4s-final-pr.netlify.app

---

# 📂 Repositorio

🔗 GitHub:

https://github.com/TA899/entrega-proyecto-Mendozatom

---

# 🛠️ Tecnologías utilizadas

## Frontend

* React
* Vite
* JavaScript
* HTML5
* CSS3
* React Router DOM
* Context API

## Backend / Servicios

* Firebase Authentication
* Firebase Firestore

## Herramientas

* Git
* GitHub
* Netlify

---

# 📌 Funcionalidades

## 🏠 Página principal

La aplicación cuenta con un layout general compuesto por:

* Header.
* Navbar.
* Footer.
* Sistema de navegación mediante rutas.

---

# 🛍️ Catálogo de productos

Los productos se cargan dinámicamente mediante:

* `useEffect`
* `fetch`
* Archivo local `productos.json`

Cada producto es renderizado mediante un componente reutilizable:

```jsx
Item.jsx
```

Funcionalidades:

* Visualización del catálogo.
* Acceso al detalle del producto.
* Agregado al carrito.

---

# 🔎 Detalle de producto

Ruta:

```
/producto/:id
```

Permite visualizar la información completa de un producto seleccionado utilizando parámetros dinámicos mediante React Router.

---

# 🛒 Carrito de compras

Implementado utilizando **Context API**.

Funciones principales:

* Agregar productos.
* Controlar cantidades.
* Calcular cantidad total.
* Calcular precio total.
* Vaciar carrito.

---

# 🔐 Autenticación de usuarios

Sistema desarrollado utilizando Firebase Authentication.

Permite:

* Registro de usuarios.
* Inicio de sesión.
* Cierre de sesión.
* Manejo del estado del usuario mediante AuthContext.

---

# 👥 Experiencia según el tipo de usuario

La aplicación cuenta con diferentes niveles de acceso.

---

## 🌐 Usuario sin cuenta

Los visitantes pueden:

* Navegar por la tienda.
* Visualizar productos.
* Consultar detalles.
* Acceder al carrito.


<img width="1117" height="917" alt="loqueveelusuaiosincuenta" src="https://github.com/user-attachments/assets/cadc6cc0-3400-4f35-b60e-2dfd1bc09bcd" />




---

## 👤 Usuario registrado

Los usuarios autenticados pueden:

* Iniciar sesión.
* Mantener su sesión activa.
* Acceder a funcionalidades asociadas a su cuenta.

**Vista del usuario registrado:**

<img width="1121" height="910" alt="loqueveelusuariocomun" src="https://github.com/user-attachments/assets/4b77dda4-e622-40bf-8c60-8df0509eb2ab" />


---

## 🛠️ Administrador

Los usuarios con rol administrador tienen acceso a herramientas de gestión.

Funciones:

* Administración de productos.
* Administración de cupones.
* Control del contenido de la tienda.

**Vista del administrador:**

<img width="1119" height="922" alt="admin imagen" src="https://github.com/user-attachments/assets/ff6711ff-cc53-4960-805b-53e226f52f3b" />


---

# ⚙️ Panel administrativo

## 📦 Gestión de productos

CRUD completo de productos:

### Crear

Permite agregar nuevos productos.

### Leer

Visualización de productos almacenados.

### Actualizar

Edición de información existente.

### Eliminar

Eliminación de productos.

Los datos se almacenan utilizando Firebase Firestore.

---

## 🎟️ Gestión de cupones

CRUD completo de cupones de descuento.

Funciones:

* Crear cupones.
* Visualizar cupones existentes.
* Editar información.
* Eliminar cupones.

Permite administrar promociones dentro de la tienda.

---

# 🧭 Rutas principales

| Ruta                | Descripción           |
| ------------------- | --------------------- |
| `/`                 | Página principal      |
| `/productos`        | Catálogo de productos |
| `/producto/:id`     | Detalle del producto  |
| `/carrito`          | Carrito de compras    |
| `/login`            | Inicio de sesión      |
| `/registro`         | Registro de usuarios  |
| `/GestionProductos` | Gestión de productos  |
| `/GestionCupones`   | Gestión de cupones    |

---

# 📂 Estructura del proyecto

```
src
│
├── Componentes
│   ├── Navbar
│   ├── Footer
│   ├── Layout
│   ├── Item
│   ├── ProductoDetalle
│   ├── Carrito
│   ├── Login
│   ├── Registro
│   ├── GestionProductos
│   └── GestionCupones
│
├── Context
│   ├── AuthContext.jsx
│   └── CartContext.jsx
│
├── firebase
│   └── config.js
│
├── App.jsx
└── main.jsx
```

---

# 📦 Instalación local

Clonar repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Instalar dependencias:

```bash
npm install
```

Ejecutar aplicación:

```bash
npm run dev
```

---

# ✅ Requerimientos cumplidos

✅ Layout con Header, Navbar y Footer
✅ Navegación con React Router DOM
✅ Catálogo dinámico de productos
✅ Componentes reutilizables
✅ Detalle de producto dinámico
✅ Carrito con Context API
✅ Autenticación con Firebase
✅ Roles de usuario
✅ CRUD de productos
✅ CRUD de cupones
✅ Deploy online

---

# 👨‍💻 Autor

**Tomás Mendoza**

Proyecto desarrollado como práctica de Frontend utilizando React y Firebase.
