async function buscarInput() {
    const input = document.getElementById('buscarInput').value.trim();
    const usuarioLista = document.getElementById('usuarioLista');
    const mensagemErro = document.getElementById('mensagemErro');
    usuarioLista.innerHTML = '';
    mensagemErro.textContent = '';

    if (!input) {
        mensagemErro.textContent = 'Digite um nome de usuário!';
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/search/users?q=${input}`);
        const data = await response.json();

        if (data.items.length === 0) {
            mensagemErro.textContent = 'Não foram encontrados usuários para esta pesquisa.';
            return;
        }

        data.items.forEach(usuario => {
            const li = document.createElement('li');
            li.textContent = `${usuario.login} - ${usuario.html_url}`;
            usuarioLista.appendChild(li);
        });
    } catch (error) {
        mensagemErro.textContent = 'Erro ao buscar dados. Tente novamente.';
    }
}