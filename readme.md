# Reformar para usar otro framework (1)
## ADONIS
<br />

* #### Elegir uno de los dos frameworks vistos en la clase (Adonis o Nest) y trasladar el último proyecto entregable a esta nueva plataforma.
* #### Verificar el correcto funcionamiento del servidor a nivel de sus rutas, vistas, lógica de negocio y persistencia.

<br />
<hr />
<br />

El framework que elegi fue **Adonis**.

Cambie los datos de ingreso desde **.env** para que la app se inicie desde ```http://localhost:8080```.

La base de datos utilizada es **sqlite**.

Cree rutas y controladores para **Mensajes** y **Productos**.

Desde la app se pueden crear/eliminar/actualizar productos y usar el chat.

Agregue un validador para corregir cuando un campo requerido esta vacio.

<br />
<hr />
<br />

Para reiniciar la base y borrar todos los datos se debe ejecutar ```adonis migration:refresh```.