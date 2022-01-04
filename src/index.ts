
console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// Encadenamiento opcional

interface Pasajero {
    nombre: string;
    hijos?: string[]; // ? Propiedad opcional
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero):void {

    const cuantosHijos = pasajero.hijos?.length || 0;
    
    console.log(cuantosHijos);
    
}

imprimeHijos(pasajero1);