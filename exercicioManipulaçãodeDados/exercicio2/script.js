const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
const descricaoDoInput = document.getElementById('descricaoDoInput');
const buttonAdicionar = document.getElementById('buttonAdicionar');
const listaDeTarefas = document.getElementById('listaDeTarefas');

function armazenarTarefasNoLocalStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function renderizarTarefas() {
    listaDeTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;
        checkbox.addEventListener('change', () => alterarStatus(index));

        const span = document.createElement('span');
        span.textContent = tarefa.descricao;
        if (tarefa.status) span.classList.add('concluida');

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.addEventListener('click', () => excluirTarefa(index));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(botaoExcluir);
        listaDeTarefas.appendChild(li);
    });
}

function adicionarTarefa() {
    const descricao = descricaoDoInput.value.trim();
    if (descricao) {
        tarefas.push({ descricao, status: false });
        descricaoDoInput.value = '';
        armazenarTarefasNoLocalStorage();
        renderizarTarefas();
    }
}

function alterarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    armazenarTarefasNoLocalStorage();
    renderizarTarefas();
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    armazenarTarefasNoLocalStorage();
    renderizarTarefas();
}

buttonAdicionar.addEventListener('click', adicionarTarefa);
window.addEventListener('load', renderizarTarefas);