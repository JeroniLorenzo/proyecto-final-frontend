# E-Commerce palas de padel.

Con la API creada en el anterior proyecto, he hecho el front-end de una aplicación de ventas de palas de pádel.

## Tecnologias usadas.
![Captura de pantalla 2023-03-19 165519](https://user-images.githubusercontent.com/112971504/226188956-93d12551-ca9c-47bd-a89a-bce3ae41bdae.png)
![Captura de pantalla 2023-03-19 165742](https://user-images.githubusercontent.com/112971504/226188983-ed152cbb-8210-4033-8b5c-b86d844006a3.png)
![redux](https://user-images.githubusercontent.com/112971504/226189000-c4042b9c-15f6-4c81-a349-bd1ae201cbe6.png)
![css](https://user-images.githubusercontent.com/112971504/226189016-2b2f10a6-e66b-4a25-b582-fd91a90d2f0e.png)
![Captura de pantalla 2023-03-19 170054](https://user-images.githubusercontent.com/112971504/226189021-bbc850d9-5d23-4735-a2ef-aacf4aacb8f5.png)

## Vistas

- La vista home.
![home](https://user-images.githubusercontent.com/112971504/226189029-446e3249-7fcf-4e04-9f24-9525abace0a6.png)

Hay un header con acceso a registrarse, logearse y un botón para cuando estás en otra vista volver a la página home. También es donde nos saldrán todas las palas que haya en la base de datos.

- La vista de registro.
![registro](https://user-images.githubusercontent.com/112971504/226189034-00389d5b-ee4e-4d8a-ba36-dedf4a4f03f9.png)

En esta, hay un formulario donde se piden unos datos para hacer un resgistro de usuario. Hay control de errores, si los campos no se rellenan adecuadamente va a salir un mensaje en rojo indicando que tipo de error se está cometiendo.

- La vista del login.
![login](https://user-images.githubusercontent.com/112971504/226189041-9c7b4f2e-c2ab-40d1-b456-3a5562546702.png)

Aquí hay dos inputs para logearse, al igual que en el registro hay control de errores. Si no se escriben bien los campos no nos va a dejar logearnos.

- La vista del perfil de usuario.
![Captura de pantalla 2023-03-19 171136](https://user-images.githubusercontent.com/112971504/226189172-1fdb1491-7161-4003-8369-575de4036e71.png)

En esta vista vista se nos muestran los datos del usuario y sus respectivas compras realizadas en la app.

- La vista del detalle de la pala.
![Captura de pantalla 2023-03-19 170730](https://user-images.githubusercontent.com/112971504/226189182-56b5ad15-e340-4d93-b3e7-71b3ecf08dda.png)

Accedemos a esta vista al hacer click sobre una pala desde home. Aqui nos salen detalles de la pala y solo si estamos logeados nos aparecerá un botón con la opción de comprar dicha pala. Si compramos la pala y se ha realizado con éxito, nos saldrá un mensaje abajo del botón indicando que la compra ha sido un éxito.

- La vista del Administrador.
![Captura de pantalla 2023-03-19 170839](https://user-images.githubusercontent.com/112971504/226189212-14f8f640-2a39-41d3-85fe-e7f75e37c556.png)

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

## Futuras integraciones.

Al ser mi primer gran proyecto, tanto para hacer el back y el front hay cosas que me han quedado pendientes por crear. Voy a seguir trabajando en este proyecto añadiendo un carrito de compra, futuras mejoras estéticas, que no solo haya palas de pádel sino que también puedas comprar ropa deportiva, crear muchas palas y ropa en la base de datos para integrar paginación en la vista home. Usar las cartas de las raquetas y refactorizarlas para hacer cartas pero ésta vez de usuarios para que el admin pueda ver y buscar a todos los usuarios creados en la app... y un largo etc.


Jeroni Lorenzo Solano.
