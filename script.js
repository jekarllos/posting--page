
const formulario = document.querySelector('#formulario-post');
const campoTitulo = document.querySelector('#titulo');
const campoConteudo = document.querySelector('#conteudo');
const containerPosts = document.querySelector('#container-posts');

formulario.addEventListener('submit', function(evento) {    
    evento.preventDefault();

    const dadosPost = {
        title: campoTitulo.value,
        body: campoConteudo.value,
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(dadosPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    .then(resposta => resposta.json())
    .then(postCriado => {
        console.log('Sucesso na API', postCriado);
        criarPostNaTela(postCriado);
        formulario.reset();
    })
    .catch(erro => console.error('Erro ao postar', erro));
});

function criarPostNaTela(post) {
    const artigo = document.createElement('div');

    artigo.classList.add('post-card');

    artigo.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `

    containerPosts.prepend(artigo);
}

function carregarPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(resposta => resposta.json())
        .then(posts => {
            posts.forEach(post => {
                criarPostNaTela(post);
            });
        })
        .catch(erro => console.error('Erro ao carregar posts', erro));
}

carregarPosts();