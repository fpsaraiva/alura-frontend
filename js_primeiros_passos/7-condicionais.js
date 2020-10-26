console.log(`Trabalhando com condicionais`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rio = `Rio de Janeiro`;

const listaDeDestinos = new Array(salvador, saoPaulo, rio);

const idadeComprador = 16;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);

if(idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(1, 1);
} else {
  console.log("Não é maior de idade. Não é possível vender!");
}

console.log("Embarque: \n")
if(idadeComprador >= 18 && temPassagemComprada == true) {
  console.log("Boa viagem!");
} else {
  console.log("Você não pode embarcar!");
}

console.log(listaDeDestinos);

/* console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18); */