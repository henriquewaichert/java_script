let postsNovos = [];

async function postarMensagem() {
    const texto = document.getElementById('postarTexto').value.trim();
    if (!texto) return alert('Digite algo para postar!');

    const imagemGatos = await fetchimagemGatos();

    const newPost = {
        username: 'henriquewaichert',
        avatar: 'https://avatars.githubusercontent.com/u/153193699?v=4',
        text: texto,
        image: imagemGatos,
        likes: 0,
        date: new Date(),
    };

    postsNovos.unshift(newPost);
    renderFeed();
    document.getElementById('postarTexto').value = '';
}

async function fetchimagemGatos() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;
}

function renderFeed() {
    const feedTwitter = document.getElementById('feedTwitter');
    feedTwitter.innerHTML = '';

    postsNovos.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
          <div>
            <strong>${post.username}</strong>
            <img src="${post.avatar}" alt="Avatar" width="40" style="border-radius: 50%;" />
          </div>
          <p>${post.text}</p>
          <img src="${post.image}" alt="Imagem de Gato" />
          <div>
            <button class="like-button" onclick="likePost(${index})">Curtir (${post.likes})</button>
          </div>
        `;

        feedTwitter.appendChild(postElement);
    });
}

function likePost(index) {
    postsNovos[index].likes++;
    renderFeed();
}