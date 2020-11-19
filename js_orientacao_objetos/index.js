class Cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }
}

class ContaCorrente {
  constructor(agencia, saldo) {
    this.agencia = agencia;
    this.saldo = saldo;
  }

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
}

const cliente1 = new Cliente("Ricardo", 11122233309);
console.log(cliente1);

const cliente2 = new Cliente("Alice", 88822233309);
console.log(cliente2);

const contaCorrenteDoRicardo = new ContaCorrente(1001, 0);
console.log(contaCorrenteDoRicardo);
contaCorrenteDoRicardo.depositar(100);
const valorSacado = contaCorrenteDoRicardo.sacar(50);
console.log(contaCorrenteDoRicardo);
console.log(valorSacado);