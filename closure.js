/*
CLOSURE: funcion que tiene acceso a variables de un amito externo,
incluso despues de qeu esa funcion haya retornado.

AMBITO LEXICO: Cada vez que se declara una funcion, 
crea su propio ambito lexico, y puede acceder a las variables
dentro de ese ambito y a las variables de los ambitos superiores.
*/

function outerFunction () {
    let outerVariable = 'I am outside!'

    function innerFunction () {
        console.log(outerVariable)
    }	
    return innerFunction
}

const closureExample = outerFunction()
closureExample()

function createCounter () {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

function outer () {
    let message = 'Hi!'
 
    function inner (name) {
        console.log(message + name)
    }
    return inner
}

const closureA= outer()
const closureB= outer()

closureA('Alice')
closureA('Bob')
