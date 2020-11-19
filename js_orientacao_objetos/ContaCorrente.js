import { Cliente } from "./Cliente.js";

export class ContaCorrente {

  static numeroDeContas = 0;

  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
    this.saldo = 0;
    ContaCorrente.numeroDeContas++;
  }

/*   set cliente(novoValor) {
    if(novoValor instanceof Cliente) {
      this.cliente = novoValor;
    }
  }

  get cliente() {
    return this.cliente;
  }

  get saldo() {
    return this.saldo;
  } */

  sacar(valor) {
    if(this.saldo >= valor) {
      this.saldo -= valor;
      return valor;
    } else {
      console.log(`Não há saldo suficiente na conta para sacar.`);
    }
  }

  depositar(valor) {
    if(valor > 0) {
      this.saldo += valor;
    } else {
      console.log(`O valor a ser depositado precisa ser maior do que 0.`);
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}