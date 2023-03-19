# E-Commerce palas de padel.

Con la API creada en el anterior proyecto, he hecho el front-end de una aplicación de ventas de palas de pádel.

## Tecnologias usadas.
Captura de pantalla_20230130_164805 JavaScript.
Captura de pantalla_20230130_165038 React.
Captura de pantalla_20230130_165152 CSS3.
## Vistas

- La vista home.

Hay un header con acceso a registrarse, logearse y un botón para cuando estás en otra vista volver a la página home. También es donde nos saldrán todas las palas que haya en la base de datos.

- La vista de registro.

En esta, hay un formulario donde se piden unos datos para hacer un resgistro de usuario. Hay control de errores, si los campos no se rellenan adecuadamente va a salir un mensaje en rojo indicando que tipo de error se está cometiendo.

- La vista del login.

Aquí hay dos inputs para logearse, al igual que en el registro hay control de errores. Si no se escriben bien los campos no nos va a dejar logearnos.

- La vista del perfil de usuario.

En esta vista vista se nos muestran los datos del usuario y sus respectivas compras realizadas en la app.

- La vista del detalle de la serie.

Accedemos a esta vista al hacer click sobre una pala desde home. Aqui nos salen detalles de la pala y solo si estamos logeados nos aparecerá un botón con la opción de comprar dicha pala. Si compramos la pala y se ha realizado con éxito, nos saldrá un mensaje abajo del botón indicando que la compra ha sido un éxito.

- La vista del Administrador.

A esta vista solo se puede acceder siendo el administrador. Si al hacer el login, el token enviado recibe los datos correctos y el rol es administrador, al lado del nombre del usuario aparecerá la palabra 'Admin' que ésta es un link a su vista. En ella el administrador puede ver TODAS las compras realizadas en la app.

## Common

En esta carpeta están diferentes elementos que vamos a utilizar en distintos sitios de la app.
La RacketCard, por ejemplo, és un diseño de carta para ver las palas en la vista home.

El Header va a estar presente en todas las vistas de la app y nos va a servir para navegar entre vistas.

El InputText és un input dónde vamos a escribir nuestros datos. En el header, la barra de búsqueda és un InpuText. Y en loggin y registro todos los campos a rellenar también lo son.

## Services
- ApiCalls
Desde Apicalls hacemos las llamadas que necesitemos a nuestra Api. Ya sea para registrarse, logearse, hacer una compra, etc.

- Útiles
Aqui tenemos funciones y constantes que nos van a ser útiles en la aplicación. Como por ejemplo los controles de errores.

Jeroni Lorenzo Solano.