
console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}

// Clases básicas

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ) {
        //this.alterEgo = alterEgo;
        super(nombreReal, 'New york, USA');
}

// extender una clase


    // imprimirNombre() {
    //     return this.alterEgo + ' ' + this.nombreReal; 
    // }
}

// Una interface no existe en JS
// interface Personaje2 {
//     alterEgo?: string;
//     edad?: number;
//     nombreReal?: number;
//     imprimirNombre: () => string;
// }

const ironman = new Heroe('Ironman', 45, 'Tony');

//const spiderman: Personaje2 = {}

console.log(ironman);


