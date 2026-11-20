import * as http from '../ejemplos-fetch/http.mjs';

const URL_CONTACTOS = 'http://localhost:3000/contactos';
const DIV_CONTACTOS = document.getElementById('contactos');

windows.addEventListener('load', () => {
    http.get(URL_CONTACTOS)
    .then(response => response.json())
    .then(objeto => {
        let lista_contactos = "";
        objeto.forEach(contacto => {
            lista_contactos += `<li>${contacto.nombre}</li>`;
        });
    )

const listaContactos = document.getElementById('lista-contactos');
const mensaje = document.getElementById('mensaje');



cargarContactos();

function cargarContactos() {
    const url = 'http://localhost:3000/contactos';

    http.get(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }

            return response.json();
        })
        .then(contactos => {
            if (contactos.length === 0) {
                mensaje.textContent = 'Todavía no hay contactos.';
            }

            for (const contacto of contactos) {
                const elemento = document.createElement('li');
                elemento.textContent = contacto.nombre;
                listaContactos.appendChild(elemento);
            }
        })
        .catch(error => {
            mensaje.textContent = 'No se pudieron cargar los contactos.';
            console.error('Error:', error);
        });
}
