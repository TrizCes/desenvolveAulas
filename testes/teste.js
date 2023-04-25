/*
function calculaProximaIdade(idade) {
  let soma = idade + 1;
  console.log(soma);
}

function calculaProximasIdades(idades) {
  let newArray = [];
  for (let i = 0; i < idades.length; i += 1) {
    let soma = idades[i] + 1;
    newArray.push(soma);
  }
  console.log(newArray);
}

function calculaIdadesDaqui5Anos(idades) {
  let newArray = [];
  for (let i = 0; i < idades.length; i += 1) {
    let soma = idades[i] + 5;
    newArray.push(soma);
  }
  console.log(newArray);
}

let idadeStefany = 21;
calculaProximaIdade(idadeStefany);

let idadesAmigos = [idadeStefany, 20, 23, 18, 7];

calculaProximasIdades(idadesAmigos);

calculaIdadesDaqui5Anos(idadesAmigos);


var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
  var respostaDeTudo = 3.14
  let idade = 42
  const pi = 29
  console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

a = [];
b = 20;
c = true;
d = '';

if (b === 20 && c != false && d == 0) {
  console.log('Verdade');
} else {
  console.log('Falso');
}

if (d) {
  console.log('Verdade')
} else {
  console.log('Falso')
}



const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
*/

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈'];

animaisDoAquario.splice(1, 0, '🐠');
animaisDoAquario.splice(3, 2, '🐟');

console.log(animaisDoAquario);
