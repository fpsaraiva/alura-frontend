console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rio = `Rio de Janeiro`;

console.log(`Destinos possíveis:`);
//console.log(salvador, saoPaulo, rio);

const listaDeDestinos = new Array(salvador, saoPaulo, rio);
listaDeDestinos.push(`Curitiba`);

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);