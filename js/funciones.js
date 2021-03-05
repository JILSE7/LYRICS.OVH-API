import * as Interfaz from './interfaz.js'
import API from './api.js'
//1.- buscar Cancion
const buscarCancion = (e) => {
    e.preventDefault();
    Interfaz.divResultado.textContent = '';
    Interfaz.headingResultado.textContent = '';

    //Obtener datos del formualrio
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (!artista || !cancion) {
        console.log('faltan campos');
        Interfaz.divMensajes.textContent = 'Error, todos los campos son obligatorios';
        Interfaz.divMensajes.classList.add('error');

        setTimeout(() => {
            Interfaz.divMensajes.textContent = ''
            Interfaz.divMensajes.classList.remove('error');
        }, 2500);
        return
    }

    //Consultar API
    const busqueda = new API(artista, cancion);
    busqueda.consultaAPI(artista, cancion);
    console.log(busqueda);
}

//2.-+ Mostrar Canciones
function mostrarCanciones(lyrics, artista, cancion) {
    Interfaz.divResultado.textContent = lyrics;
    Interfaz.headingResultado.textContent = `Letra de ${artista}-${cancion}`
}


//3.- spinner
function spinner() {
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');

    divSpinner.innerHTML = `
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    `

    Interfaz.divResultado.appendChild(divSpinner);

}



export {
    buscarCancion,
    mostrarCanciones,
    spinner
}