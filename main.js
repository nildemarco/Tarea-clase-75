
// HTTP --> protocolo
// --> GET buscar informacion
// --> POST crear informacion
// --> PUT actualiza informacion
// --> DELETE borra informacion

// los metodos reciben PARAMETROS entre parentesis, si es mas de uno, separados por coma

// fetch recibe UN parametro obligatorio: la direccion web
// parametro opcional: UN OBJETO

// fetch(`https://meli-fnsefibufx.now.sh/user`, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(this.state.data)
// })
//   .then(data => data.json()
//   ).then(result => {
//    console.log(data)
//   });
fetch('https://meli-nnaykhkakj.now.sh/user/list')
    .then(data => data.json())
    .then(result => {
        console.log(result)
        const filaDeUsuarios = document.getElementById("usuarios")

        let acc = "";

        result.users.forEach(usuario => {
            let nombre = usuario.name
            let apellido = usuario.lastname
            let telefono = usuario.phone
            let mail = usuario.email

            acc += `<tr>
       <td>${nombre}</td>
       <td>${apellido}</td>
       <td>${telefono}</td>
       <td>${mail}</td>
       <td class="list__body--actions">
         <i class="fa fa-edit"></i>
         <i class="fa fa-trash"></i>
       </td>
       </tr>`
        });

        filaDeUsuarios.innerHTML = `<tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Email</th>
        <th>Acciones</th>
        </tr>` + acc;

    })