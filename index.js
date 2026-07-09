const prompt = require('prompt-sync')();

let C = prompt("digite a temperatura: ");
let F = C * 1.8 + 32
console.log(C+" graus Celsius equivalem a "+F+" graus Fahrenheit")
