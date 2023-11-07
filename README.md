## <img src="https://github.com/projeto-18/PI_MinhaSaude/blob/main/src/assets/img/Logo.png" width="30px"  title="Logo do MinhaSaúde"> MinhaSaúde
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"><br><br>
<img src="https://github.com/projeto-18/PI_MinhaSaude/blob/main/src/assets/img/Logo.png" width="200px" title="Logo do Student Location System"> <br>
# Aplicativo Web MinhaSaúde

# Documento de Desenvolvimento do Produto Mínimo Viável (MVP) - MinhaSaúde
## Introdução 
O objetivo deste documento é detalhar o desenvolvimento do Produto Mínimo Viável (MVP) para o aplicativo "MinhaSaúde". O MVP é uma versão inicial simplificada do aplicativo que contém apenas os recursos essenciais para atender às necessidades dos usuários. Este documento descreverá a arquitetura de serviços de TI, a solução de frontend, backend utilizados no MVP.

# Arquitetura de Serviços de TI
## Frontend:
O frontend é a parte do aplicativo com a qual os usuários interagem. Para um MVP do MinhaSaúde, você pode seguir estas etapas:

## Estrutura de Pastas e Arquivos:
1.	index.html:  Este é o ponto de entrada do aplicativo.

2.	styles.css: O arquivo de estilos CSS que será usado para estilizar a interface do usuário.

3.	script.js: O arquivo JavaScript que conterá a lógica do frontend.
## Páginas e Componentes:
1.	Página Principal: Permitirá o usuário acessa a página inicial do aplicativo MinhaSaúde no frontend.

## Bibliotecas e Frameworks:
4.	HTML, CSS: Para estruturar e estilizar as páginas.

5.	JavaScript: Para interatividade e manipulação.
#
# Backend:
O backend será desenvolvido em Java e será responsável por processar solicitações do frontend e fornecer respostas adequadas.

## Estrutura de Pastas e Arquivos:
- src: Código-fonte do aplicativo.

- assets: Recursos gráficos.
- components: Componentes Vue reutilizáveis.
- views: Páginas Vue para diferentes seções do aplicativo.
- router: Configuração de roteamento.
- store: Gerenciamento de estado (usando Vuex).
- services: Comunicação com os serviços de backend.

# Exemplo de Fluxo de Funcionamento:

1 - O usuário acessa a página inicial do aplicativo MinhaSaúde no frontend.

2 - O frontend envia uma solicitação para o backend Java através de um serviço para obter informações iniciais.

3 - O backend processa a solicitação e envia uma resposta com os dados necessários para a página inicial.

4 - O usuário interage com o aplicativo, por exemplo, chatbot.

5 - O frontend envia os detalhes da consulta para o backend.

6 - O backend processa a solicitação, realiza as validações necessárias e envia uma resposta.
