

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




const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;
    
    appendMessage('Você:', userMessage);
    // Aqui você pode adicionar a lógica para enviar a mensagem ao chatbot e receber uma resposta da IA.
    
    // Simulação de resposta do chatbot (substitua isso com a lógica real):
    setTimeout(() => {
        const chatbotResponse = 'Olá! Isso é uma resposta do chatbot.';
        appendMessage('Chatbot:', chatbotResponse);
    }, 1000);

    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}</strong>: ${message}`;
    chatLog.appendChild(messageElement);
}
