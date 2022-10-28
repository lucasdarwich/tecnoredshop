# E-commerce Tecnored Shop

![](./src/images/logobrandnobg.png)

Proyecto Final de React.JS

Tienda de E-commerce en donde se podran adquirir productos necesarios para despliegue y/o mantenimiento de redes de Fibra Óptica.

## Librerías utilizadas

- [Firebase](https://firebase.google.com/)

  Se utiliza para alojar la base de datos de los productos del proyecto en Firesotre Databse. También se utiliza para darle dinamismo al menu de navegación/categorias.

- [react-bootstrap](https://react-bootstrap.github.io)

  Se utiliza la libreria de Bootstrap para darle estilos al proyecto.

- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)

  Utilizada para desarrollar la navegabilidad básica en la aplicación.

- [react-toastify](https://github.com/fkhadra/react-toastify)

  Se utiliza para notificar al usuario la cantidad de productos que agrega al carrito.

- [react-spinners](https://www.davidhu.io/react-spinners/)

  Utilizada para determinar el estado de carga o "loading" de los componentes, lo que brinda una mejor experiencia al usuario mientras navega a traves de las categorias y/o los detalles de los productos.

- [react-icons](https://react-icons.github.io/react-icons/)

  Utilizada para agregar iconos a nuestra aplicación

## Funcionalidades del proyecto

- El usuario puede:
  - Navegar por todos los productos de la tienda.
  - Ver los detalles de cada producto.
  - Ingresar en todo momento al Carrito.
  - Agregar items al Carrito, en donde nunca podra agregar cantidades superiores al stock disponible de cada item.
  - Eliminar un item espécifico del Carrito.
  - Eliminar todos los items agregados al Carrito.
  - Ver la descripción, precio unitario, cantidades y precio total de los productos agregados al carrito.
  - Realizar la compra a traves de un formulario, el cual le solicita al usuario, entre otras cosas, ingresar 2 veces el correo electronico. Los correos deben coincidir, caso contrario, no se podra proseguir con la compra.
  - Finalizada la compra, el usuario obtengra su Núnero de Orden.

### Pasos para correr el proyecto en local

1. Clonar el repositorio

```
git clone https://github.com/lucasdarwich/tecnoredshop.git
```

2. Abrirlo en [VSC](https://code.visualstudio.com) (o en otro editor de código) e instalar las dependencias

```
npm install
```

3. Correr el proyecto en local

```
npm start
```

### Variables de Entorno

Como pueden afectar al comportamiento en la ejecución de la apliciación, las mimsas no se encuentran disponibles.

### Live Demo

[Visualizar Demo de la App](https://tecnoredshop.vercel.app)
