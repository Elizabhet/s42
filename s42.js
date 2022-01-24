console.log("metodo map()")
//dado el arreglo numbers, crear un nuevo arreglo square basado en el arreglo numbres pero al cuadrado, utilizando {
    
var numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]//arreglo con los elemntos
var square = numbers.map(x => x*x);//utilizacion de map(), para transfromar cada uno de los elementos al cuadrado

console.log(square)//lo utilizamos para mostrar el arreglo por consola

console.log("metodo reduce()")
//dado el arreglo array crear un nuevo arreglo "reduce" basado en el arreglo original, que permita sumar todos lo elementos del arreglo.
var array = [1, 2, 3, 4, 5];//arreglo con los elementos originales
var reducer = array.reduce(function(a, b){return a + b}); //utilizacion de reduce para transformar el arreglo a un valor entero que represente
console.log(reducer)

console.log("metodo sort()")

console.log("ordenamiento simple")
var array2 = [40, 1, 5, 200];
array2.sort();
console.log(array2)

console.log("ordenamiento complejo")
array2.sort(function(a,b){return a - b })
console.log(array2);

console.log("metodo reverse()");
const array3 = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
console.log("arreglo original",array3);
const reversed = array3.reverse();
console.log("arreglo invertido", reversed);//['cinco]

console.log("metodo split");
var miCadena = "hola mundo, como estan hoy?";
var division = miCadena.split("", 3); //dividimos la cadena utilizando los espacios y solo mostramos 3 caracteres
console.log(division); //"hola", "mundo", "como"

console.log("metodo join");
//uniendo un arreglo cuatro veces en diferentes formas
//el siguiente ejemplo cre un arreglo de cuatro elemmnetos para luegp unir el arreglo cuatro veces

var array4 = ['agua', 'aire', 'tierra', 'fuego'];
var join1 = array4.join(); //'agua', aire, tierra, fuego
console.log(join1)
var join2 = array4.join(','); //agua, aire, tierra, fuego
console.log(join2)
var join3 = array4.join(' + '); //agua + aire + tierra + fuego
console.log(join3)
var join4 = array4.join(' '); //aguaairefuego
console.log(join4)