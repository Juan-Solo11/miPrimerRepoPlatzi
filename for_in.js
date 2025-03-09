/*
Un objeto tiene propiedades y valores
for in ----> se utiliza en objetos enumerables

arrays o strings tienen simplemente elementos iterables

item

for (variable in objeto) {
    // Código a ejecutar
}
*/

const listaDeCompras = { 
    manzana: 5, 
    pera: 3,
    naranja: 2,
    uva: 1
}

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(listaDeCompras[fruta]);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}

for (fruta of listaDeCompras) {
    console.log(fruta);
}