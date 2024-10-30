const nomesQueCurtiram = [ ]; 
const nomeNoInput = document.getElementById('nomeNoInput');
const buttonCurtir = document.getElementById('buttonCurtir');
const paragrafoComCurtidas = document.getElementById('paragrafoCurtidas');

function atualizarCurtidas() {
  const total = nomesQueCurtiram.length;

  if (total === 0) {
    paragrafoComCurtidas.innerText = "Ninguém curtiu";
  } else if (total === 1) {
    paragrafoComCurtidas.innerText = `${nomesQueCurtiram[0]} curtiu`;
  } else if (total === 2) {
    paragrafoComCurtidas.innerText = `${nomesQueCurtiram[0]} e ${nomesQueCurtiram[1]} curtiram`;
  } else {
    paragrafoComCurtidas.innerText = `${nomesQueCurtiram[0]}, ${nomesQueCurtiram[1]} e mais ${total - 2} pessoas curtiram`;
  }
}

buttonCurtir.addEventListener('click', () => {
  const nome = nomeNoInput.value.trim(); 

  if (nome && !nomesQueCurtiram.includes(nome)) {
    nomesQueCurtiram.push(nome); 
    atualizarCurtidas(); 
  }

  nomeNoInput.value = ''; 
});