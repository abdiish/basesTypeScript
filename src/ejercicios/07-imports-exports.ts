import { Producto, calculaISV } from './06-desestructuracion-funcion';


console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// Importaciones y exportaciones


const carritoCompras: Producto[] = [
    {
        descripcion:'Telefono 1',
        precio: 100
    },
    {
        descripcion: 'Telefono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total:', total);
console.log('ISV:', isv);

