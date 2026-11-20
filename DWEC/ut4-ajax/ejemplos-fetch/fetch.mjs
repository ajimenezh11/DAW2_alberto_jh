//Sin paramertros a una API externa 
//fetch('http://localhost:3000/contactos')
    //.then(res => {
        //return res.json();
    //})
    //.then(res => {
      //  console.log(res);
    //})
    //.catch(err => {
      //  console.error(err);
    //});


//let url = 'http://localhost:3000/contactos';
  //  let data = {username: 'example'};

    //fetch(url, {
      //  method: 'POST', // or 'PUT'
       // body: JSON.stringify(data), // data can be `string` or {object}!
        //headers:{
            //'Content-Type': 'application/json'
        //}
    //})
   // .then(res => res.json())
    //.catch(error => console.error('Error:', error))
 //   .then(response => console.log('Success:', response));


import * as http from './http.mjs';

const botonEnviar = document.getElementById('enviar');
const inputUrl = document.getElementById('url');
const inputMetodo = document.getElementById('metodo');
const Peticion = document.getElementById('peticion');
const Respuesta = document.getElementById('respuesta');

window.addEventListener('load', () => {
    botonEnviar.addEventListener('click', onEnviarClick);
});


function onEnviarClick(event) {
    const metodo = inputMetodo.value;

    switch (metodo) {
        case 'GET': get(); break
        case 'POST': post(); break
        case 'PUT': put(); break
        case 'DELETE': eliminar(); break
    }
}

function get() {
    console.log('Metodo GET invocado');
    const url = inputUrl.value;
    http.get(url)
    .then(response => response.text())
    .then(texto => Respuesta.value = texto)
    .catch(error => {
        Respuesta.value = error.message;
    });
}

function post() {
    http.post(inputUrl.value, Peticion.value)
    .then(response => response.text())
    .then(texto => Respuesta.value = texto)
    .catch(error => Respuesta.value = error.message);
}

function put() {
    http.put(inputUrl.value, Peticion.value)
    .then(response => response.text())
    .then(texto => Respuesta.value = texto)
    .catch(error => Respuesta.value = error.message);
}

function eliminar() {
    http.eliminar(inputUrl.value)
    .then(response => response.text())
    .then(texto => Respuesta.value = texto)
    .catch(error => Respuesta.value = error.message);
}