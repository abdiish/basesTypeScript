

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// Objetos e interfaces

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion, // interface Direccion
    mostrarDireccion: () => string; // función
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ',  '+ this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
