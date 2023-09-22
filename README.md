
<h1> Final React Regalini</h1>

<h2> 	GROSO </h2>

<h3> Regalos grosos para gente grosa</h3>

<p> :argentina: Sitio que ofrece productos bien argentinos 	:argentina: con un packaging groso, enfocado principalmente a regalos corporativos y para el exterior. </p>

---------

## DEMO

https://github.com/PriscilaRegalini/FinalReactRegalini/assets/130780452/f9f33e69-e0f6-49b3-b237-02dc72147e57

## Deployed in 

[shiny-duckanoo-26bed0.netlify.app](https://shiny-duckanoo-26bed0.netlify.app/)

---------

## :woman_technologist: Herramientas y lenguajes que se utilizaron <br>

![https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white](https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black)
 
![(https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
 
![(https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
 
![(https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

![(https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

![(https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![(https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![(https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

![(https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)


![(https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

![https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

![https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

------------

## Cómo levantar el proyecto
Para levantar el proyecto se debe  ejecutar los siguientes comandos:

```
cd PreEntrega2Regalini
npm install
npm run dev

```
##  :warning:  Firebase configuration	 
Para el correcto funcionamiento, es necesario tener seteadas las variables de entorno en el archivo `.env`. Las variables son:

- `VITE_API_KEY`: la API key de Firebase.
- `VITE_AUTH_DOMAIN`: el dominio de autenticación de Firebase.
- `VITE_PROJECT_ID`: el ID del proyecto de Firebase.
- `VITE_STORAGE_BUCKET`: el bucket de almacenamiento de Firebase.
- `VITE_MESSAGING_SENDER_ID`: el ID del sender de Firebase.
- `VITE_APP_ID`: el ID de la aplicación de Firebase.


## Componentes

### Navbar

El navbar es un componente que muestra los links a las distintas secciones del sitio. Además muestra el CartWidget para poder ver cuántos productos hay en el carrito.

### Card

Son componentes que contienen la estructura de cómo se van a visualizar los productos.

### CartWidget

El CartWidget es el componente que contiene el carrito de compars. Muestra los productos que estan en el carrito y luego al hacer click te lleva al resumen de compras.

### Checkout

Checkout es el componente que se encarga de generar la orden de compras. Muestra el resumen de la compra junto con un formulario con campos a completar por el usuario (nombre, teléfono, email) y botón de "comprar". Al finalizar la compra y generar la orden, muestra el id de la orden realizada. 

### context

Context contiene: context (creación del contexto) y CartProvider, componente que contiene funciones que seran utilizadas dentro del contexto.

### Counter

Counter es un componente que utiliza el hook "useCounter" permite que se pueda agregar unidades al carrito de compras. También valida que haya stock para mostrar o no los botones correspondientes.

### Hooks

Es una carpeta que contiene hooks que son utilizados en el proyecto. 

### ItemDetail

ItemDetail es el componente que se encarga de mostrar el detalle del producto.

### ItemDetailContainer

ItemDetailContainer es el componente que contiene la lógica necesaria para poder mostrar el detalle del producto. 

### ItemList

ItemList es el componente que se encarga de mostrar el listado de productos y la presentación del sitio.

### ItemListContainer

ItemListContainer es el componente que contiene la lógica necesaria para poder mostrar el listado de productos. 

### ItemPresentation

ItemPresentation es el componente que se encarga de mostrar información de cómo nace el nombre del sitio y su slogan, para que los usuarios puedan conocer en profundidad las raices Argentinas del sitio y los productos que ofrece . 

### ItemListContainer

ItemListContainer es el componente que contiene la lógica necesaria para poder mostrar el listado de productos. 

### utilities

Utilities contiene varios archivos .js que son funciones que se usan dentro del contexto, especificamente para el cart y la orden de compras. 

### services

services se encarga de hacer las llamadas al backend. 

---------

<p> <strong>Esta es una entrega final para el curso de REACT JS de COERHOUSE con fines meramente educativos. </strong></p>
