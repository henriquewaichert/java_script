const tarefas = [];
const descricaoDoInput = document.getElementById('descricaoDoInput');
const buttonAdicionar = document.getElementById('buttonAdicionar');
const listaDeTarefas = document.getElementById('listaDeTarefas');

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
        li.appendChild(checkbox);
        li.appendChild(span);
        listaDeTarefas.appendChild(li);
    });
}

function adicionarTarefa() {
    const descricao = descricaoDoInput.value.trim();
    if (descricao) {
        tarefas.push({ descricao, status: false });
        descricaoDoInput.value = '';
        renderizarTarefas();
    }
}

function alterarStatus(index) {
    tarefas[index].status = !tarefas[index].status;
    renderizarTarefas();
}

buttonAdicionar.addEventListener('click', adicionarTarefa);