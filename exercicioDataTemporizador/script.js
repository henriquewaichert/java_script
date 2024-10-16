function calcularTempo(dataFutura){
  const agora = new Date().getTime()
  const diferencaDatas = dataFutura - agora;

  const segundosDeUmMinuto = 60 * 1000;
  const segundosDeUmaHora = 60 * segundosDeUmMinuto;
  const segundosDoDia = 24 * segundosDeUmaHora;

  const dias = Math.floor(diferencaDatas / segundosDoDia);
  const horas = Math.floor(diferencaDatas % segundosDoDia / segundosDeUmaHora);
  const minutos = Math.floor((diferencaDatas % segundosDeUmaHora) / segundosDeUmMinuto);
  const segundos = Math.floor((diferencaDatas % segundosDeUmMinuto) / 1000);

  return {
    dias,
    horas,
    minutos,
    segundos
  }
}
// console.log(calcularTempo(dataFutura))

function atualziarTemporizador(){
  const dataFutura = new Date('2024-12-31T23:59:59').getTime()
  const tempoRestante = calcularTempo(dataFutura)

  document.getElementById('dias').innerText = `${tempoRestante.dias} Dias`;
  document.getElementById('horas').innerText = `${tempoRestante.horas} Horas`;
  document.getElementById('minutos').innerText = `${tempoRestante.minutos} Minutos`;
  document.getElementById('segundos').innerText = `${tempoRestante.segundos} Segundos`;

}

const intervalo = setInterval(atualziarTemporizador,1000);
// atualziarTemporizador();