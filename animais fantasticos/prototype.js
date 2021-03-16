function Pessoa(nome, idade) {
  this.nome = 'nome';
  this.idade = 0;
}

Pessoa.prototype.andar = function () {
  return `pessoa andou`
}

const felipe = new Pessoa('felipe', 29);

console.log(Pessoa.prototype)
console.log(felipe.prototype)