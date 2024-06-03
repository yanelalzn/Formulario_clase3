document.getElementById('miFormulario').addEventListener('submit',validarFormulario);

function validarFormulario(e) {
e.preventDefault();

const usuario = document.getElementById('usuario').value;
const nombre = document.getElementById('nombre').value;
const contrasena = document.getElementById('contrasena').value;
const repetirContrasena = document.getElementById('repetirContrasena').value;
let esValido = true;

if(usuario === ''){
document.getElementById('usuarioError').textContent = 'el nombre de usuario es obligatorio';
esValido = false;
}

if(nombre === ''){
document.getElementById('nombreError').textContent = 'el nombre es obligatorio'
esValido = false;
}


if(contrasena === ''){
document.getElementById('contrasenaError').textContent = 'La contraseña es obligatorio'
esValido = false;
}

if(repetirContrasena === ''){
document.getElementById('repetirContrasenaError').textContent = 'La contraseña es obligatorio'
esValido = false;
}

if (esValido == true) {
alert('formulario valido')
}
}





