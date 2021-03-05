import * as Interfaz from './interfaz.js'
import { mostrarCanciones, spinner } from './funciones.js'
//CUANDO SOLO SE EXPORTA UNA COSA SE DEBE DE PONER EL DEFAULT
export default class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultaAPI() {
        console.log('desde consultar api');
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        spinner()
        console.time();
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                Interfaz.divResultado.textContent = '';
                Interfaz.headingResultado.textContent = '';
                if (respuesta.lyrics) {
                    console.log('entre');
                    const { lyrics } = respuesta
                    mostrarCanciones(lyrics, this.artista, this.cancion);
                    console.timeEnd()
                }

            })

    }
}