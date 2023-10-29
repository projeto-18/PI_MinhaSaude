

/*const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Substitua 'SUA_CHAVE_DE_API' pela chave de API real fornecida pelo seu serviço de chatbot/IA.
const apiKey = 'SUA_CHAVE_DE_API';
const apiUrl = 'https://api.exemplo.com/chatbot'; // Substitua pelo URL da API do seu serviço.

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    appendMessage('Você:', userMessage);

    // Enviar a mensagem para o serviço de chatbot/IA via API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        const chatbotResponse = data.message; // Supondo que o serviço retorna a resposta em um campo 'message'.

        appendMessage('Chatbot:', chatbotResponse);
    })
    .catch(error => {
        console.error('Erro ao enviar/receber mensagem:', error);
    });

    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}</strong>: ${message}`;
    chatLog.appendChild(messageElement);
}*/


function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}</strong>: ${message}`;

    if (sender === 'Chatbot') {
        // Adicione um estilo CSS para a cor preta ao texto do chatbot
        messageElement.style.color = 'black';
    }

    chatLog.appendChild(messageElement);
}







document.addEventListener('DOMContentLoaded', function() {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    
    sendButton.addEventListener('click', sendMessage);

    


    function sendMessage() {
        const userMessage = userInput.value;
        if (userMessage.trim() === '') return;

        appendMessage('Você:', userMessage);

        if (userMessage === '1') {
            const chatbotResponse = 'Saúde Mental é a saúde do nosso estado psicológico e emocional. É fundamental para uma vida equilibrada. Para saber mais sobre saúde mental, visite (https://www.einstein.br/saudemental).';
            appendMessage('Chatbot:', chatbotResponse);

            setTimeout(() => {
                const followupResponse = 'Gostaria de falar sobre mais algum assunto? 1 - Saúde Mental 2 - Saúde Física 3 - Saúde Emocional 4 - Ajuda.';
                appendMessage('Chatbot:', followupResponse);
            }, 1000);
        } else if (userMessage === '2') {
            const chatbotResponse = 'Saúde Física é a saúde do nosso corpo e bem-estar físico. Manter-se ativo e ter uma alimentação saudável são aspectos importantes. Para mais informações, visite  (https://asapsaude.org.br/jornada-de-gsp/saude-fisica-e-mental/3192/).';
            appendMessage('Chatbot:', chatbotResponse);

            setTimeout(() => {
                const followupResponse = 'Gostaria de falar sobre mais algum assunto? 1 - Saúde Mental 2 - Saúde Física 3 - Saúde Emocional 4 - Ajuda.';
                appendMessage('Chatbot:', followupResponse);
            }, 1000);
        } else if (userMessage === '3') {
            const chatbotResponse = 'Saúde Emocional é o cuidado com as emoções e o equilíbrio psicológico. Manter relações saudáveis e lidar com o estresse são aspectos essenciais. Saiba mais  (https://escoladainteligencia.com.br/blog/saude-emocional/).';
            appendMessage('Chatbot:', chatbotResponse);

            setTimeout(() => {
                const followupResponse = 'Gostaria de falar sobre mais algum assunto? 1 - Saúde Mental 2 - Saúde Física 3 - Saúde Emocional 4 - Ajuda.';
                appendMessage('Chatbot:', followupResponse);
            }, 1000);
        } else if (userMessage === '4') {
            const chatbotResponse = 'Se você precisa de ajuda imediata, por favor, entre em contato com um profissional de saúde ou ligue para um serviço de apoio. Estamos aqui para ajudar. Para mais informações, visite  (https://cvv.org.br/wp-content/uploads/2018/09/LIgue-188-1.mp4).';
            appendMessage('Chatbot:', chatbotResponse);

            setTimeout(() => {
                const followupResponse = 'Gostaria de falar sobre mais algum assunto? 1 - Saúde Mental 2 - Saúde Física 3 - Saúde Emocional 4 - Ajuda.';
                appendMessage('Chatbot:', followupResponse);
            }, 1000);
        } else {
            const chatbotResponse = 'Seja bem-vindo ao aplicativo web MinhaSaúde. Por favor, escolha uma opção: 1 - Saúde Mental 2 - Saúde Física 3 - Saúde Emocional 4 - Ajuda.';
            appendMessage('Chatbot:', chatbotResponse);
        }

        userInput.value = '';
    }

    

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}</strong>: ${message}`;

    if (sender === 'Chatbot') {
        // Adicione um estilo CSS para a cor preta ao texto do chatbot
        messageElement.style.color = 'black';
    }

    // Adicione uma classe CSS para separar as respostas do chatbot por uma linha em branco
    if (sender === 'Chatbot') {
        messageElement.classList.add('chatbot-response');
    }

    chatLog.appendChild(messageElement);
}




    // Iniciar a conversa com a mensagem de boas-vindas.
    const welcomeMessage = 'Seja bem-vindo ao aplicativo web MinhaSaúde. Por favor, escolha uma opção: 1 - Saúde Mental 2 - Saúde Física 3 - Saúde Emocional 4 - Ajuda.';
    appendMessage('Chatbot:', welcomeMessage);
});


