const nomeNoInput = document.getElementById('nomeNoInput');
const buttonCurtir = document.getElementById('buttonCurtir');
const paragrafoComCurtidas = document.getElementById('paragrafoCurtidas');
const botaoLimpar = document.getElementById('limpar');

const nomesQueCurtiram = JSON.parse(localStorage.getItem('curtidas')) || [];

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
    localStorage.setItem('curtidas', JSON.stringify(nomesQueCurtiram));
    atualizarCurtidas();

    for (let nome = 0; nome < nomesQueCurtiram.length; nome++) {
      localStorage.setItem(`Nome ${parseInt(nome)}`, nomesQueCurtiram[nome]);
    }
  }
  nomeNoInput.value = '';
});

botaoLimpar.addEventListener('click', () => localStorage.clear())

botaoLimpar.addEventListener('click', () => {
  nomesQueCurtiram.length = 0;
  localStorage.removeItem('curtidas');
  atualizarCurtidas();
});

window.addEventListener('load', atualizarCurtidas);