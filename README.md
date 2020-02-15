# Trabajando con Apis

### Introducción
* Las cases pasadas aprendimos a utilizar el método fetch() para comunicarnos con una API. 
* Cuando usamos fetch() transmitimos información a través del protocolo HTTP. Pueden leer mas [aqui](https://github.com/Ada-IT/bootcamp-frontend/tree/master/00_internet-http)
* Vimos fetch() para comunicarnos con APIs desde nuestra web. El método fetch recibe como parámetro obligatorio la ruta de una API. Si no agregamos ningún otro parámetro, fetch utiliza por defecto el método GET para leer la información de la ruta especificada. Luego de utilizar el método json() para obtener la data transmitida, podemos utilizarla en nuestra web o simplemente mostrarla en la consola. 

**Ejemplo:**
```js
fetch('https://meli-nnaykhkakj.now.sh/user/list')
  .then(data => data.json())
  .then(result => console.log(result));
```

* En este ejemplo vemos que al utilizar el método GET en la ruta especificada, obtenemos una lista de usuarios que por ahora tiene un solo elemento. 
* Hasta ahora practicamos leer la información de una API y desplegarla en una web. 
* Hoy utilizaremos los métodos POST, PUT y DELETE para crear, actualizar y borrar datos en una API desde nuestra web. 
* Recuerden que cada API tiene distintas reglas para obtener información. Algunas nos dejan leer sus datos de manera abierta, otras requieren una validación como una Api Key. Algunas nos dejan actualizar su información mediante métodos como POST y PUT, otras no. La mayoría tiene reglas que determinan cómo debemos enviar la información: qué formato debe tener la info que enviamos y qué debemos poner en los headers. El mejor lugar para aprender a comunicarse con una API en particular es su propia documentación.   

### Métodos POST, PUT y DELETE

* El método POST se utiliza para crear información nueva en la base de datos. 
* El método PUT permite editar información ya existente. 
* El método DELETE permite borrar información. 

* Cada API determina la ruta o las rutas que debemos seguir para utilizar cada método. 

La API con la que trabajaremos hoy está alojada en [https://meli-nnaykhkakj.now.sh](https://meli-nnaykhkakj.now.sh) y tiene cuatro rutas:

* /user/list permite usar el método GET y devuelve todos los usuarios guardados. 
* /user permite el método POST. Recibe en el body un objeto representando un usuario, y en caso de que este cumpla los requerimientos, devuelve el mismo objeto. 
* /user/edit/${id} permite el método PUT. En la ruta debemos especificar el índice del elemento que queremos editar, y en el body debemos enviar el objeto que lo reemplazará. Devuelve la lista de usuarios actualizada, si el objeto enviado cumple los requerimientos. 
* /user/remove/${id} permite el método DELETE. En la ruta debemos especificar el índice del elemento que queremos borrar. Devuelve la lista de usuarios actualizada. No hace falta enviar un body. 
* En todos los casos, salvo el GET, debemos especificar los headers { 'Content-Type': 'application/json' }


**Ejemplo de POST**
```js
const usuarioNuevo = {
  name: 'Usuario',
  lastname: 'Nuevo',
  phone: '12345678',
  email: 'usuarionuevo@gmail.com',
};

fetch(`https://meli-nnaykhkakj.now.sh/user`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(usuarioNuevo),
})
  .then(data => data.json())
  .then(result => console.log(result));
```

Antes de guardar los datos, la API chequea que sean correctos:
* El telefono debe ser un valor numérico
* El email debe tener un formato válido
* Nombre y apellido no pueden superar los 30 caracteres cada uno. 
* Prueben enviando información que no cumpla estos requerimientos. 


## Ejercicios

### Ejercicio 1

* Mediante el metodo GET, obtener la lista de usuarios y mostrarla en consola. 
* Usando el metodo POST, agregar sus datos a la lista de usuarios. 
* Usando el metodo PUT, modificar alguno de los datos en su propio usuario. 
* Usando el metodo POST, agregar un usuario con un nombre falso. 
* Usando el metodo DELETE, borrar ese usuario. 
* Cuidado! Sus compañeras van a estar editando los datos al mismo tiempo que ustedes. Chequeen bien antes de borrar o editar. 


### Ejercicio 2

* En el HTML y CSS tienen una tabla ya maquetada. 
* Deben crearla con JS, luego de hacer un fetch para obtener la lista de usuarios, y completarla con los datos que reciban. 
