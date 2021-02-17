function maiorIdade(idade) {
  console.log(typeof idade)
  if (typeof idade !== 'number'){
    return `entrada invalido`;
  }else if(idade >= 60){
    return true;
  }else{
    return false;
  }
}
console.log(maiorIdade(60))

function faltaVisitar(pvisitados) {
  let totalPaises = 193;
  return `falta visitar ${totalPaises - pvisitados} Paises`
}
console.log(faltaVisitar(192))

let profissao = 'front end'

function dados() {
  let nome = 'Felipe'
  let idade = 29
  function outrosDados() {
    let endereco = 'Fortaleza'
    this.idade = 30
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}
console.log(dados())