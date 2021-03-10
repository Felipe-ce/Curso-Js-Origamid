function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade,
  this.andar = function() {
    console.log(this.nome + ' andou')
  }
}

const joao = new Pessoa('João', 25);
const felipe = new Pessoa('Felipe', 29);
const luana = new Pessoa('Luana', 24);

function Dom(element) {
  const elementList = document.querySelectorAll(element)
  this.element = elementList;

  this.addClass = function(classe) {
    this.element.forEach((item) =>{
      item.classList.add(classe)
    })
  }

  this.remodeClass = function(classe) {
    this.element.forEach((item) =>{
      item.classList.remove(classe)
    })
  }
}

const li = new Dom('li');

const imagens = new Dom('img');