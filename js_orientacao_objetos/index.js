import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//criando objetos Cliente
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

//Cliente objetos ContaCorrente
const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 102);

//Executando métodos
conta1.depositar(500);
const valorSacado = conta1.sacar(50);
conta1.transferir(200, conta2);
console.log(conta1);
console.log(conta2);
console.log(valorSacado);
console.log(ContaCorrente.numeroDeContas);