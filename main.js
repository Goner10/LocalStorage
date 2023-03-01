
//Guardar en Local Storage los datos de contacto rellenados del usuario

const inputName = document.getElementById("nombre")
const inputEmail = document.getElementById("email")
const inputMensaje = document.getElementById("text")
const btn = document.getElementById("btn")
console.log(btn);
let users = 0;
function onSubmit(e){
    users = users + 1;
    e.preventDefault()
    let dataUsers = {
        nombre : inputName.value,
        email : inputEmail.value,
        text : inputMensaje.value
    }
    localStorage.setItem(users, JSON.stringify(dataUsers))
}

    
//Muestra el usuario que has guardado en el DOM

let usuarioDom = document.createElement('div');{
document.body.appendChild(usuarioDom)
usuarioDom.innerHTML = `<p>${users.name}</p> <p>${users.email}</p> <p>${users.text}</p><hr>`
}


