//______________________________________
/*
  OBJECT
  Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
*/
//Criar um obejo assim
const carro1 = {
  marca: 'Ford',
  ano: 2018,
  andar(){
    console.log("Andou")
  }
}
//ou assim
const pessoa = new Object({
  nome: 'felipe',
  idade: 29
}); 

//MÉTODOS DE OBJECT
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
const carro = {
  rodas: 4,
  init(marca){
    this.marca = marca
    return this
  },
  acelerar(){
    return `${this.marca} acelerou as ${this.rodas} rodas`
  },
  buzinar(){
    return this.marca + ` buzinou`
  }
}
const honda = Object.create(carro)
console.log(honda.init('Honda').acelerar())


//______________________________________
/*
  OBJECT.ASSIGN()
  Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
*/
const funcaoAutomovel = {
  acelerar(){
    return 'Acelerou'
  },
  buzinar(){
    return 'Buzinou'
  }
}
const moto1 = {
  rodas: 2,
  capacete: true
}
const carro3 = {
  rodas: 4,
  mala: true
}

Object.assign(moto1, funcaoAutomovel)
Object.assign(carro3, funcaoAutomovel)



//______________________________________
/*
  OBJECT.DEFINEPROPERTIES()
  Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades..
*/
const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto.rodas = 3;
delete moto.capacete;
moto;
// {rodas: 2}
console.log(moto)



//______________________________________
/*
  GET E SET
  É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.
*/
const moto3 = {}
Object.defineProperties(moto3, {
  velocidade: {
    get(){
      return this._velocidade
    },
    set(valor) {
      this._velocidade = 'Velocidade' + valor
    }
  },
})
moto.velocidade = 200
console.log(moto.velocidade)



//______________________________________
/*
  OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
  Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
*/
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade


//______________________________________
/*
  OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
  Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
*/
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro4 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro4);
// ['marca', 'ano']
Object.values(carro4);
// ['Ford', 2018]
Object.entries(carro4);
// [['marca', 'Ford'], ['ano', 2018]]


//______________________________________
/*
  OBJECT.GETOWNPROPERTYNAMES(OBJ)
  Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
*/
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro5 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro5);
// ['marca', 'ano']


//______________________________________
/*
  OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
  Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
*/
const frutas = [
  'banana',
  'uva',
]
Object.getPrototypeOf(frutas)
Object.getPrototypeOf('')

const frutas1 = [
  'banana',
  'uva',
]
const frutas2 = [
  'banana',
  'uva',
]
const novaFruta = frutas1
console.log(Object.is(frutas1, frutas2))
//false
console.log(Object.is(frutas1, novaFruta))
//true


//______________________________________
/*
  OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
  Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.
*/
const imovel = {
  tipo: 'casa',
  comodos: 5
}
console.log(Object.freeze(imovel))
console.log(Object.seal(imovel)),
console.log(Object.isFrozen(carro)); // false
console.log(Object.isSealed(carro)); // false
console.log(Object.isExtensible(carro)); // true



//______________________________________
/*
  PROPRIEDADES E MÉTODOS DO PROTÓTIPO
  Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.
*/
const frutas3 = ['Banana', 'Uva'];
frutas.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String


//______________________________________
/*
  {}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
  Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
*/
const frutas4 = ['banana', 'uva']
console.log(frutas4.hasOwnProperty('map'))
console.log(Array.hasOwnProperty('map'))
console.log(Array.prototype.hasOwnProperty('map'))

console.log(Array.prototype.propertyIsEnumerable('map')); // false
console.log(window.propertyIsEnumerable('innerHeight')); // true


//______________________________________
/*
  {}.TOSTRING()
  Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
*/
console.log(Array.prototype.isPrototypeOf(frutas))


//______________________________________
/*
  {}.HASOWNPROPERTY('PROP') E {}.PROPERTYISENUMERABLE('PROP')
  Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
*/
const frutas5 = ['banana', 'uva']
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

const frase1 = 'Uma String';
frase1.toString(); // 'Uma String'
typeof frase1; // string
Object.prototype.toString.call(frase1); // [object String]

const li2 = document.querySelectorAll('li');
typeof li2; // object
Object.prototype.toString.call(li2); // [object NodeList]