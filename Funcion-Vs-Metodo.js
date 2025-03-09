// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos = Callback
/*
function a () {}
function b (a) {}
b(a);

// 2. Retornar funciones como resultado de otra funcion = Closure

function a () {
    function b () {}
    return b;
}

// 3. Asignar funciones a variables = Expresion de funcion

const a = function () {}

// Tener propiedades y metodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones 

function a () {
    function b () {
        function c () {  

        }
        c()
    }
    b()
}
a()
*/
// Almacenar funciones en objetos = Metodos

const rocket = {
    name: 'Falcon 1',
    launchMessage: function () {
        console.log(`Lanzamiento de ${this.name}`)
    }
}

rocket.launchMessage()