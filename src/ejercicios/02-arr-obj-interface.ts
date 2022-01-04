

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// Arreglo de tipo string
let habilidades: string[] = ['Bash', 'Counter', 'Healing'];
console.log(habilidades);

let cantidades: number[] = [123, 345, 567, 60];
console.log(cantidades);

// Interface
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // parametro opcional
}
// Objeto
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);

