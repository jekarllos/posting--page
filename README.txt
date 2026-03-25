Projeto de Certificação: Blog Jornada Dev
Este blog foi desenvolvido como o projeto do curso Jornada Dev no SENAI. O objetivo principal foi colocar em prática a manipulação do DOM e o consumo de APIs REST, utilizando exclusivamente tecnologias nativas para garantir um código leve e bem estruturado.

O que o projeto faz
A aplicação simula o funcionamento de um mural de postagens. Ao abrir a página, o script busca dados reais de uma API externa para popular a lista. Além de ler o que já existe, você consegue simular o envio de novos posts através de um formulário que valida os campos antes do disparo.

Destaques técnicos
Interface Dinâmica: Os novos posts são inseridos no topo da lista sem precisar dar refresh na página, usando o método prepend do JavaScript.

Consumo de API: Utilizei a Fetch API para realizar as requisições assíncronas (GET e POST) ao serviço JSONPlaceholder.

CSS Modular: Estilização focada em legibilidade e componentes reutilizáveis, como o sistema de cards para as postagens.

Tecnologias utilizadas
Seguindo os requisitos da certificação, o projeto não utiliza frameworks, apenas:

HTML5: Base semântica para a estrutura.

CSS3: Layout e identidade visual profissional.

Vanilla JavaScript: Lógica de programação e integração com o servidor.

JSONPlaceholder: API de testes para o backend.

Como rodar na sua máquina
Baixe os arquivos ou clone o repositório.

Abra o index.html diretamente no navegador (recomendo usar o Live Server no VS Code para uma melhor experiência).

É necessário internet para carregar os posts que vêm da API.

Notas de desenvolvimento
Este projeto prioriza a clareza do código. Evitei o uso de bibliotecas externas para demonstrar o domínio sobre os fundamentos da web, mantendo uma estrutura de arquivos organizada e comentários pontuais onde a lógica é mais complexa.