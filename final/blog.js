// Exemplo de JavaScript (pode ser usado para funcionalidades futuras)

// Capturando um elemento e modificando seu conteúdo
const articleTitle = document.querySelector('.blog-post h2');
articleTitle.textContent = 'Novo Título do Artigo';

// Capturando a data e atualizando-a
const dateElement = document.querySelector('.date');
const currentDate = new Date();
dateElement.textContent = `Publicado em ${currentDate.toLocaleDateString()}`;
