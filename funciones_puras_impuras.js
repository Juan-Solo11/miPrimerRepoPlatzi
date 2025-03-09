// Funciones puras

// Side effects
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Impriir mensajes en pantalla o en consola
// 5. Manipular el DOM
// 6. Obtener la hora actual

function sum (a, b) {
    return a + b
}

function sum (a, b) {
    console.log('A: ', a)
    return a + b
}

let total = 0

function sumWithSideEffect (a){
    total += a
    return total
}

// Funciones puras
function square (x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)