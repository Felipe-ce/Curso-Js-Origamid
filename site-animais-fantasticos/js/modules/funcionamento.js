export default function initFuncionamento() {

  

}

const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(",").map(Number)
const horarioSemana = funcionamento.dataset.semana.split(",").map(Number)

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

console.log(horarioAgora)

if (diaAgora >= 1 && diaAgora <= 5 && horarioAgora >= 8 && horarioAgora <= 18) {
  console.log('Aberto')
} else {
  
}